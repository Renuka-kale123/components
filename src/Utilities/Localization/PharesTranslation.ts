// tslint:disable:no-var-requires
import { ErrorMessages } from '../../ServiceWorkers/WebServiceManager/ServerErrorCode';
import { PHRASE_ID, PHRASE_TOKEN } from '../../Constants/AppConfig';
import { trackEvent } from '../Analytics';
import {
  LANGUAGE_LOAD_FROM_PHRASE,
  LANGUAGE_PHRASE_API_ERROR
} from '../Analytics/EventConstant';
import AsyncStorageManager, {
  LOCAL_KEYS
} from '../AsyncStorage/AsyncStorageManager';
import ConsoleLog from '../ConsoleLog';
import { setLanguageOfApp } from './../Wrapper';
import Axios from 'axios';

const loadLangFromPhrase = async () => {
  trackEvent(LANGUAGE_LOAD_FROM_PHRASE);

  const host = 'https://api.phrase.com/v2';
  const projectId = PHRASE_ID;
  const accessToken = PHRASE_TOKEN;
  const queryParams = `access_token=${accessToken}&file_format=i18next`; // &branch=${branch}
  const baseURL = `${host}/projects/${projectId}/locales`;

  ConsoleLog.printConsoleLog(`Base URL for Phrase: ${baseURL}?${queryParams}`);

  const locales = await Axios.get(`${baseURL}?${queryParams}`);

  ConsoleLog.printConsoleLog(
    `Phrase app | Pulling data for languages: ${locales.status}`,
    locales.status
  );

  if (locales.status === 200 && locales?.data && locales?.data?.length > 0) {
    const promises = locales.data.map((locale: any) => {
      const url = `${baseURL}/${locale.id}/download?${queryParams}`;

      return Axios.get(url, { headers: { 'cache-control': 'no-cache' } })
        .then((res: any) => ({
          [locale.code]: {
            translation: res.data
          }
        }))
        .catch((err: any) => {
          trackEvent(
            LANGUAGE_PHRASE_API_ERROR,
            ErrorMessages.errorLogMessage(ErrorMessages.errorCode(err)),
            false
          );
          console.warn(
            `Phrase app | Error while loading ${locale.code}: ${err}`
          );
          throw err;
        });
    });
    const localesArr = await Promise.all(promises);
    return (localesArr || []).reduce((a: any, b: any) => ({ ...b, ...a }), {});
  }
  return await Promise.reject('error');
};

export const getAllTranslation = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = (await loadLangFromPhrase()) as any;
      setLanguageOfApp(data);
      await AsyncStorageManager.localStorage.storeData(
        LOCAL_KEYS.PHRASE_TRANSLATION_UPDATE,
        `${new Date().toISOString()}`
      );
      await AsyncStorageManager.localStorage.storeData(
        LOCAL_KEYS.LANGUAGE_TRANSLATION,
        JSON.stringify(data)
      );
      resolve(true);
    } catch (ex) {
      reject(ex);
    }
  });
};
