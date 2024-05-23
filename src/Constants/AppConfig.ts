/**
 * Changes
 * - ENABLE_SUPPORT flag removed
 */

import { NativeModules } from 'react-native';

// keep this log to confirm the actual ENV in which app is running
// ConsoleLog.printConsoleLog(
//   'ENV==>> ',
//   JSON.stringify(NativeModules.RNConfig.base_url),
// );
export const ENV = NativeModules.RNConfig.env;
export const BASE_URL = NativeModules.RNConfig.base_url;
export const BASE_URL_V2 = NativeModules.RNConfig.base_url_v2;
export const WEATHER_URL = NativeModules.RNConfig.weather_url;
export const SENTRY_DNS = NativeModules.RNConfig.sentry_dns;
export const PHRASE_ID = NativeModules.RNConfig.phrase_id;
export const PHRASE_TOKEN = NativeModules.RNConfig.phrase_token;

export const COUNTRY_CODE = NativeModules.RNConfig.country_code;
export const COUNTRY_ID = NativeModules.RNConfig.country_id;
export const PHONE_NUMBER_LENGTH = NativeModules.RNConfig.phone_number_length;
export const AMPLITUDE_API_KEY = NativeModules.RNConfig.amplitude_api_key;
export const COUNTRY_FLAG = NativeModules.RNConfig.country_flag;
export const GEOCODING_KEY_1 = NativeModules.RNConfig.geocoding_key_1;
export const GEOCODING_KEY_2 = NativeModules.RNConfig.geocoding_key_2;
export const ENABLE_COUNTRY_CODE = NativeModules.RNConfig.enableCountryCode;
export const ENABLE_PRODUCTSCAN = NativeModules.RNConfig.enable_productScan;
export const ACREAGE = NativeModules.RNConfig.acreage;
export const ENABLE_FARMAREACALCULATOR =
  NativeModules.RNConfig.enable_farmAreaCalculator;
export const ENABLE_CROP = NativeModules.RNConfig.enableCrop;
export const ENABLE_LOYALTY = NativeModules.RNConfig.enableLoyalty;
export const ENABLE_ONLINE_SESSION = NativeModules.RNConfig.enableOnlineSession;
export const ENABLE_HOME_TAB = NativeModules.RNConfig.enableHomeTab;
export const ENABLE_MY_CROP_TAB = NativeModules.RNConfig.enableMyCropTab;
export const ENABLE_NEAR_ME_TAB = NativeModules.RNConfig.enableNearMeTab;
export const ENABLE_SETTING_TAB = NativeModules.RNConfig.enableSettingTab;
export const ENABLE_FAVOURITE = NativeModules.RNConfig.enableFavourite;
export const ENABLE_ENROLLCROP = NativeModules.RNConfig.enable_enrollCrop;
export const ENABLE_MANDIPRICING = NativeModules.RNConfig.enable_mandiPricing;
export const ENABLE_USE_CURRENT_LOCATION =
  NativeModules.RNConfig.enable_use_current_location;
export const ENABLE_PUSH_NOTIFICATIONS =
  NativeModules.RNConfig.enable_pushNotifications;
export const ENABLE_QUERY_MODULE = NativeModules.RNConfig.enable_queryModule;
export const ENABLE_FMF_MODULE = NativeModules.RNConfig.enable_new_near_me;
export const ENABLE_PLANTIX = NativeModules.RNConfig.enable_plantix;
export const PLANTIX_CONTROL_SECTION =
  NativeModules.RNConfig.plantix_control_section;
export const PLANTIX_OUR_SOLUTION = NativeModules.RNConfig.plantix_our_solution;
export const PLANTIX_DETAILED_DIAGONIS =
  NativeModules.RNConfig.plantix_detailed_diagonis;
export const ENABLE_CALLSUPPORT = NativeModules.RNConfig.enable_callSupport;
export const CALLSUPPORT_DAYS = NativeModules.RNConfig.callsupport_days;
export const CALLSUPPORT_HOURS = NativeModules.RNConfig.callsupport_hours;
export const PACKAGE_ID = NativeModules.RNConfig.packageId;
export const APP_NAME = NativeModules.RNConfig.appName;
export const APPLE_STORE_ID = NativeModules.RNConfig.appStoreId;
export const X_API_KEY = NativeModules.RNConfig.x_api_key;
export const SHAREABLE_APP_LINK = NativeModules.RNConfig.shareableAppLink;
export const FACEBOOK_APPLICATION_ID = NativeModules.RNConfig.facebook_app_id;
export const ENABLE_NEW_TERMS = NativeModules.RNConfig.enableNewTermsFlow;
export const MPIN_ENCRYPTION_SECRET_KEY =
  NativeModules.RNConfig.mpin_encryption_secret_key;
export const ENABLE_MPIN = NativeModules.RNConfig.enable_mpin;
export const AMPLITUDE_API_FLAG = NativeModules.RNConfig.amplitude_api_flag;
export const DISALLOW_AUTO_POPULATE =
  NativeModules.RNConfig.disallow_auto_populate;
export const ENABLE_APP_FEEDBACK = NativeModules.RNConfig.enable_app_feedback;
export const APP_FEEDBACK_MONTHS = NativeModules.RNConfig.app_feedback_months;
export const ENABLE_CENTRIGO = NativeModules.RNConfig.enable_centrigo;
export const DISPLAY_EXAMPLE_NUMBER =
  NativeModules.RNConfig.display_example_number;
export const ENABLE_WHATSAPP_SUPPORT =
  NativeModules.RNConfig.enable_whatsapp_support;
export const ENABLE_ABOVE_18_SUPPORT =
  NativeModules.RNConfig.enable_whatsapp_support;
export const ENABLE_TERMS_AND_CONDITION =
  NativeModules.RNConfig.enable_terms_condition;
export const ENABLE_WHATSAPP_SUPPORT_LOGIN =
  NativeModules.RNConfig.enable_whatsapp_support_login;
export const BASE_URL_V3 = NativeModules.RNConfig.base_url_v3;
export const ENABLE_ONBOARDING = NativeModules.RNConfig.enable_onboarding;
export const ONBOARDING_AUTOSCROLL_TIMER =
  NativeModules.RNConfig.onboarding_autoscroll_timer;
export const ENABLE_CLEVERTAP_EVENTS =
  NativeModules.RNConfig.enable_clevertap_events;
export const ENABLE_APPSFLYER_EVENTS =
  NativeModules.RNConfig.enable_appsflyer_events;
export const ENABLE_FIREBASE_EVENTS =
  NativeModules.RNConfig.enable_firebase_events;
export const APPSFLYER_KEY = NativeModules.RNConfig.appsflyer_key;
export const APPSFLYER_APP_ID = NativeModules.RNConfig.appsflyer_id;
