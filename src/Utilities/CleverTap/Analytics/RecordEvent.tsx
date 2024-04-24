import CleverTap from 'clevertap-react-native';
import { ENABLE_CLEVERTAP_EVENTS } from '../../../Constants/AppConfig';

export const recordEvents = (
  eventName: string,
  eventProperties: any = undefined
) => {
  if (ENABLE_CLEVERTAP_EVENTS === 'yes')
    CleverTap.recordEvent(eventName, eventProperties);
};
