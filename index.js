/**
 * @format
 */

import { ButtonComponent, testRenderSnapshot, testClickFunction, testButtonStyles, testButtonAccessibility } from 'pkg';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Use the ButtonComponent or call the test functions as needed
// For example:
testRenderSnapshot();
testClickFunction();
testButtonStyles();
testButtonAccessibility();

// Register the main component of your app
AppRegistry.registerComponent(appName, () => App);