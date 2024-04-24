import { call, put } from '@redux-saga/core/effects';
import I18n from 'i18n-js';
import isEqual from 'lodash/isEqual';
import moment, { Moment } from 'moment';
import { Linking, NativeModules, Platform } from 'react-native';
import Contacts from 'react-native-contacts';
import DeviceInfo, {
  getBuildNumber,
  getVersion
} from 'react-native-device-info';
import RNFS from 'react-native-fs';
import {
  PERMISSIONS,
  RESULTS,
  request,
  requestMultiple
} from 'react-native-permissions';
import Realm from 'realm';
import {
  APP_CONSTANT,
  APP_REGEX,
  CALL_SUPPORT_DATA,
  DYNAMIC_URL_CHECK,
  LANGUAGE_CODE_SUPPORTED_LIST
} from '../Constants/Constants';
import { COUNTRY_ID } from './../Constants/AppConfig';
import {
  AcreageUnit,
  ServicesListKey,
  getCountryAcreageUnit
} from './../Constants/Constants';
import AsyncStorageManager, {
  LOCAL_KEYS
} from './AsyncStorage/AsyncStorageManager';
import { LOCALE_CONSTANT } from './Localization/LocalizationConstant';
import LocalizedStrings from './Localization/LocalizedStrings';
import { I18manager } from './Localization/i18n';
import { getScreenShot } from './ScreenShot';
import ValidationManager from './Validation/ValidationManager';
import Database from './../ServiceWorkers/DatabaseManager/DatabaseHelper';
import { DATA_BASE_SCHEMA } from './../ServiceWorkers/DatabaseManager/DBConstant';
import { SETUP_ACCOUNT_CHAT } from './Analytics/EventConstant';
import { trackEvent } from './Analytics';
import { getAllTranslation } from './Localization/PharesTranslation';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import notifee from '@notifee/react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { findIndex, groupBy, pick, slice } from 'lodash';
import { formatDate } from './DateTimeUtil';
import { WeatherDailyDataProps } from '../Screens/Home/WeatherRevamp/ParseWeatherData';

export const copyRealmObject = (item: Realm.Object) => {
  return item.toJSON();
};

export const fixedLatLngLength = (value: any) => {
  return Number(value).toFixed(6);
};

export const convertObjectToArray = (item: any) => {
  return typeof item === 'object'
    ? Object.keys(item).map((key) => item[key])
    : item;
};

export const handleUrls = (url: string, shouldConvertURL?: boolean) => {
  let finalPath = '';
  const temp = url && url.split('\\').join('/');
  if (shouldConvertURL && Platform.OS === 'ios') {
    finalPath = `file://${RNFS.DocumentDirectoryPath}/${temp}`;
  } else {
    finalPath = `file:${RNFS.DocumentDirectoryPath}/${temp}`;
  }
  return finalPath;
};

export const getPasswordErrorMessage = () => {
  return {
    minLength: LocalizedStrings.minLength(),
    upper: LocalizedStrings.oneUpperCase(),
    lower: LocalizedStrings.oneLowerCase(),
    number: LocalizedStrings.oneNumber()
  };
};
export const removeDuplicateData = (data: any) => {
  return [...new Set(data)];
};

export const getAppVersion = () => {
  const version = getVersion();
  return version;
};

export const getAppBuildNumber = () => {
  const buildNumber = getBuildNumber();
  return buildNumber;
};

export const getPasswordText = (criteria: any) => {
  const truthy = Object.keys(criteria).filter((e) => !criteria[e]);
  return truthy; // .map((d) => getPasswordErrorMessage()[d]).join('\n');
};

export const getDefinedName = (nameList: any, title: any) => {
  if (nameList === undefined || nameList.length === 0) {
    return title;
  }

  const titleArr = nameList.map((element: any) => {
    return element.name;
  });
  let incValue = 0;
  let newTitle = title;
  do {
    newTitle = incValue === 0 ? title : title + incValue;
    incValue++;
  } while (titleArr.indexOf(newTitle) > -1);
  return newTitle;
};

export const getNameByValueFromArray = (itemValue: any, itemsArray: any) => {
  if (itemValue === undefined) {
    return itemsArray[0].name;
  }
  const itemName = itemsArray.filter((item: any) => {
    if (item.value === itemValue) {
      return item;
    }
  });
  return itemName[0].name;
};

