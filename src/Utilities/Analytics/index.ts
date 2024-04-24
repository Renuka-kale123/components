import { Amplitude, Identify } from '@amplitude/react-native';
import { AMPLITUDE_API_KEY } from '../../Constants/AppConfig';
import { USER_ID } from './UserPropertiesConstants';
import { parseEventNameString } from '../Wrapper';
import analytics from '@react-native-firebase/analytics';

let ampInstance = Amplitude.getInstance();
ampInstance.init(AMPLITUDE_API_KEY);

// Track actions of a user
export const trackEvent = (
  eventName: string,
  eventProperties: any = undefined,
  notForFirebase: boolean = true
) => {
  if (eventName !== '') {
    const parseEventName: string = parseEventNameString(eventName, true);
    ampInstance.logEvent(eventName, eventProperties);
    if (notForFirebase === true) {
      firebaseTrackEvent(parseEventName, eventProperties, false);
    }
  }
};

export const trackUserProperties = (
  propertyKey: string,
  propertyValue: string
) => {
  const identify = new Identify();
  identify.set(propertyKey, propertyValue);
  if (propertyKey === USER_ID) {
    Amplitude.getInstance().setUserId(propertyValue);
  }
  Amplitude.getInstance().identify(identify);
};

export const setUserProperties = (payload: any) => {
  Amplitude.getInstance().setUserProperties(payload);
};

export const clearAllUserProperties = () => {
  Amplitude.getInstance().clearUserProperties();
};

export const getAmplitudeInstance = (): any => {
  if (!ampInstance) {
    ampInstance = Amplitude.getInstance();
    ampInstance.init(AMPLITUDE_API_KEY);
  }
  return ampInstance;
};

export const setAmplitudeUserID = (userId: any) => {
  getAmplitudeInstance().setUserId(userId);
};

export const firebaseTrackEvent = (
  eventName: string,
  properties: any = null,
  limitStringCharacter: boolean = false
) => {
  const parseEventName: string = parseEventNameString(
    eventName,
    limitStringCharacter
  );
  // ConsoleLog.printConsoleLog('FirebaseAnalytics', parseEventName, properties);
  if (properties === null) {
    analytics().logEvent(parseEventName);
  } else {
    analytics().logEvent(parseEventName, properties);
  }
};
