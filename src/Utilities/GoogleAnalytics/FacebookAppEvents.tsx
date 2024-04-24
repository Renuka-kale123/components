import { AppEventsLogger } from 'react-native-fbsdk-next';

export const facebookAppEvents = async (
  eventName: string,
  eventProperties: any = undefined
) => {
  AppEventsLogger.logEvent(eventName, eventProperties);
};