export const getValueByNameFromArray = (itemName: any, itemsArray: any) => {
  const itemValue = itemsArray.filter((item: any) => {
    if (item.name === itemName) {
      return item;
    }
  });
  return itemValue[0].value;
};

export const storeSelectedLanguageData = (value: any) => {
  if (LANGUAGE_CODE_SUPPORTED_LIST.includes(value.key)) {
    AsyncStorageManager.localStorage.storeData(
      LOCAL_KEYS.DEFAULT_SUPPORTED_LANGUAGE,
      JSON.stringify(value)
    );
    LOCALE_CONSTANT.DEFAULT_SUPPORTED_LANGUAGE = value.key;
  } else {
    LOCALE_CONSTANT.DEFAULT_SUPPORTED_LANGUAGE =
      LANGUAGE_CODE_SUPPORTED_LIST[0];
  }
  setLanguageOfApp();
};

export const getSelectedLangLabel = (lng: any, list: any) => {
  const s = list?.filter((v: any) => {
    return v?.languageCode.toLowerCase() === lng;
  });

  if (s?.length !== 0) {
    return {
      key: s && s[0].languageCode.toLowerCase(),
      label: s && s[0].displayName,
      shortLabel: s && s[0].languageCode.toLowerCase(),
      languageId: s && s[0].languageId
    };
  } else {
    return { key: 'en', label: 'English', shortLabel: 'en' };
  }
};

export const getTempByUnit = (
  temp: any,
  unit: any,
  sliceUnit?: boolean | false
) => {
  const newUnit = ValidationManager.objectShared.isValidValue(unit, 'ha');
  if (!temp) {
    return '--';
  }
  switch (newUnit) {
    case 'ac':
      if (sliceUnit) {
        return Number((temp * 9) / 5 + 32).toFixed(1);
      }
      return Number((temp * 9) / 5 + 32).toFixed(2) + ' ºF'; // fahrenheit is imperial
    case 'ha':
      if (sliceUnit) {
        return Number(temp).toFixed(1);
      }
      return Number(temp).toFixed(2) + ' ºC'; // Degree Celcius is Metric
    default:
      return Number(temp).toFixed(2);
  }
};

export const getWindByUnit = (
  temp: any,
  unit: any,
  sliceUnit?: boolean | false
) => {
  const newUnit = ValidationManager.objectShared.isValidValue(unit, 'ha');
  if (!temp) {
    return '--';
  }
  switch (newUnit) {
    case 'ac':
      if (sliceUnit) {
        return Number(temp / 1.7).toFixed(1);
      }
      return Number(temp / 1.7).toFixed(2) + ' M/h'; // m/h is imperial
    case 'ha':
      if (sliceUnit) {
        return Number(temp).toFixed(1);
      }
      return Number(temp).toFixed(2) + ' Km/h'; // km/h is Metric
    default:
      return Number(temp).toFixed(2);
  }
};

