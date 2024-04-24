// tslint:disable:no-unused-expression
import { AppState } from 'react-native';

type SendAppStatus = (state: any) => void;

export default class ApplicationState {
  static appStateInstance = new ApplicationState();
  appState = AppState.currentState;
  sendAppStatus!: SendAppStatus;

  initAllState() {
    this.initialAppListener();
  }

  initialAppListener() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  removeTheListener() {
    // AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (nextAppState: any) => {
    this.appState = nextAppState;
    this.sendAppStatus && this.sendAppStatus(nextAppState);
  };
}
