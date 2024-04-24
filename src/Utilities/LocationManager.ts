// tslint:disable:no-unused-expression
import {
  InteractionManager,
  PermissionsAndroid,
  Platform,
  Rationale
} from 'react-native';
import GPSState from '@tootsweet/react-native-gps-state';
import Geolocation from 'react-native-geolocation-service';
import {
  checkMultiple,
  PERMISSIONS,
  requestMultiple,
  RESULTS
} from 'react-native-permissions';
import { trackEvent } from './Analytics';
import {
  LOCATION_MANAGER_CHECK_LOCATION_ENABLED,
  LOCATION_MANAGER_CHECK_LOCATION_PERMISSIONS,
  LOCATION_MANAGER_CURRENT_LOCATION_DATA,
  LOCATION_MANAGER_GET_LOCATION,
  LOCATION_MANAGER_REMOVE_SETTING_LISTENER,
  LOCATION_MANAGER_REMOVE_WATCHER,
  LOCATION_MANAGER_STOP_WATCHER,
  LOCATION_MANAGER_WATCH_LOCATION
} from './Analytics/EventConstant';
import ConsoleLog from './ConsoleLog';

type SendLocation = (locationData: any) => void;

type LocationStatus = (status: boolean) => void;

type SendLastLocation = (latLng: any, detail: string) => void;

type LocationStatusError = (error: any) => void;

export default class LocationManager {
  static locationsharedInstance = new LocationManager();
  sendLocationData!: SendLocation;
  sendStatus!: LocationStatus;
  sendErrorStatus!: LocationStatusError;
  sendLastUpdateLocation!: SendLastLocation;

  latitude: any = null;
  longitude: any = null;
  watchID: any = null;

  askPermissionIos = async () => {
    if (Platform.OS === 'ios') {
      await Geolocation.requestAuthorization('whenInUse');
    }
  };
  async getLocationData() {
    trackEvent(LOCATION_MANAGER_CURRENT_LOCATION_DATA);
    try {
      if (Platform.OS === 'android') {
        const obj = {} as Rationale;
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          obj
        );
        if (granted) {
          this.getLocation();
        }
      } else {
        this.getLocation();
      }
    } catch (error) {
      // ignored
    }
  }

  getLocation = () => {
    trackEvent(LOCATION_MANAGER_GET_LOCATION);
    Geolocation.getCurrentPosition(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.sendLocationData &&
          this.sendLocationData([this.latitude, this.longitude]);
      },
      (error) => {
        this.sendErrorStatus && this.sendErrorStatus(error);

        setTimeout(() => {
          InteractionManager.runAfterInteractions(() => {
            /**/
          });
        }, 120);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 3,
        timeout: 15000,
        maximumAge: 0
      }
    );
  };

  async requestLocationPermission() {
    try {
      const permissionLists =
        Platform.OS === 'ios'
          ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
          : [
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
              PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION
            ];
      const result: any = await requestMultiple(permissionLists);
      const granted: any =
        Platform.OS === 'ios'
          ? result[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
          : result[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
      if (
        granted === RESULTS.GRANTED ||
        granted === PermissionsAndroid.RESULTS.GRANTED
      ) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  }

  watchLocation = () => {
    trackEvent(LOCATION_MANAGER_WATCH_LOCATION);
    this.watchID = Geolocation.watchPosition(
      (position) => {
        const lastPosition = JSON.stringify([
          position.coords.longitude,
          position.coords.latitude
        ]);
        this.sendLastUpdateLocation &&
          this.sendLastUpdateLocation(
            [position.coords.latitude, position.coords.longitude],
            lastPosition
          );
      },
      (error: any) => {
        this.sendErrorStatus && this.sendErrorStatus(error);
        ConsoleLog.printConsoleLog('Error in fetching', error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 3,
        useSignificantChanges: false,
        interval: 2000,
        fastestInterval: 5000
      }
    );
  };

  stopWatcher = () => {
    trackEvent(LOCATION_MANAGER_STOP_WATCHER);
    Geolocation.stopObserving();
  };

  removeWatcher = () => {
    trackEvent(LOCATION_MANAGER_REMOVE_WATCHER);
    Geolocation.clearWatch(LocationManager.locationsharedInstance.watchID);
  };

  removeSettingsListener() {
    trackEvent(LOCATION_MANAGER_REMOVE_SETTING_LISTENER);
    GPSState.removeListener();
  }

  isLocationEnable() {
    trackEvent(LOCATION_MANAGER_CHECK_LOCATION_ENABLED);
    GPSState.addListener((status: any) => {
      this.sendStatus && this.sendStatus(status);
    });
  }

  static async checkLocationPermission() {
    trackEvent(LOCATION_MANAGER_CHECK_LOCATION_PERMISSIONS);
    const permissionLists =
      Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
        : [
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION
          ];
    const result = await checkMultiple(permissionLists);
    return Platform.OS === 'ios'
      ? result[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
      : result[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
  }

  static requestLocations() {
    return new Promise((resolve, reject) => {
      trackEvent(LOCATION_MANAGER_GET_LOCATION);
      Geolocation.getCurrentPosition(
        (position) => {
          LocationManager.locationsharedInstance.latitude =
            position.coords.latitude;
          LocationManager.locationsharedInstance.longitude =
            position.coords.longitude;
          resolve([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          reject(error);
        },
        {
          accuracy: {
            android: 'balanced',
            ios: 'best'
          },
          enableHighAccuracy: true,
          timeout: 90000,
          maximumAge: 5000
        }
      );
    });
  }

  async getCurrentGPSStatus() {
    try {
      const status = await GPSState.getStatus();
      return status;
    } catch (error) {
      return 0;
    }
  }
}
