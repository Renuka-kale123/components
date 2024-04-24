import I18n from 'i18n-js';
import { RTL_LANGUAGES } from '../../Constants/Constants';
import { COUNTRY_ID } from '../../Constants/AppConfig';
import { trackEvent } from '../Analytics';
import { LANGUAGE_PHRASE_UPDATE_TRANSLATION } from '../Analytics/EventConstant';
import { LOCALE_CONSTANT } from './LocalizationConstant';
import { setLoyaltyTranslations } from 'react-native-syngenta-loyalty';
import en from './Locales/en/translations.json';
import ur from './Locales/ur/translations.json';
import bn from './Locales/bn/translations.json';
import id from './Locales/id/translations.json';
import ms from './Locales/ms/translations.json';
import th from './Locales/th/translations.json';
import vi from './Locales/vn/translations.json';
import fil from './Locales/fil/translations.json';
import zh from './Locales/zh-cn/translations.json';

import { setProductScanTranslations } from 'react-native-syngenta-product-assurance';
export class I18manager {
  static initialSetup() {
    I18n.fallbacks = true;
    I18n.translations = { en, ur, bn, id, ms, th, vi, fil };
    I18n.translations['zh-cn'] = zh;
    I18n.locale = LOCALE_CONSTANT.DEFAULT_SUPPORTED_LANGUAGE;
  }

  static setAppLanguage(lng: string) {
    I18n.locale = lng;
  }

  static getAppLanguage() {
    return I18n.locale;
  }

  static isRTL() {
    return RTL_LANGUAGES.includes(I18n.locale) ? true : false;
  }

  static strings(name: string) {
    const str = I18n.t(name);
    return str;
  }

  static updateTranslation = (data: any) => {
    trackEvent(LANGUAGE_PHRASE_UPDATE_TRANSLATION);
    if (data === undefined) {
      return;
    }
    if (COUNTRY_ID === 'IN' || COUNTRY_ID === 'IND') {
      const enData = data.en ? data.en.translation : en;
      const hiData = data.hi?.translation;
      const mrData = data.mr?.translation;
      const knData = data.kn?.translation;
      const teData = data.te?.translation;

      I18n.translations.en = enData;
      I18n.translations.hi = hiData;
      I18n.translations.mr = mrData;
      I18n.translations.kn = knData;
      I18n.translations.te = teData;
    } else if (COUNTRY_ID === 'PK') {
      const enData = data.en ? data.en.translation : en;
      const urData = data.ur.translation;

      I18n.translations.en = enData;
      I18n.translations.ur = urData;
    } else if (COUNTRY_ID === 'ID') {
      const idData = data.id.translation;
      I18n.translations.id = idData;
    } else if (COUNTRY_ID === 'TH') {
      const thData = data.th.translation;
      I18n.translations.th = thData;
      setLoyaltyTranslations(thData);
    } else if (COUNTRY_ID === 'BD') {
      const enData = data.en ? data.en.translation : en;
      const bnData = data.bn.translation;

      I18n.translations.en = enData;
      I18n.translations.bn = bnData;
    } else if (COUNTRY_ID === 'MY') {
      const idData = data.ms.translation;
      const zhData = data.zh.translation;
      I18n.translations.ms = idData;
      I18n.translations['zh-cn'] = zhData;
    } else if (COUNTRY_ID === 'VN') {
      const viData = data.vi.translation;
      I18n.translations.vi = viData;
      setProductScanTranslations(viData);
    } else if (COUNTRY_ID === 'PH') {
      const enData = data.en ? data.en.translation : en;
      const filData = data.fil.translation;
      I18n.translations.en = enData;
      I18n.translations.fil = filData;
    }
    I18n.fallbacks = true;
  };

  static updateLocalTranslation = (key: any, data: any) => {
    if (data === undefined) {
      return;
    }
    trackEvent(LANGUAGE_PHRASE_UPDATE_TRANSLATION);
    if (COUNTRY_ID === 'TH') {
      setLoyaltyTranslations(data);
    } else if (COUNTRY_ID === 'VN') {
      setProductScanTranslations(data);
    }
    I18n.translations[key] = data;
    I18n.fallbacks = true;
  };
}

export default I18n;
