import appsFlyer from 'react-native-appsflyer';
import { Platform } from 'react-native';
import {
  APPSFLYER_KEY,
  APPSFLYER_APP_ID,
  ENABLE_APPSFLYER_EVENTS,
  ENABLE_CLEVERTAP_EVENTS
} from '../../Constants/AppConfig';
import CleverTap from 'clevertap-react-native';

const initOptions: any = {
  isDebug: true,
  devKey: APPSFLYER_KEY,
  appId: APPSFLYER_APP_ID,
  onInstallConversionDataListener: true, // Optional
  onDeepLinkListener: true, // Optional
  timeToWaitForATTUserAuthorization: 10
};

export function appsFlyerInit() {
  if (ENABLE_APPSFLYER_EVENTS === 'yes') {
    if (Platform.OS === 'ios') {
      appsFlyer.setCurrentDeviceLanguage('EN');
    }
    appsFlyer.initSdk(initOptions);
  }
}

export function appsFlyerLogEvent(
  eventName: string,
  eventProperties: any = null
) {
  if (ENABLE_APPSFLYER_EVENTS === 'yes') {
    appsFlyer.logEvent(eventName, eventProperties);
  }
}

export const clevertapAppsflyerConnection = () => {
  if (ENABLE_APPSFLYER_EVENTS === 'yes' && ENABLE_CLEVERTAP_EVENTS === 'yes') {
    try {
      CleverTap.getCleverTapID((err, res) => {
        const userId = res;
        appsFlyer.setCustomerUserId(userId, (response) => {
          appsFlyerInit();
        });
      });
    } catch (e) {
      appsFlyerInit();
    }
  }
};
