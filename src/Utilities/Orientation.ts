import Orientation from 'react-native-orientation';
import { Platform } from 'react-native';

export const DeviceOrientation = () => {
  if (Platform.OS === 'android') {
    Orientation.lockToPortrait();
  }
};
