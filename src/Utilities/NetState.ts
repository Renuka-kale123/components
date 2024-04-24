import { DeviceEventEmitter, NativeModules, Platform } from 'react-native';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
export default class NetworkStatus {
  private unsubscribe: any = undefined;
  isUseNativeAndroid: boolean = Platform.OS === 'android';

  constructor() {
    if (this.isUseNativeAndroid) {
      NativeModules?.RNInternetConfig?.initNetworkReceiver('');
      NativeModules?.RNInternetConfig?.onResumeInternetCheck();
    }
  }

  startObserver = (isConnected: any): void => {
    if (this.isUseNativeAndroid) {
      this.unsubscribe = DeviceEventEmitter.addListener(
        'NetworkStatus',
        (data: any) => {
          isConnected(data);
        }
      );
    }
    // one time
    NetInfo.fetch().then((state) => {
      isConnected(
        state.isConnected === true &&
          state.isInternetReachable !== null &&
          state.isInternetReachable === true
      );
    });
    this.unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      isConnected(
        state.isConnected === true &&
          state.isInternetReachable !== null &&
          state.isInternetReachable === true
      );
    });
  };

  stopObserver = () => {
    if (this.unsubscribe) {
      this.unsubscribe = undefined;
      DeviceEventEmitter.removeAllListeners();
    }
  };

  refreshNetwork = async () => {
    try {
      const state: any = await NetInfo.refresh();
      return (
        state.isConnected === true &&
        state.isInternetReachable !== null &&
        state.isInternetReachable === true
      );
    } catch (error) {
      // ignored
    }
  };

  refreshNetworkAndroid = () => {
    if (this.isUseNativeAndroid) {
      NativeModules?.RNInternetConfig?.onResumeInternetCheck();
    }
  };
}
