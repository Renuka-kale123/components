import analytics from '@react-native-firebase/analytics';
import { ENABLE_FIREBASE_EVENTS } from '../../Constants/AppConfig';

export const googleLogEvents = async (
  eventName: string,
  eventProperties: any = undefined
) => {
  if (ENABLE_FIREBASE_EVENTS === 'yes')
    await analytics().logEvent(eventName, eventProperties);
};