export const getDefaultSelectedLanguage = async () => {
  try {
    const value: any = await AsyncStorageManager.localStorage.retrieveData(
      LOCAL_KEYS.DEFAULT_SUPPORTED_LANGUAGE
    );
    const translationDB = await AsyncStorageManager.localStorage.retrieveData(
      LOCAL_KEYS.LANGUAGE_TRANSLATION
    );
    let latestData = null;
    if (translationDB) {
      latestData = JSON.parse(translationDB);
    }
    if (value) {
      const languageObj = JSON.parse(value);
      LOCALE_CONSTANT.DEFAULT_SUPPORTED_LANGUAGE = languageObj.key;
      setLanguageOfApp(latestData);
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * total cart quantity from cart product array
 * @array products
 * @returns
 */
export const getTotalCartItem = (products: any): number => {
  if (products && products.length > 0) {
    let total: any = 0;
    const totalItems: any =
      products.length === 1
        ? products[0].quantity
        : products.reduce((a: any, b: any) => {
            if (typeof a !== 'number') {
              total += a.quantity + b.quantity;
            } else {
              total = a + b.quantity;
            }
            return total;
          });
    return totalItems;
  }
  return 0;
};

/**
 * Request permission on android
 * @returns
 */
export const requestWritePermission = async () => {
  if (Platform.OS === 'ios') {
    return true;
  }
  const versionName = DeviceInfo.getSystemVersion().split('.');
  if (Number(versionName[0]) >= 13) {
    return true;
  }
  try {
    const granted = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, {
      title: LocalizedStrings.writePermission(),
      message: LocalizedStrings.writePermissionDescription(),
      buttonNeutral: LocalizedStrings.AskMeLater(),
      buttonNegative: LocalizedStrings.cancel(),
      buttonPositive: LocalizedStrings.OK()
    });
    if (granted === RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
};

/**
 * return error messages from api
 * @param value
 * @returns
 */
export const parseECommerceApiErrorMessage = (value: any): any => {
  if (value && value?.message && value.message?.length > 0) {
    return value.message;
  } else if (value && value) {
    return value;
  } else {
    return '';
  }
};

/**
 * Price format
 * @param value
 * @param format
 * @returns
 */
export const priceFormatter = (
  value: any,
  format = APP_REGEX.REGEX_PRICE_FORMAT
) => {
  if (String(value).length === 0) {
    return '';
  }
  return String(value).replace(format, ',');
};

/**
 * check service available from sliderList, serviceList
 * @array sliderList
 * @array serviceList
 * @ServicesListKey serviceKey
 * @returns
 */
export const isServiceAvailable = (
  sliderList: any,
  serviceList: any,
  serviceKey: ServicesListKey
) => {
  if (
    sliderList &&
    sliderList.find((it: any) => it.key === serviceKey && it.isEnabled === true)
  ) {
    return true;
  }
  if (
    serviceList &&
    serviceList.find(
      (it: any) => it.key === serviceKey && it.isEnabled === true
    )
  ) {
    return true;
  }
  return false;
};

/**
 *
 * @param mobileNo
 * @returns
 */
export const getMerchantNumberForPK = (mobileNo: string) => {
  if (!mobileNo) {
    return '';
  }
  if (typeof mobileNo === 'string' && Array.isArray(mobileNo) === false) {
    const parseString: any = mobileNo.trim().replace(/\[\]/g, '');
    const splitData: any = parseString.split(/,/g);
    return splitData[0].replace(/\[/g, '').replace(/\]/g, '');
  }
  return mobileNo[0];
};

export const isUploadedImagePath = (data: any) => {
  if (data === undefined || data === null) {
    return '';
  }
  if (typeof data === 'string') {
    return data;
  }
  if (data !== null && typeof data === 'object') {
    return data?.imgUri ?? data;
  }
};
/**
 * set language of app
 * @param translationDB
 */
export const setLanguageOfApp = (translationDB: any = null) => {
  const activeLangKey: any = LOCALE_CONSTANT.DEFAULT_SUPPORTED_LANGUAGE;
  const localTranslation = I18n.translations[activeLangKey];
  let localTranslationLength = 0;
  let savedTranslationLength = 0;
  if (typeof localTranslation === 'object' && localTranslation !== null) {
    localTranslationLength = Object.keys(localTranslation).length;
  }
  // const localTranslationLength = Object.keys(localTranslation).length;
  let data: any = null;
  if (translationDB) {
    const onlineTranslation = translationDB[activeLangKey].translation;
    data = onlineTranslation;
    savedTranslationLength = Object.keys(onlineTranslation).length;
  } else {
    data = localTranslation;
  }
  // check key length between online and offline translation
  if (savedTranslationLength > 0 && localTranslationLength > 0) {
    if (localTranslationLength > savedTranslationLength) {
      data = localTranslation;
    }
  }
  if (data) {
    I18manager.updateLocalTranslation(activeLangKey, data);
  }
  I18manager.setAppLanguage(activeLangKey);
};

/**
 * get service available from sliderList, serviceList
 * @array sliderList
 * @array serviceList
 * @ServicesListKey serviceKey
 * @returns
 */
export const getServices = (
  sliderList: any,
  serviceList: any,
  serviceKey: ServicesListKey
) => {
  let findObj;
  if (sliderList) {
    findObj = sliderList.find(
      (it: any) => it.key === serviceKey && it.isEnabled === true
    );
  }
  if (serviceList) {
    findObj = serviceList.find(
      (it: any) => it.key === serviceKey && it.isEnabled === true
    );
  }
  return findObj;
};

/**
 * compare object of array equality
 * @param nextArray
 * @param prevArray
 * @returns
 */
export const isArrayOfObjectEquals = (
  nextArray: any,
  prevArray: any
): boolean => {
  if (nextArray?.length !== prevArray?.length) {
    return false;
  }
  let result: boolean = true;
  for (let j = 0; j < nextArray.length; j++) {
    if (!isEqual(nextArray[j], prevArray[j])) {
      result = false;
      break;
    }
  }
  return result;
};

/**
 * retry api if failed before 10 sec
 * @param currentTime
 * @param error
 * @param fn
 * @param action
 * @param errorAction
 */
export function* retryApiSagaRequest(
  currentTime: any,
  error: any,
  fn: any,
  action: any,
  errorAction: any
) {
  const seconds = moment().diff(currentTime, 'second');
  if (seconds < 10) {
    if (action === undefined) {
      yield call(fn, currentTime);
    } else {
      yield call(fn, action, currentTime);
    }
  } else {
    yield put(errorAction(error));
  }
}

/**
 * crash fix solution for android 12
 * JSApplicationIllegalArgumentException: Animated node with tag
 * @returns
 */
export const getNativeDriver = () => {
  if (Platform.OS === 'android') {
    const versionName = DeviceInfo.getSystemVersion().split('.');
    return Number(versionName[0]) === 12 ? false : true;
  }
  return true;
};

/**
 * Open supported Urls
 */
export const openLinkUrl = (url: any) => {
  Linking.canOpenURL(url)
    .then(async (supported) => {
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log('Unable to open the url');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const acreageUnitConversionToAcre = (value: any) => {
  if (value === undefined || value === null || `${value}`.trim().length === 0) {
    return '';
  }
  if (isNaN(value) === false) {
    switch (getCountryAcreageUnit()) {
      case AcreageUnit.HECTARE:
        const hectareToAcre: any = Number(value) * 2.471;
        return `${hectareToAcre}`;
      case AcreageUnit.RAI:
        const raiToAcre: any = Number(value) / 2.529;
        return `${raiToAcre}`;

      default:
        return `${value}`;
    }
  }

  return '';
};

export enum DeviceType {
  IOS = 'IOS',
  ANDROID = 'ANDROID'
}

/**
 * get updated user profile
 * @param userObj
 * @param countryCode
 * @param phoneNumber
 * @returns
 */
export const getUpdatedUserObject = (
  userObj: any,
  countryCode: any,
  phoneNumber: any
) => {
  return {
    stateName: userObj?.userProfile?.stateName
      ? userObj?.userProfile?.stateName
      : '',
    enStateName: userObj?.userProfile?.enStateName
      ? userObj?.userProfile?.enStateName
      : '',
    districtName: userObj?.userProfile?.districtName
      ? userObj?.userProfile?.districtName
      : '',
    enDistrictName: userObj?.userProfile?.enDistrictName
      ? userObj?.userProfile?.enDistrictName
      : '',
    talukaName: userObj?.userProfile?.talukaName
      ? userObj?.userProfile?.talukaName
      : '',
    enTalukaName: userObj?.userProfile?.enTalukaName
      ? userObj?.userProfile?.enTalukaName
      : '',
    locality: userObj?.userProfile?.locality
      ? userObj?.userProfile?.locality
      : '',
    acreage: userObj?.userProfile?.acreage ? userObj?.userProfile?.acreage : '',
    uniqueStateId: userObj?.userProfile?.uniqueStateId
      ? userObj?.userProfile?.uniqueStateId
      : 0,
    uniqueDistrictId: userObj?.userProfile?.uniqueDistrictId
      ? userObj?.userProfile?.uniqueDistrictId
      : 0,
    uniqueTalukaId: userObj?.userProfile?.uniqueTalukaId
      ? userObj?.userProfile?.uniqueTalukaId
      : 0,
    countryId: countryCode,
    createdDate: userObj?.userProfile?.createdDate
      ? userObj?.userProfile?.createdDate
      : '',
    firstName: userObj?.userProfile?.firstName
      ? userObj?.userProfile?.firstName
      : '',
    id: userObj?.userProfile?.id,
    lastName: userObj?.userProfile?.lastName
      ? userObj?.userProfile?.lastName
      : '',
    mobileNo: phoneNumber
      .trim()
      .replace('+', '')
      .replace(/\s+/g, '')
      .slice(countryCode.length - 1),
    pinCode: userObj?.userProfile?.pinCode ? userObj?.userProfile?.pinCode : '',
    profilePic: userObj?.userProfile?.profilePic
      ? userObj?.userProfile?.profilePic
      : '',
    latitude: userObj?.userProfile?.latitude
      ? userObj?.userProfile?.latitude
      : 0.0,
    longitude: userObj?.userProfile?.longitude
      ? userObj?.userProfile?.longitude
      : 0.0,
    isActive: userObj?.userProfile?.isActive
      ? userObj?.userProfile?.isActive
      : 0,
    isAnanthamUser: userObj?.userProfile?.isAnanthamUser
      ? userObj?.userProfile?.isAnanthamUser
      : false,
    birthDate: userObj?.userProfile?.birthDate
      ? userObj?.userProfile?.birthDate
      : '',
    keyCrop: userObj?.userProfile?.keyCrop ? userObj?.userProfile?.keyCrop : '',
    acreageUnit: userObj?.userProfile?.acreageUnitDto?.unitSystemName
      ? userObj?.userProfile?.acreageUnitDto?.unitSystemName
      : getCountryAcreageUnit(),
    ageRangeMin: userObj?.userProfile?.ageRangeResponseDto?.ageRangeMin
      ? userObj?.userProfile?.ageRangeResponseDto?.ageRangeMin?.toString()
      : '',
    ageRangeMax: userObj?.userProfile?.ageRangeResponseDto?.ageRangeMax
      ? userObj?.userProfile?.ageRangeResponseDto?.ageRangeMax?.toString()
      : ''
  };
};

/**
 * Handles sharing a screenshot via WhatsApp.
 * It checks if WhatsApp or WhatsApp Business is installed on the device,
 * captures a screenshot, and shares it using the appropriate app.
 *
 * @throws {Error} If there is an error while accessing WhatsApp.
 */
export const handleWhatsappScreenShotShare = async (
  viewRef = null,
  from = null,
  netinfo = null
) => {
  let chatInitiated = false;
  const supportNumber =
    CALL_SUPPORT_DATA[COUNTRY_ID]?.[0]?.whatsappNumber ?? '';
  const whatsAppNumber: string = supportNumber.replace('+', '') ?? ''; // NOSONAR Check if number exists
  const message: string = 'Hi';
  try {
    if (Platform.OS === 'android') {
      const uri: any = await getScreenShot(viewRef);
      const permissionResult: any = await requestMultiple([
        PERMISSIONS.ANDROID.WRITE_CONTACTS,
        PERMISSIONS.ANDROID.READ_CONTACTS
      ]);
      if (
        uri !== null &&
        permissionResult[PERMISSIONS.ANDROID.WRITE_CONTACTS] ===
          RESULTS.GRANTED &&
        permissionResult[PERMISSIONS.ANDROID.READ_CONTACTS] === RESULTS.GRANTED
      ) {
        const checkContactExist: any = await Contacts.getContactsByPhoneNumber(
          supportNumber
        );
        if (checkContactExist.length === 0) {
          // save contacts
          await Contacts.addContact({
            givenName: 'Syngenta',
            displayName: 'Syngenta',
            phoneNumbers: [
              {
                label: 'Mobile',
                number: supportNumber
              }
            ]
          });
          NativeModules.RNConfig.syncContact();
        }
        await new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
          chatInitiated = true;
          NativeModules.RNConfig.shareScreenShotOnWhatsapp(
            whatsAppNumber,
            uri,
            false
          );
        });
      } else {
        chatInitiated = true;
        await Linking.openURL(
          `whatsapp://send?phone=${whatsAppNumber}&text=${message}`
        );
      }
    } else {
      chatInitiated = true;
      await Linking.openURL(
        `whatsapp://send?phone=${whatsAppNumber}&text=${message}`
      );
    }
    handleSetupAccountChatEvent(chatInitiated, from, netinfo);
  } catch (e) {
    console.log(e);
  }
};

const handleSetupAccountChatEvent = async (
  isChatInitiated: any,
  from: any,
  netinfo: any
) => {
  if (from === 'setup_account') {
    const eventObj = await getCommonEventObject();
    eventObj.chat_initiated = isChatInitiated;
    eventObj.country_code = COUNTRY_ID;
    eventObj.connection_type = netinfo.type;
    eventObj.language_preference = I18manager.getAppLanguage();
    trackEvent(SETUP_ACCOUNT_CHAT, eventObj);
  }
};

export const convertArabicToASCII = (val: any) => {
  return val
    .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: any) => {
      return d.charCodeAt(0) - 1632;
    })
    .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d: any) => {
      return d.charCodeAt(0) - 1776;
    });
};

export const getOsName = () => {
  const systemName = DeviceInfo.getModel();
  const systemVersion = DeviceInfo.getSystemVersion();
  return `${systemName}, Version-${systemVersion}`;
};

export const getDayCategory = () => {
  const today = new Date();
  const curHr = today.getHours();
  if (COUNTRY_ID === 'PH') {
    if (curHr >= 1 && curHr < 12) {
      return 'Morning';
    } else if (curHr >= 12 && curHr < 18) {
      return 'Afternoon';
    } else if (curHr >= 18 && curHr < 24) {
      return 'Night';
    }
  } else {
    if (curHr >= 5 && curHr < 12) {
      return 'Morning';
    } else if (curHr >= 12 && curHr < 16) {
      return 'Afternoon';
    } else if (curHr >= 16 && curHr < 19) {
      return 'Evening';
    } else {
      return 'Night';
    }
  }
};

export const getCommonEventObject = async () => {
  const userDetails = Database.sharedDb.getData(
    DATA_BASE_SCHEMA.SMALLHOLDERUSERPROFILE
  ) as any;
  const retrievedToken = await AsyncStorageManager.localStorage.retrieveData(
    LOCAL_KEYS.AUTH_TOKEN_VALUE
  );
  const eventObj: any = {
    user_id: userDetails[0]?.id,
    session_id: retrievedToken,
    device_type: Platform.OS === 'android' ? 'ANDROID' : 'IOS',
    device_os: getOsName(),
    timestamp: moment().unix(),
    app_version: DeviceInfo.getVersion()
  };
  return eventObj;
};

/**
 * Update phrase translation after every 3 days
 */
export const isPhraseTranslationUpdateRequired = async () => {
  try {
    const isPhraseNeedUpdate =
      await AsyncStorageManager.localStorage.retrieveData(
        LOCAL_KEYS.PHRASE_TRANSLATION_UPDATE
      );
    if (isPhraseNeedUpdate === undefined || isPhraseNeedUpdate === null) {
      await AsyncStorageManager.localStorage.storeData(
        LOCAL_KEYS.PHRASE_TRANSLATION_UPDATE,
        `${new Date().toISOString()}`
      );
      await getAllTranslation();
    } else {
      const savedTime: Moment = moment(isPhraseNeedUpdate).locale('en');
      const currentTime: Moment = moment(new Date().toISOString()).locale('en');
      const numberOfDays: number = currentTime.diff(savedTime, 'days');
      if (numberOfDays >= APP_CONSTANT.PHRASE_TRANSLATION_SYNC) {
        await getAllTranslation();
      }
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Parses a dynamic URL and extracts a parameter based on certain conditions.
 * @param link - The link object containing the URL.
 * @returns The extracted parameter from the URL.
 */
export const parseDynamicUrl = (link: { url?: string }): any => {
  const { url = '' } = link ?? {};
  const param = { value: '', key: '' };
  if (url.length > 0) {
    const parseUrl: any = url.includes('?') ? url.split(/\?/g)[1] : url;
    if (parseUrl.includes(DYNAMIC_URL_CHECK.LOYALITY)) {
      param.value = DYNAMIC_URL_CHECK.LOYALITY;
    } else if (parseUrl.includes(DYNAMIC_URL_CHECK.REFER_CODE)) {
      param.value = parseStringUsingRegex(url, APP_REGEX.REGEX_REFERRAL_CODE);
    } else {
      const parseDeepLinkUrl: any = url.includes('?')
        ? url.split(/\?/g)[0]
        : url;
      param.value = parseDeepLinkUrl.replace(APP_REGEX.REGEX_DYNAMIC_LINK, '');
      param.key = 'other';
    }
  }
  return param;
};

export const parseStringUsingRegex = (
  value: any,
  regex: any,
  length = 2
): string => {
  if (length === 0) {
    return '';
  }
  const match = value.match(regex);
  return match !== null && match.length === length
    ? match[match.length - 1]
    : '';
};

const resetDynamicLinkState = (callback: any) => {
  callback({ dynamicValue: '', dynamicKey: '', link: null });
};

/**
 * parse dynamic/deep link
 * @param link
 * @param allowMarketing
 * @param callback
 */
const handleDynamicLink = async (link: any, callback: ({}) => void) => {
  try {
    if (link !== null) {
      const { value, key }: any = parseDynamicUrl(link);
      const result: any = { link, dynamicValue: '', dynamicKey: '' };
      if (value?.length > 0) {
        result.dynamicValue = value;
        result.dynamicKey = key;
        if (String(key).trim() !== 'other') {
          await AsyncStorageManager.localStorage.storeData(
            LOCAL_KEYS.REFERRAL_CODE,
            value
          );
        }
      }
      callback(result);
    } else {
      resetDynamicLinkState(callback);
    }
  } catch (error) {
    resetDynamicLinkState(callback);
  }
};

/**
 * deep & dynamic link handling
 * @param data
 * @param allowMarketing
 * @param callback
 */
export const getHandleDynamicLink = async (
  data: any,
  callback: ({}) => void
) => {
  try {
    if (data !== null) {
      const { url = null }: any = data;
      if (url !== null && url?.length > 0) {
        if (
          parseStringUsingRegex(
            url,
            APP_REGEX.REGEX_DYNAMIC_LINK_PAGE_PARSER,
            1
          ).length > 0
        ) {
          const result: any = await dynamicLinks().resolveLink(url);
          await handleDynamicLink(result, callback);
        } else if (
          parseStringUsingRegex(url, APP_REGEX.REGEX_DEEP_LINK_PARSER, 1)
            .length > 0
        ) {
          const parseDeepLinkUrl: string = url.replace(
            /app:|applinks:/g,
            'https:'
          );
          const utmDetails: any = {
            utm_source: '',
            utm_campaign: '',
            utm_medium: ''
          };
          // utm source
          utmDetails.utm_source = parseStringUsingRegex(
            parseDeepLinkUrl,
            APP_REGEX.REGEX_UTM_SOURCE
          );
          // utm medium
          utmDetails.utm_medium = parseStringUsingRegex(
            parseDeepLinkUrl,
            APP_REGEX.REGEX_UTM_MEDIUM
          );
          // utm campaign
          utmDetails.utm_campaign = parseStringUsingRegex(
            parseDeepLinkUrl,
            APP_REGEX.REGEX_UTM_CAMPAIGN
          );
          const obj: any = {
            url: parseDeepLinkUrl,
            utmParameters: utmDetails
          };
          await handleDynamicLink(obj, callback);
        } else {
          resetDynamicLinkState(callback);
        }
      } else {
        resetDynamicLinkState(callback);
      }
    } else {
      resetDynamicLinkState(callback);
    }
  } catch (error) {
    resetDynamicLinkState(callback);
  }
};

/**
 * handle dynamic && deep link
 * don't remove below asyncStorage code, Bug fixed of getInitialURL called after RN.restart()
 * @param data
 */
export const dynamicLinkParse = async (data: any, callback: any) => {
  const link: any = typeof data === 'string' ? { url: data } : data;
  const deepLinkLanguageChangeFlag: any =
    await AsyncStorageManager.localStorage.retrieveData(
      LOCAL_KEYS.DEEP_LINK_LANG_CHANGE_FLAG
    );
  const deepLinkUrlCheck: any =
    await AsyncStorageManager.localStorage.retrieveData(
      LOCAL_KEYS.DEEP_LINK_URL_CHECK
    );
  await AsyncStorageManager.localStorage.storeData(
    LOCAL_KEYS.DEEP_LINK_IOS_KEY,
    JSON.stringify(link)
  );
  if (
    deepLinkLanguageChangeFlag !== undefined &&
    deepLinkLanguageChangeFlag !== null &&
    String(deepLinkLanguageChangeFlag) === 'true'
  ) {
    await AsyncStorageManager.localStorage.removeMultiple([
      LOCAL_KEYS.DEEP_LINK_URL_CHECK,
      LOCAL_KEYS.DEEP_LINK_LANG_CHANGE_FLAG
    ]);
    // resetDynamicLinkState(callback);
  } else if (deepLinkUrlCheck === undefined || deepLinkUrlCheck === null) {
    await AsyncStorageManager.localStorage.storeData(
      LOCAL_KEYS.DEEP_LINK_URL_CHECK,
      link?.url
    );
    await getHandleDynamicLink(link, callback);
  } else if (link?.url !== deepLinkUrlCheck) {
    await AsyncStorageManager.localStorage.storeData(
      LOCAL_KEYS.DEEP_LINK_URL_CHECK,
      link?.url
    );
    await getHandleDynamicLink(link, callback);
  } else if (
    deepLinkLanguageChangeFlag === undefined ||
    deepLinkLanguageChangeFlag === null
  ) {
    await AsyncStorageManager.localStorage.storeData(
      LOCAL_KEYS.DEEP_LINK_URL_CHECK,
      link?.url
    );
    await getHandleDynamicLink(link, callback);
  } else {
    resetDynamicLinkState(callback);
  }
};

export const askNotificationPermissions = async () => {
  try {
    await notifee.requestPermission({
      alert: true,
      sound: true,
      badge: true
    }); // NOSONAR request
    return true;
  } catch (error) {
    console.log(error);
    return true;
  }
};

export const parseEventNameString = (eventName: string, cutString = false) => {
  const result: string = eventName
    .trim()
    .replace(/[-\\//]/g, '')
    .replace(/\s/g, '_');
  return cutString ? result.substring(0, 40) : result;
};

export const deleteOriginalPdfPath = async (file: any) => {
  await RNFetchBlob.fs.unlink(file?.filePath);
};
export const getPhoneNumber = (pNumber: string) => {
  return I18manager.isRTL()
    ? pNumber.split(' ').reverse().join(' ').replace('+', '').concat('+')
    : pNumber;
};

export const getAllDates = (dailyData: any) => {
  const todaysDateIndex = findIndex(dailyData, (o: any) => {
    return formatDate(o.date) === formatDate(moment());
  });
  dailyData = slice(
    dailyData,
    todaysDateIndex,
    dailyData.length < 7
      ? dailyData.length
      : todaysDateIndex === 0
      ? 7
      : 7 + todaysDateIndex
  );
  const processedArray = groupBy(dailyData, (element: any) =>
    formatDate(element.date)
  );
  const allDates = Object.keys(processedArray);
  return allDates;
};

export const processHourlyData = (dataArray: object) => {
  let processedArray = groupBy(dataArray, (element: any) =>
    formatDate(element.date)
  );
  let allDates = Object.keys(processedArray);
  const todaysDateIndex = findIndex(
    allDates,
    (o) => o === formatDate(moment())
  );
  allDates = slice(allDates, todaysDateIndex, allDates.length);
  processedArray = pick(processedArray, allDates);
  return processedArray;
};

export const getDaywiseData = (processedArrayDaywise: object, date: string) => {
  if (processedArrayDaywise[date]) {
    const hourlyArray = processedArrayDaywise[date];
    return hourlyArray;
  }
};

export const getForcastData = (dataArray: WeatherDailyDataProps[]) => {
  const todaysDateIndex = findIndex(
    dataArray,
    (o: WeatherDailyDataProps) => formatDate(o?.date) === formatDate(moment())
  );

  dataArray = slice(
    dataArray,
    todaysDateIndex,
    dataArray.length < 7
      ? dataArray.length
      : todaysDateIndex === 0
      ? 7
      : 7 + todaysDateIndex
  );
  return dataArray;
};

export const getHourlyAllDates = (dataArray: object) => {
  const processedArray = groupBy(dataArray, (element: any) =>
    formatDate(element.date)
  );
  let allDates = Object.keys(processedArray);
  const todaysDateIndex = findIndex(
    allDates,
    (o) => o === formatDate(moment())
  );
  allDates = slice(allDates, todaysDateIndex, allDates.length);
  return allDates;
};

export const isInArray = (array: string[], value: string) => {
  return (
    (
      array.find((item) => {
        return item === value;
      }) || []
    ).length > 0
  );
};

export const getNextTimeSlot = (arr) => {
  const currentTime = moment();

  for (const innerArray of arr) {
    for (const time of innerArray) {
      const timeMoment = moment(time, 'hh:mm A');
      if (timeMoment.isAfter(currentTime)) {
        return innerArray;
      }
    }
  }

  return null;
};

export const divideTimeArrayIntoSlots = (arr) => {
  const slots = [];
  let currentSlot = [arr[0]];
  for (let i = 0; i < arr.length - 1; i++) {
    const currentTime = moment(arr[i], 'hh:mm A');
    const nextTime = moment(arr[i + 1], 'hh:mm A');
    const diffInHours = nextTime.diff(currentTime, 'hours');

    if (diffInHours > 1) {
      slots.push(currentSlot);
      currentSlot = [arr[i + 1]];
    } else {
      currentSlot.push(arr[i + 1]);
    }
  }
  slots.push(currentSlot);
  return slots;
};

export const addOneHourIfNeeded = (timeSlots) => {
  // Check if the length of the array is 1
  if (timeSlots.length === 1) {
    const time = timeSlots[0]; // Extract the single time slot
    const endTime = moment(time, 'hh:mm A').add(1, 'hour').format('hh:mm A'); // Add one hour to the time
    return [time, endTime]; // Return an array with the original time and the new end time
  }
  return timeSlots; // If array length is not 1, return the original array
};
