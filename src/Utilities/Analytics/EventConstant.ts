import { COUNTRY_ID } from '../../Constants/AppConfig';
import * as indiaConstants from './EventConstantIndia';
import * as apacConstants from './EventConstantApac';

const isIndia = COUNTRY_ID === 'IN' ? true : false;

export const APP_INITIALIZATION = isIndia
  ? indiaConstants.APP_INITIALIZATION
  : apacConstants.APP_INITIALIZATION;

export const LANGUAGE_INITIALIZATION = isIndia
  ? indiaConstants.LANGUAGE_INITIALIZATION
  : apacConstants.LANGUAGE_INITIALIZATION;

export const LANGUAGE_SCREEN_BUTTON_PRESS = isIndia
  ? indiaConstants.LANGUAGE_SCREEN_BUTTON_PRESS
  : apacConstants.LANGUAGE_SCREEN_BUTTON_PRESS;

// Login/index.tsx & Respective functionality
export const LOGIN_INITIALIZATION = isIndia
  ? indiaConstants.LOGIN_INITIALIZATION
  : apacConstants.LOGIN_INITIALIZATION;

export const LOGIN_SEND_OTP_BUTTON_PRESS = isIndia
  ? indiaConstants.LOGIN_SEND_OTP_BUTTON_PRESS
  : apacConstants.LOGIN_SEND_OTP_BUTTON_PRESS;

export const REQUEST_SEND_OTP_BUTTON_PRESS = isIndia
  ? indiaConstants.REQUEST_SEND_OTP_BUTTON_PRESS
  : '';

// OTP/index.tsx & Respective functionality
export const OTP_VERIFICATION_INITIALIZATION = isIndia
  ? indiaConstants.OTP_VERIFICATION_INITIALIZATION
  : apacConstants.OTP_VERIFICATION_INITIALIZATION;

export const OTP_VERIFICATION_EXISTING_USER = isIndia
  ? indiaConstants.OTP_VERIFICATION_EXISTING_USER
  : apacConstants.OTP_VERIFICATION_EXISTING_USER;

export const OTP_VERIFICATION_NEW_USER = isIndia
  ? indiaConstants.OTP_VERIFICATION_NEW_USER
  : apacConstants.OTP_VERIFICATION_NEW_USER;

export const OTP_CONTINUE_BUTTON_PRESS = isIndia
  ? indiaConstants.OTP_CONTINUE_BUTTON_PRESS
  : apacConstants.OTP_CONTINUE_BUTTON_PRESS;

export const OTP_RESEND_LINK_PRESS = isIndia
  ? indiaConstants.OTP_RESEND_LINK_PRESS
  : apacConstants.OTP_RESEND_LINK_PRESS;

export const OTP_HANDLE_TERMS_CONDITIONS = isIndia
  ? indiaConstants.OTP_HANDLE_TERMS_CONDITIONS
  : apacConstants.OTP_HANDLE_TERMS_CONDITIONS;

export const USER_PROFILE_INITIALIZATION = isIndia
  ? indiaConstants.USER_PROFILE_INITIALIZATION
  : apacConstants.USER_PROFILE_INITIALIZATION;

export const USER_PROFILE_CURRENT_LOCATION_INITIALIZATION = isIndia
  ? indiaConstants.USER_PROFILE_CURRENT_LOCATION_INITIALIZATION
  : apacConstants.USER_PROFILE_CURRENT_LOCATION_INITIALIZATION;

export const USER_STATE_UPDATED_SUCCESSFULLY = isIndia
  ? indiaConstants.USER_STATE_UPDATED_SUCCESSFULLY
  : apacConstants.USER_STATE_UPDATED_SUCCESSFULLY;

export const USER_DISTRICT_UPDATED_SUCCESSFULLY = isIndia
  ? indiaConstants.USER_DISTRICT_UPDATED_SUCCESSFULLY
  : apacConstants.USER_DISTRICT_UPDATED_SUCCESSFULLY;

export const USER_TALUKA_UPDATED_SUCCESSFULLY = isIndia
  ? indiaConstants.USER_TALUKA_UPDATED_SUCCESSFULLY
  : apacConstants.USER_TALUKA_UPDATED_SUCCESSFULLY;

export const DASHBOARD_SCREEN = isIndia
  ? indiaConstants.DASHBOARD_SCREEN
  : apacConstants.DASHBOARD_SCREEN;

// PrivacyPolicy/index.tsx
export const PRIVACY_POLICY_SCREEN = isIndia
  ? indiaConstants.PRIVACY_POLICY_SCREEN
  : apacConstants.PRIVACY_POLICY_SCREEN;

export const PRIVACY_POLICY_BACK = isIndia
  ? indiaConstants.PRIVACY_POLICY_BACK
  : apacConstants.PRIVACY_POLICY_BACK;

export const PRIVACY_POLICY_ACCEPT = isIndia
  ? indiaConstants.PRIVACY_POLICY_ACCEPT
  : apacConstants.PRIVACY_POLICY_ACCEPT;

export const PRIVACY_POLICY_SERVICE_ERROR = isIndia
  ? indiaConstants.PRIVACY_POLICY_SERVICE_ERROR
  : apacConstants.PRIVACY_POLICY_SERVICE_ERROR;

export const USER_LOGGED_SUCCESSFULL = isIndia
  ? indiaConstants.USER_LOGGED_SUCCESSFULL
  : apacConstants.USER_LOGGED_SUCCESSFULL;

export const USER_VISITING_HYBRID_PRODUCTS = isIndia
  ? indiaConstants.USER_VISITING_HYBRID_PRODUCTS
  : apacConstants.USER_VISITING_HYBRID_PRODUCTS;

export const USER_VISITING_CP_PRODUCTS = isIndia
  ? indiaConstants.USER_VISITING_CP_PRODUCTS
  : apacConstants.USER_VISITING_CP_PRODUCTS;

export const USER_VISITING_HYBIRD_RECOMMENDER = isIndia
  ? indiaConstants.USER_VISITING_HYBIRD_RECOMMENDER
  : apacConstants.USER_VISITING_HYBIRD_RECOMMENDER;

export const USER_VISITING_CP_RECOMMENDER = isIndia
  ? indiaConstants.USER_VISITING_CP_RECOMMENDER
  : apacConstants.USER_VISITING_CP_RECOMMENDER;

export const USER_VISITING_DIFFERENT_CROPS = isIndia
  ? indiaConstants.USER_VISITING_CP_RECOMMENDER
  : apacConstants.USER_VISITING_CP_RECOMMENDER;

export const USER_VISITING_RETAILER_NURSERY = isIndia
  ? indiaConstants.USER_VISITING_CP_RECOMMENDER
  : apacConstants.USER_VISITING_CP_RECOMMENDER;

export const USER_VISITING_FAVORITE = isIndia
  ? indiaConstants.USER_VISITING_FAVORITE
  : apacConstants.USER_VISITING_FAVORITE;

export const USER_VISITING_WEATHER_CARD = isIndia
  ? indiaConstants.USER_VISITING_WEATHER_CARD
  : apacConstants.USER_VISITING_WEATHER_CARD;

export const USER_VISITING_ONLINESESSION_VIDEO = isIndia
  ? indiaConstants.USER_VISITING_ONLINESESSION_VIDEO
  : apacConstants.USER_VISITING_ONLINESESSION_VIDEO;

export const USER_VISITING_AGRONOMY_PRATICES = isIndia
  ? indiaConstants.USER_VISITING_AGRONOMY_PRATICES
  : apacConstants.USER_VISITING_AGRONOMY_PRATICES;

export const USER_VISITING_GROWER_TESTIMONIALS = isIndia
  ? indiaConstants.USER_VISITING_GROWER_TESTIMONIALS
  : apacConstants.USER_VISITING_GROWER_TESTIMONIALS;

export const USER_VISITING_THREAT_ANALYSIS = isIndia
  ? indiaConstants.USER_VISITING_THREAT_ANALYSIS
  : apacConstants.USER_VISITING_THREAT_ANALYSIS;

export const PROFILE_PAGE_EVENT = isIndia
  ? indiaConstants.PROFILE_PAGE_EVENT
  : apacConstants.PROFILE_PAGE_EVENT;

export const GENERIC_SERVICE_CALL_REQUEST = isIndia
  ? indiaConstants.GENERIC_SERVICE_CALL_REQUEST
  : '';

export const GENERIC_SERVICE_CALL_RESPONSE = isIndia
  ? indiaConstants.GENERIC_SERVICE_CALL_RESPONSE
  : '';

export const GENERIC_SERVICE_CALL_ERROR_RESPONSE = isIndia
  ? indiaConstants.GENERIC_SERVICE_CALL_ERROR_RESPONSE
  : apacConstants.GENERIC_SERVICE_CALL_ERROR_RESPONSE;

export const REQUEST_UPDATE_USER_PROFILE_API = isIndia
  ? indiaConstants.REQUEST_UPDATE_USER_PROFILE_API
  : '';

export const RESPONSE_UPDATE_USER_PROFILE_API = isIndia
  ? indiaConstants.RESPONSE_UPDATE_USER_PROFILE_API
  : apacConstants.RESPONSE_UPDATE_USER_PROFILE_API;

export const ERROR_RESPONSE_UPDATE_USER_PROFILE_API = isIndia
  ? indiaConstants.ERROR_RESPONSE_UPDATE_USER_PROFILE_API
  : apacConstants.ERROR_RESPONSE_UPDATE_USER_PROFILE_API;

export const REQUEST_SEND_OTP_API = isIndia
  ? indiaConstants.REQUEST_SEND_OTP_API
  : '';

export const RESPONSE_SEND_OTP_API = isIndia
  ? indiaConstants.RESPONSE_SEND_OTP_API
  : '';

export const ERROR_RESPONSE_SEND_OTP_API = isIndia
  ? indiaConstants.ERROR_RESPONSE_SEND_OTP_API
  : apacConstants.ERROR_RESPONSE_SEND_OTP_API;

export const REQUEST_GET_USER_PROFILE_API = isIndia
  ? indiaConstants.REQUEST_GET_USER_PROFILE_API
  : '';

export const RESPONSE_GET_USER_PROFILE_API = isIndia
  ? indiaConstants.RESPONSE_GET_USER_PROFILE_API
  : '';

export const ERROR_RESPONSE_GET_USER_PROFILE_API = isIndia
  ? indiaConstants.ERROR_RESPONSE_GET_USER_PROFILE_API
  : apacConstants.ERROR_RESPONSE_GET_USER_PROFILE_API;

export const USER_REGISTRATION = isIndia
  ? indiaConstants.USER_REGISTRATION
  : apacConstants.USER_REGISTRATION;

export const REQUEST_OTP_VERIFY = isIndia
  ? indiaConstants.REQUEST_OTP_VERIFY
  : '';

export const RESPONSE_OTP_VERIFY = isIndia
  ? indiaConstants.RESPONSE_OTP_VERIFY
  : '';

export const ERROR_RESPONSE_OTP_VERIFY = isIndia
  ? indiaConstants.ERROR_RESPONSE_OTP_VERIFY
  : apacConstants.ERROR_RESPONSE_OTP_VERIFY;

export const LANGUAGE_GET_LANGUAGE_LIST_REQUEST = isIndia
  ? indiaConstants.LANGUAGE_GET_LANGUAGE_LIST_REQUEST
  : '';

export const LANGUAGE_GET_LANGUAGE_LIST_ERROR_RESPONSE = isIndia
  ? indiaConstants.LANGUAGE_GET_LANGUAGE_LIST_ERROR_RESPONSE
  : apacConstants.LANGUAGE_GET_LANGUAGE_LIST_ERROR_RESPONSE;

export const REQUEST_PLACE_DETAILS = isIndia
  ? indiaConstants.REQUEST_PLACE_DETAILS
  : '';

export const RESPONSE_PLACE_DETAILS = isIndia
  ? indiaConstants.RESPONSE_PLACE_DETAILS
  : '';

export const ERROR_RESPONSE_PLACE_DETAILS = isIndia
  ? indiaConstants.ERROR_RESPONSE_PLACE_DETAILS
  : apacConstants.ERROR_RESPONSE_PLACE_DETAILS;

export const REQUEST_GEOCODE = isIndia ? indiaConstants.REQUEST_GEOCODE : '';
export const RESPONSE_GEOCODE = isIndia ? indiaConstants.RESPONSE_GEOCODE : '';

export const ERROR_RESPONSE_GEOCODE = isIndia
  ? indiaConstants.ERROR_RESPONSE_GEOCODE
  : apacConstants.ERROR_RESPONSE_GEOCODE;

export const STATE_LIST_REQUEST = isIndia
  ? indiaConstants.STATE_LIST_REQUEST
  : '';

export const DISTRICT_LIST_REQUEST = isIndia
  ? indiaConstants.DISTRICT_LIST_REQUEST
  : '';

export const TALUKA_LIST_REQUEST = isIndia
  ? indiaConstants.TALUKA_LIST_REQUEST
  : '';

export const CROP_SERVICE_GET_SEED_CROP_REQUEST = isIndia
  ? indiaConstants.CROP_SERVICE_GET_SEED_CROP_REQUEST
  : '';

export const CROP_SERVICE_GET_SEED_CROP_RESPONSE = isIndia
  ? indiaConstants.CROP_SERVICE_GET_SEED_CROP_RESPONSE
  : '';

export const CROP_SERVICE_GET_SEED_CROP_ERROR_RESPONSE = isIndia
  ? indiaConstants.CROP_SERVICE_GET_SEED_CROP_ERROR_RESPONSE
  : apacConstants.CROP_SERVICE_GET_SEED_CROP_ERROR_RESPONSE;

export const CROP_SERVICE_GET_FILTERS_CROP_REQUEST = isIndia
  ? indiaConstants.CROP_SERVICE_GET_FILTERS_CROP_REQUEST
  : '';

export const CROP_SERVICE_GET_FILTERS_CROP_RESPONSE = isIndia
  ? indiaConstants.CROP_SERVICE_GET_FILTERS_CROP_RESPONSE
  : '';

export const CROP_SERVICE_GET_FILTERS_CROP_ERROR_RESPONSE = isIndia
  ? indiaConstants.CROP_SERVICE_GET_FILTERS_CROP_ERROR_RESPONSE
  : apacConstants.CROP_SERVICE_GET_FILTERS_CROP_ERROR_RESPONSE;

export const CROP_SERVICE_GET_DOWNLOAD_CROP_IMAGES_REQUEST = isIndia
  ? indiaConstants.CROP_SERVICE_GET_DOWNLOAD_CROP_IMAGES_REQUEST
  : '';

export const CROP_SERVICE_GET_DOWNLOAD_CROP_IMAGES_RESPONSE = isIndia
  ? indiaConstants.CROP_SERVICE_GET_DOWNLOAD_CROP_IMAGES_RESPONSE
  : '';

export const CROP_SERVICE_GET_DOWNLOAD_CROP_IMAGES_ERROR_RESPONSE = isIndia
  ? indiaConstants.CROP_SERVICE_GET_DOWNLOAD_CROP_IMAGES_ERROR_RESPONSE
  : apacConstants.CROP_SERVICE_GET_DOWNLOAD_CROP_IMAGES_ERROR_RESPONSE;

export const CROP_ENROLLMENT_SAVE = isIndia
  ? indiaConstants.CROP_ENROLLMENT_SAVE
  : '';

export const CROP_ENROLLMENT_SAVE_ERROR_RESPONSE = isIndia
  ? indiaConstants.CROP_ENROLLMENT_SAVE_ERROR_RESPONSE
  : apacConstants.CROP_ENROLLMENT_SAVE_ERROR_RESPONSE;

export const APPLY_RECOMMENDATION_SUCCESS = isIndia
  ? indiaConstants.APPLY_RECOMMENDATION_SUCCESS
  : apacConstants.APPLY_RECOMMENDATION_SUCCESS;

export const APPLY_RECOMMENDATION_ERROR = isIndia
  ? indiaConstants.APPLY_RECOMMENDATION_ERROR
  : apacConstants.APPLY_RECOMMENDATION_ERROR;

export const REQUEST_PRIVACY_POLICY = isIndia
  ? indiaConstants.REQUEST_PRIVACY_POLICY
  : '';

export const RESPONSE_PRIVACY_POLICY = isIndia
  ? indiaConstants.RESPONSE_PRIVACY_POLICY
  : '';

export const ERROR_RESPONSE_PRIVACY_POLICY = isIndia
  ? indiaConstants.ERROR_RESPONSE_PRIVACY_POLICY
  : apacConstants.ERROR_RESPONSE_PRIVACY_POLICY;

export const REQUEST_SAVE_PRIVACY_POLICY_CONSENT = isIndia
  ? indiaConstants.REQUEST_SAVE_PRIVACY_POLICY_CONSENT
  : '';

export const RESPONSE_SAVE_PRIVACY_POLICY_CONSENT = isIndia
  ? indiaConstants.RESPONSE_SAVE_PRIVACY_POLICY_CONSENT
  : '';

export const ERROR_RESPONSE_SAVE_PRIVACY_POLICY_CONSENT = isIndia
  ? indiaConstants.ERROR_RESPONSE_SAVE_PRIVACY_POLICY_CONSENT
  : apacConstants.ERROR_RESPONSE_SAVE_PRIVACY_POLICY_CONSENT;

// DATABSE HELPER EVENTS
// export const DATABASE_ADD_OR_UPDATE = "Database Manager - Add or Update into database table"
// export const ERROR_DATABASE_ADD_OR_UPDATE = "Database Manager - Error in inserting or updating the record in database table"
// export const DATABASE_GET_DATA = "Database Manager - Get Data from databse schema"
// export const ERROR_DATABASE_GET_DATA = "Database Manager - Error in getting data from database schema"
// export const DATABASE_DELETE_RECORD = "Database Manager - Delete record from the database schema"
// export const ERROR_DATABASE_DELETE_RECORD = "Database Manager - Error in deleting the record from the database schema"
// export const DATABASE_TRUNCATE_TABLE = "Database Manager - Truncate database table"
// export const ERROR_DATABASE_TRUNCATE_TABLE = "Database Manager - Error in deleting database table"
// export const DATABASE_ERASEALLDATA = "Database Manager - Erase all data from the databse"
// export const ERROR_DATABASE_ERASEALLDATA = "Database Manager - Error in erasing all data from the database"

// Location manager
export const LOCATION_MANAGER_CURRENT_LOCATION_DATA = isIndia
  ? indiaConstants.LOCATION_MANAGER_CURRENT_LOCATION_DATA
  : apacConstants.LOCATION_MANAGER_CURRENT_LOCATION_DATA;

export const LOCATION_MANAGER_GET_LOCATION = isIndia
  ? indiaConstants.LOCATION_MANAGER_GET_LOCATION
  : apacConstants.LOCATION_MANAGER_GET_LOCATION;

export const LOCATION_MANAGER_WATCH_LOCATION = isIndia
  ? indiaConstants.LOCATION_MANAGER_WATCH_LOCATION
  : apacConstants.LOCATION_MANAGER_WATCH_LOCATION;

export const LOCATION_MANAGER_STOP_WATCHER = isIndia
  ? indiaConstants.LOCATION_MANAGER_STOP_WATCHER
  : apacConstants.LOCATION_MANAGER_STOP_WATCHER;

export const LOCATION_MANAGER_REMOVE_WATCHER = isIndia
  ? indiaConstants.LOCATION_MANAGER_REMOVE_WATCHER
  : apacConstants.LOCATION_MANAGER_REMOVE_WATCHER;

export const LOCATION_MANAGER_REMOVE_SETTING_LISTENER = isIndia
  ? indiaConstants.LOCATION_MANAGER_REMOVE_SETTING_LISTENER
  : apacConstants.LOCATION_MANAGER_REMOVE_SETTING_LISTENER;

export const LOCATION_MANAGER_CHECK_LOCATION_ENABLED = isIndia
  ? indiaConstants.LOCATION_MANAGER_CHECK_LOCATION_ENABLED
  : apacConstants.LOCATION_MANAGER_CHECK_LOCATION_ENABLED;

export const LOCATION_MANAGER_CHECK_LOCATION_PERMISSIONS = isIndia
  ? indiaConstants.LOCATION_MANAGER_CHECK_LOCATION_PERMISSIONS
  : apacConstants.LOCATION_MANAGER_CHECK_LOCATION_PERMISSIONS;

export const RETAILER_NURSERY = isIndia
  ? indiaConstants.RETAILER_NURSERY
  : apacConstants.RETAILER_NURSERY;

export const HYBRID_DATA_INITIALIZATION = isIndia
  ? indiaConstants.HYBRID_DATA_INITIALIZATION
  : apacConstants.HYBRID_DATA_INITIALIZATION;

export const SAVED_CROP_DATA = isIndia
  ? indiaConstants.SAVED_CROP_DATA
  : apacConstants.SAVED_CROP_DATA;
// Mandi Screen
export const REQUEST_MANDI_LIST = isIndia
  ? indiaConstants.REQUEST_MANDI_LIST
  : '';
export const RESPONSE_MANDI_LIST = isIndia
  ? indiaConstants.RESPONSE_MANDI_LIST
  : '';
export const ERROR_MANDI_LIST = isIndia
  ? indiaConstants.ERROR_MANDI_LIST
  : apacConstants.ERROR_MANDI_LIST;

export const REQUEST_MANDI_COMMODITIES = isIndia
  ? indiaConstants.REQUEST_MANDI_COMMODITIES
  : '';

export const RESPONSE_MANDI_COMMODITIES = isIndia
  ? indiaConstants.RESPONSE_MANDI_COMMODITIES
  : '';

export const ERROR_MANDI_COMMODITIES = isIndia
  ? indiaConstants.ERROR_MANDI_COMMODITIES
  : apacConstants.ERROR_MANDI_COMMODITIES;

export const REQUEST_MANDI_SEARCH = isIndia
  ? indiaConstants.REQUEST_MANDI_SEARCH
  : '';
export const RESPONSE_MANDI_SEARCH = isIndia
  ? indiaConstants.RESPONSE_MANDI_SEARCH
  : '';

export const ERROR_MANDI_SEARCH = isIndia
  ? indiaConstants.ERROR_MANDI_SEARCH
  : apacConstants.ERROR_MANDI_SEARCH;

export const REQUEST_MANDI_VARIETIES = isIndia
  ? indiaConstants.REQUEST_MANDI_VARIETIES
  : '';

export const RESPONSE_MANDI_VARIETIES = isIndia
  ? indiaConstants.RESPONSE_MANDI_VARIETIES
  : '';

export const ERROR_MANDI_VARIETIES = isIndia
  ? indiaConstants.ERROR_MANDI_VARIETIES
  : apacConstants.ERROR_MANDI_VARIETIES;

export const USER_VISITING_VIEW_ALL_MANDI = isIndia
  ? indiaConstants.USER_VISITING_VIEW_ALL_MANDI
  : apacConstants.USER_VISITING_VIEW_ALL_MANDI;

export const USER_SELECTED_NEWCROP_VIEW_ALL_MANDI = isIndia
  ? indiaConstants.USER_SELECTED_NEWCROP_VIEW_ALL_MANDI
  : apacConstants.USER_SELECTED_NEWCROP_VIEW_ALL_MANDI;

export const USER_VISITING_FARM_AREA_CALCULATOR = isIndia
  ? indiaConstants.USER_VISITING_FARM_AREA_CALCULATOR
  : apacConstants.USER_VISITING_FARM_AREA_CALCULATOR;

export const USER_VISITING_PRODUCT_SCAN = isIndia
  ? indiaConstants.USER_VISITING_PRODUCT_SCAN
  : apacConstants.USER_VISITING_PRODUCT_SCAN;

export const USER_VISITING_ENROLL_CROP = isIndia
  ? indiaConstants.USER_VISITING_ENROLL_CROP
  : '';

export const USER_VISITING_CROP_CALENDAR = isIndia
  ? indiaConstants.USER_VISITING_CROP_CALENDAR
  : '';

export const USER_VISITING_VIEW_ALL_REMINDER = isIndia
  ? indiaConstants.USER_VISITING_VIEW_ALL_REMINDER
  : apacConstants.USER_VISITING_VIEW_ALL_REMINDER;

export const USER_CLICK_APPLIED_RECOMMENDATION = isIndia
  ? indiaConstants.USER_CLICK_APPLIED_RECOMMENDATION
  : apacConstants.USER_CLICK_APPLIED_RECOMMENDATION;

export const USER_PRACTICE_DURATION_ENROLL = isIndia
  ? indiaConstants.USER_PRACTICE_DURATION_ENROLL
  : apacConstants.USER_PRACTICE_DURATION_ENROLL;

export const USER_EDIT_ENROLLMENT = isIndia
  ? indiaConstants.USER_EDIT_ENROLLMENT
  : apacConstants.USER_EDIT_ENROLLMENT;

export const USER_CHANGED_STATE_DIS_VIEW_ALL_MANDI = isIndia
  ? indiaConstants.USER_CHANGED_STATE_DIS_VIEW_ALL_MANDI
  : apacConstants.USER_CHANGED_STATE_DIS_VIEW_ALL_MANDI;

export const USER_SELECTED_CROP_VIEW_ALL_MANDI = isIndia
  ? indiaConstants.USER_SELECTED_CROP_VIEW_ALL_MANDI
  : apacConstants.USER_SELECTED_CROP_VIEW_ALL_MANDI;

export const USER_SIGN_OUT = isIndia
  ? indiaConstants.USER_SIGN_OUT
  : apacConstants.USER_SIGN_OUT;

export const REQUEST_FETCHAPPLICATION_STATE = isIndia
  ? indiaConstants.REQUEST_FETCHAPPLICATION_STATE
  : '';

export const ERROR_FETCHAPPLICATION_STATE = isIndia
  ? indiaConstants.ERROR_FETCHAPPLICATION_STATE
  : '';

export const RESPONSE_FETCHAPPLICATION_STATE = isIndia
  ? indiaConstants.RESPONSE_FETCHAPPLICATION_STATE
  : '';

export const REQUEST_SETLOANELIGIBILITY_STATE = isIndia
  ? indiaConstants.REQUEST_SETLOANELIGIBILITY_STATE
  : '';

export const ERROR_SETLOANELIGIBILITY_STATE = isIndia
  ? indiaConstants.ERROR_SETLOANELIGIBILITY_STATE
  : '';

export const RESPONSE_SETLOANELIGIBILITY_STATE = isIndia
  ? indiaConstants.RESPONSE_SETLOANELIGIBILITY_STATE
  : '';

export const REQUEST_SPRAYSERVICE_MY_ORDERS_STATE = isIndia
  ? indiaConstants.REQUEST_SPRAYSERVICE_MY_ORDERS_STATE
  : '';

export const ERROR_SPRAYSERVICE_MY_ORDERS_STATE = isIndia
  ? indiaConstants.ERROR_SPRAYSERVICE_MY_ORDERS_STATE
  : '';

export const RESPONSE_SPRAYSERVICE_MY_ORDERS_STATE = isIndia
  ? indiaConstants.RESPONSE_SPRAYSERVICE_MY_ORDERS_STATE
  : '';

export const REQUEST_SPRAYSERVICE_MY_ORDERS_HISTORY_STATE = isIndia
  ? indiaConstants.REQUEST_SPRAYSERVICE_MY_ORDERS_HISTORY_STATE
  : '';

export const ERROR_SPRAYSERVICE_MY_ORDERS_HISTORY_STATE = isIndia
  ? indiaConstants.ERROR_SPRAYSERVICE_MY_ORDERS_HISTORY_STATE
  : '';

export const RESPONSE_SPRAYSERVICE_MY_ORDERS_HISTORY_STATE = isIndia
  ? indiaConstants.RESPONSE_SPRAYSERVICE_MY_ORDERS_HISTORY_STATE
  : '';

export const REQUEST_SPRAYSERVICE_ORDER_DETAILS_STATE = isIndia
  ? indiaConstants.REQUEST_SPRAYSERVICE_ORDER_DETAILS_STATE
  : '';

export const ERROR_SPRAYSERVICE_ORDER_DETAILS_STATE = isIndia
  ? indiaConstants.ERROR_SPRAYSERVICE_ORDER_DETAILS_STATE
  : '';

export const RESPONSE_SPRAYSERVICE_ORDERS_DETAILS_STATE = isIndia
  ? indiaConstants.RESPONSE_SPRAYSERVICE_ORDERS_DETAILS_STATE
  : '';

export const REQUEST_SPRAYSERVICE_CANCEL_ORDERS_STATE = isIndia
  ? indiaConstants.REQUEST_SPRAYSERVICE_CANCEL_ORDERS_STATE
  : '';

export const ERROR_SPRAYSERVICE_CANCEL_ORDERS_STATE = isIndia
  ? indiaConstants.ERROR_SPRAYSERVICE_CANCEL_ORDERS_STATE
  : '';

export const RESPONSE_SPRAYSERVICE_CANCEL_ORDERS_STATE = isIndia
  ? indiaConstants.RESPONSE_SPRAYSERVICE_CANCEL_ORDERS_STATE
  : '';

export const REQUEST_SPRAYSERVICE_LIST_STATE = isIndia
  ? indiaConstants.REQUEST_SPRAYSERVICE_LIST_STATE
  : '';

export const ERROR_SPRAYSERVICE_LIST_STATE = isIndia
  ? indiaConstants.ERROR_SPRAYSERVICE_LIST_STATE
  : '';

export const RESPONSE_SPRAYSERVICE_LIST_STATE = isIndia
  ? indiaConstants.RESPONSE_SPRAYSERVICE_LIST_STATE
  : '';

export const REQUEST_CANCEL_LIST_STATE = isIndia
  ? indiaConstants.REQUEST_CANCEL_LIST_STATE
  : '';

export const ERROR_CANCEL_LIST_STATE = isIndia
  ? indiaConstants.ERROR_CANCEL_LIST_STATE
  : '';

export const RESPONSE_CANCEL_LIST_STATE = isIndia
  ? indiaConstants.RESPONSE_CANCEL_LIST_STATE
  : '';

export const REQUEST_SEARCHSERVICE_LIST_STATE = isIndia
  ? indiaConstants.REQUEST_SEARCHSERVICE_LIST_STATE
  : '';

export const ERROR_SEARCHSERVICE_LIST_STATE = isIndia
  ? indiaConstants.ERROR_SEARCHSERVICE_LIST_STATE
  : '';

export const RESPONSE_SEARCHSERVICE_LIST_STATE = isIndia
  ? indiaConstants.RESPONSE_SEARCHSERVICE_LIST_STATE
  : '';

export const REQUEST_ADDRESS_LIST_STATE = isIndia
  ? indiaConstants.REQUEST_ADDRESS_LIST_STATE
  : '';

export const ERROR_ADDRESS_LIST_STATE = isIndia
  ? indiaConstants.ERROR_ADDRESS_LIST_STATE
  : '';

export const RESPONSE_ADDRESS_LIST_STATE = isIndia
  ? indiaConstants.RESPONSE_ADDRESS_LIST_STATE
  : '';

export const REQUEST_BOOKING_LIST_STATE = isIndia
  ? indiaConstants.REQUEST_BOOKING_LIST_STATE
  : '';

export const ERROR_BOOKING_LIST_STATE = isIndia
  ? indiaConstants.ERROR_BOOKING_LIST_STATE
  : '';

export const RESPONSE_BOOKING_LIST_STATE = isIndia
  ? indiaConstants.RESPONSE_BOOKING_LIST_STATE
  : '';

export const REQUEST_SAVE_ADDRESS_STATE = isIndia
  ? indiaConstants.REQUEST_SAVE_ADDRESS_STATE
  : '';

export const ERROR_SAVE_ADDRESS_STATE = isIndia
  ? indiaConstants.ERROR_SAVE_ADDRESS_STATE
  : '';

export const ERROR_EDIT_ADDRESS_STATE = isIndia
  ? indiaConstants.ERROR_EDIT_ADDRESS_STATE
  : '';

export const RESPONSE_SAVE_ADDRESS_STATE = isIndia
  ? indiaConstants.RESPONSE_SAVE_ADDRESS_STATE
  : '';
export const RESPONSE_EDIT_ADDRESS_STATE = isIndia
  ? indiaConstants.RESPONSE_EDIT_ADDRESS_STATE
  : '';

export const REQUEST_VIEW_ORDER_STATE = isIndia
  ? indiaConstants.REQUEST_VIEW_ORDER_STATE
  : '';

export const ERROR_VIEW_ORDER_STATE = isIndia
  ? indiaConstants.ERROR_VIEW_ORDER_STATE
  : '';

export const RESPONSE_VIEW_ORDER_STATE = isIndia
  ? indiaConstants.RESPONSE_VIEW_ORDER_STATE
  : '';

export const GET_REFERRAL_CODE_RESPONSE = isIndia
  ? indiaConstants.GET_REFERRAL_CODE_RESPONSE
  : '';

export const GET_REFERRAL_CODE_ERROR = isIndia
  ? indiaConstants.GET_REFERRAL_CODE_ERROR
  : '';

export const APPLY_REFERRAL_CODE_RESPONSE = isIndia
  ? indiaConstants.APPLY_REFERRAL_CODE_RESPONSE
  : '';

export const APPLY_REFERRAL_CODE_ERROR = isIndia
  ? indiaConstants.APPLY_REFERRAL_CODE_ERROR
  : '';

export const DRAWER_MENU_ITEM_CLICK = isIndia
  ? indiaConstants.DRAWER_MENU_ITEM_CLICK
  : '';

export const MY_SERVICE_ITEM_CLICK = isIndia
  ? indiaConstants.MY_SERVICE_ITEM_CLICK
  : '';
export const MY_SERVICES_ITEM_CLICK = isIndia
  ? indiaConstants.MY_SERVICES_ITEM_CLICK
  : '';

export const USER_LANDED_ON_MANDI_SCREEN = isIndia
  ? indiaConstants.USER_LANDED_ON_MANDI_SCREEN
  : '';

export const USER_EXITED_FROM_MANDI_SCREEN = isIndia
  ? indiaConstants.USER_EXITED_FROM_MANDI_SCREEN
  : '';

export const USER_VISITING_ADD_CROPS_SCREEN = isIndia
  ? indiaConstants.USER_VISITING_ADD_CROPS_SCREEN
  : '';

export const USER_LEAVING_ADD_CROPS_SCREEN = isIndia
  ? indiaConstants.USER_LEAVING_ADD_CROPS_SCREEN
  : '';

export const CONFRIM_SAVE_CROPS_CLICKED = isIndia
  ? indiaConstants.CONFRIM_SAVE_CROPS_CLICKED
  : '';

export const USER_VISITING_MY_CROPS_SCREEN = isIndia
  ? indiaConstants.USER_VISITING_MY_CROPS_SCREEN
  : '';

export const USER_LEAVING_MY_CROPS_SCREEN = isIndia
  ? indiaConstants.USER_LEAVING_MY_CROPS_SCREEN
  : '';

export const USER_VISITING_CROP_CALENDAR_SCREEN = isIndia
  ? indiaConstants.USER_VISITING_CROP_CALENDAR_SCREEN
  : '';

export const USER_LEAVING_CROP_CALENDAR_SCREEN = isIndia
  ? indiaConstants.USER_LEAVING_CROP_CALENDAR_SCREEN
  : '';

export const USER_VISITING_ENROLL_CROP_SCREEN = isIndia
  ? indiaConstants.USER_VISITING_ENROLL_CROP_SCREEN
  : '';

export const USER_LEAVING_ENROLL_CROP_SCREEN = isIndia
  ? indiaConstants.USER_LEAVING_ENROLL_CROP_SCREEN
  : '';
// Farm Loan
// Landing page
export const FARM_LOAN_LANDING_PAGE = isIndia
  ? indiaConstants.FARM_LOAN_LANDING_PAGE
  : '';
export const FARM_LOAN_LANDING_PAGE_REQUEST = isIndia
  ? indiaConstants.FARM_LOAN_LANDING_PAGE_REQUEST
  : '';

export const FARM_LOAN_LANDING_PAGE_RESPONSE = isIndia
  ? indiaConstants.FARM_LOAN_LANDING_PAGE_RESPONSE
  : '';

export const FARM_LOAN_LANDING_PAGE_ERROR = isIndia
  ? indiaConstants.FARM_LOAN_LANDING_PAGE_ERROR
  : '';

export const FARM_LOAN_ELIGIBLE_BUTTON_CLICK = isIndia
  ? indiaConstants.FARM_LOAN_ELIGIBLE_BUTTON_CLICK
  : '';

export const FARM_LOAN_CONSENT_DIALOG = isIndia
  ? indiaConstants.FARM_LOAN_CONSENT_DIALOG
  : '';

export const FARM_LOAN_NAVIGATE_JAIKISSAN_WEBSITE = isIndia
  ? indiaConstants.FARM_LOAN_NAVIGATE_JAIKISSAN_WEBSITE
  : '';
export const FARM_LOAN_CONSENT_DIALOG_ACCEPTED = isIndia
  ? indiaConstants.FARM_LOAN_CONSENT_DIALOG_ACCEPTED
  : '';

export const FARM_LOAN_APPLY_LOAN_BUTTON_CLICK = isIndia
  ? indiaConstants.FARM_LOAN_APPLY_LOAN_BUTTON_CLICK
  : '';

export const FARM_LOAN_NAVIGATE_RETAILER_PAGE = isIndia
  ? indiaConstants.FARM_LOAN_NAVIGATE_RETAILER_PAGE
  : '';
export const FARM_LOAN_TRACK_STATUS_BUTTON_CLICK = isIndia
  ? indiaConstants.FARM_LOAN_TRACK_STATUS_BUTTON_CLICK
  : '';

export const FARM_LOAN_NAVIGATE_TRACK_STATUS_PAGE = isIndia
  ? indiaConstants.FARM_LOAN_NAVIGATE_TRACK_STATUS_PAGE
  : '';

// Retailer List page
export const RETAILERS_PAGE_REQUEST = isIndia
  ? indiaConstants.RETAILERS_PAGE_REQUEST
  : '';

export const RETAILERS_PAGE_ERROR = isIndia
  ? indiaConstants.RETAILERS_PAGE_ERROR
  : '';

export const RETAILERS_PAGE_RESPONSE = isIndia
  ? indiaConstants.RETAILERS_PAGE_RESPONSE
  : '';

export const RETAILERS_PAGE_ITEM_CLICK_EVENT = isIndia
  ? indiaConstants.RETAILERS_PAGE_ITEM_CLICK_EVENT
  : '';
export const RETAILERS_PAGE_PHONE_CLICK_EVENT = isIndia
  ? indiaConstants.RETAILERS_PAGE_PHONE_CLICK_EVENT
  : '';
export const RETAILERS_PAGE_SHARE_CLICK_EVENT = isIndia
  ? indiaConstants.RETAILERS_PAGE_SHARE_CLICK_EVENT
  : '';
export const RETAILERS_PAGE_SEARCH_CLICK_EVENT = isIndia
  ? indiaConstants.RETAILERS_PAGE_SEARCH_CLICK_EVENT
  : '';

// Retailer details page
export const RETAILER_DETAILS_PAGE_REQUEST = isIndia
  ? indiaConstants.RETAILER_DETAILS_PAGE_REQUEST
  : '';
export const RETAILER_DETAILS_PAGE_ERROR = isIndia
  ? indiaConstants.RETAILER_DETAILS_PAGE_ERROR
  : '';
export const RETAILER_DETAILS_PAGE_RESPONSE = isIndia
  ? indiaConstants.RETAILER_DETAILS_PAGE_RESPONSE
  : '';
export const RETAILER_DETAILS_PAGE_CONFIRM_LOAN = isIndia
  ? indiaConstants.RETAILER_DETAILS_PAGE_CONFIRM_LOAN
  : '';
export const RETAILER_DETAILS_PAGE_CONFIRM_LOAN_CLOSED = isIndia
  ? indiaConstants.RETAILER_DETAILS_PAGE_CONFIRM_LOAN_CLOSED
  : '';
export const RETAILER_DETAILS_PAGE_CONFIRM_LOAN_CONFIRM = isIndia
  ? indiaConstants.RETAILER_DETAILS_PAGE_CONFIRM_LOAN_CONFIRM
  : '';
export const RETAILER_DETAILS_PAGE_PHONE_CLICK_EVENT = isIndia
  ? indiaConstants.RETAILER_DETAILS_PAGE_PHONE_CLICK_EVENT
  : '';
export const RETAILER_DETAILS_PAGE_SHARE_CLICK_EVENT = isIndia
  ? indiaConstants.RETAILER_DETAILS_PAGE_SHARE_CLICK_EVENT
  : '';

// Apply loan success congratulation screen
export const CONGRATULATION_SCREEN = isIndia
  ? indiaConstants.CONGRATULATION_SCREEN
  : '';
export const CONGRATULATION_SCREEN_CLOSE = isIndia
  ? indiaConstants.CONGRATULATION_SCREEN_CLOSE
  : '';
export const CONGRATULATION_SCREEN_PHONE_CLICK = isIndia
  ? indiaConstants.CONGRATULATION_SCREEN_PHONE_CLICK
  : '';
export const CONGRATULATION_SCREEN_DOCUMENT_LIST = isIndia
  ? indiaConstants.CONGRATULATION_SCREEN_DOCUMENT_LIST
  : '';
export const LOAN_DOCUMENT_LIST_REQUEST = isIndia
  ? indiaConstants.LOAN_DOCUMENT_LIST_REQUEST
  : '';
export const LOAN_DOCUMENT_LIST_ERROR = isIndia
  ? indiaConstants.LOAN_DOCUMENT_LIST_ERROR
  : '';
export const LOAN_DOCUMENT_LIST_RESPONSE = isIndia
  ? indiaConstants.LOAN_DOCUMENT_LIST_RESPONSE
  : '';

// Eligibility congratulation screen
export const ELIGIBILITY_CONGRATULATION_SCREEN = isIndia
  ? indiaConstants.ELIGIBILITY_CONGRATULATION_SCREEN
  : '';
export const ELIGIBILITY_CONGRATULATION_SCREEN_CLOSE = isIndia
  ? indiaConstants.ELIGIBILITY_CONGRATULATION_SCREEN_CLOSE
  : '';
export const GET_LOAN_ELIGIBILITY_REQUEST = isIndia
  ? indiaConstants.GET_LOAN_ELIGIBILITY_REQUEST
  : '';
export const GET_LOAN_ELIGIBILITY_ERROR = isIndia
  ? indiaConstants.GET_LOAN_ELIGIBILITY_ERROR
  : '';
export const GET_LOAN_ELIGIBILITY_RESPONSE = isIndia
  ? indiaConstants.GET_LOAN_ELIGIBILITY_RESPONSE
  : '';

export const USER_CLICKED_SEED_VARIETY = isIndia
  ? indiaConstants.USER_CLICKED_SEED_VARIETY
  : '';
export const USER_CLICKED_CROP_PROTECTION = isIndia
  ? indiaConstants.USER_CLICKED_CROP_PROTECTION
  : '';

export const USER_CLICKED_RECOMMEND_A_VARIETY = isIndia
  ? indiaConstants.USER_CLICKED_RECOMMEND_A_VARIETY
  : '';

export const USER_CLICKED_RECOMMEND_A_CROP_PROTECTION = isIndia
  ? indiaConstants.USER_CLICKED_RECOMMEND_A_CROP_PROTECTION
  : '';
export const USER_SELECTED_NEWCROP_TO_VIEW_SEED_VARIETIES = isIndia
  ? indiaConstants.USER_SELECTED_NEWCROP_TO_VIEW_SEED_VARIETIES
  : '';
export const USER_CLIKED_ON_FILTER_IN_SEED_VARIETY = isIndia
  ? indiaConstants.USER_CLIKED_ON_FILTER_IN_SEED_VARIETY
  : '';
export const USER_CLIKED_ON_PRODUCT_IN_SEED_VARIETY = isIndia
  ? indiaConstants.USER_CLIKED_ON_PRODUCT_IN_SEED_VARIETY
  : '';
export const USER_CLICKED_RECOMMEND_ME = isIndia
  ? indiaConstants.USER_CLICKED_RECOMMEND_ME
  : '';
export const USER_CLICKED_START_OVER_IN_VARIETY_RECOMMENDER = isIndia
  ? indiaConstants.USER_CLICKED_START_OVER_IN_VARIETY_RECOMMENDER
  : '';
export const USER_MARKED_FAVOURITE_PRODUCT = isIndia
  ? indiaConstants.USER_MARKED_FAVOURITE_PRODUCT
  : '';
export const USER_VISITED_KEY_FEATURES = isIndia
  ? indiaConstants.USER_VISITED_KEY_FEATURES
  : '';
export const USER_SELECTED_NEWCROP_TO_VIEW_CROP_PROTECTION = isIndia
  ? indiaConstants.USER_SELECTED_NEWCROP_TO_VIEW_CROP_PROTECTION
  : '';
export const USER_SELECTED_NEWCROP_TO_RECOMMEND_A_PRODUCT = isIndia
  ? indiaConstants.USER_SELECTED_NEWCROP_TO_RECOMMEND_A_PRODUCT
  : '';
export const USER_SELECTED_CROP_CHALLEGES = isIndia
  ? indiaConstants.USER_SELECTED_CROP_CHALLEGES
  : '';
export const USER_SELECTED_CROP_STAGES = isIndia
  ? indiaConstants.USER_SELECTED_CROP_STAGES
  : '';

export const TEMPERATURE_WIDGET_NEXT_AROOW_CLICK = isIndia
  ? indiaConstants.TEMPERATURE_WIDGET_NEXT_AROOW_CLICK
  : '';
export const TEMPERATURE_WIDGET_PERVIOUS_AROOW_CLICK = isIndia
  ? indiaConstants.TEMPERATURE_WIDGET_PERVIOUS_AROOW_CLICK
  : '';
export const WEATHER_MODULE_7DAYSFORECAST_RENDER = isIndia
  ? indiaConstants.WEATHER_MODULE_7DAYSFORECAST_RENDER
  : '';
export const WEATHER_MODULE_HOURLYFORECAST_RENDER = isIndia
  ? indiaConstants.WEATHER_MODULE_HOURLYFORECAST_RENDER
  : '';

// MDO Referal Events
export const USER_VISITED_MDO_REFERAL_PAGE = isIndia
  ? indiaConstants.USER_VISITED_MDO_REFERAL_PAGE
  : '';
export const USER_SUBMITTED_REFERAL_CODE = isIndia
  ? indiaConstants.USER_SUBMITTED_REFERAL_CODE
  : '';

// SPray Services
export const SPRAY_LANDING_PAGE = isIndia
  ? indiaConstants.SPRAY_LANDING_PAGE
  : '';
export const SPRAY_BOOM_SERVICE_CHECK_AVAILABILITY_REQUEST = isIndia
  ? indiaConstants.SPRAY_BOOM_SERVICE_CHECK_AVAILABILITY_REQUEST
  : '';
export const SPRAY_BOOM_SERVICE_CHECK_AVAILABILITY_SUCCESS = isIndia
  ? indiaConstants.SPRAY_BOOM_SERVICE_CHECK_AVAILABILITY_SUCCESS
  : '';
export const SPRAY_BOOM_SERVICE_CHECK_AVAILABILITY_ERROR = isIndia
  ? indiaConstants.SPRAY_BOOM_SERVICE_CHECK_AVAILABILITY_ERROR
  : '';
export const SPRAY_DRONE_SERVICE_CHECK_AVAILABILITY_REQUEST = isIndia
  ? indiaConstants.SPRAY_DRONE_SERVICE_CHECK_AVAILABILITY_REQUEST
  : '';
export const SPRAY_DRONE_SERVICE_CHECK_AVAILABILITY_SUCCESS = isIndia
  ? indiaConstants.SPRAY_DRONE_SERVICE_CHECK_AVAILABILITY_SUCCESS
  : '';
export const SPRAY_DRONE_SERVICE_CHECK_AVAILABILITY_ERROR = isIndia
  ? indiaConstants.SPRAY_DRONE_SERVICE_CHECK_AVAILABILITY_ERROR
  : '';

export const SPRAY_SERVICE_CLICK = isIndia
  ? indiaConstants.SPRAY_SERVICE_CLICK
  : '';
export const SPRAY_TRACK_STATUS_CLICK = isIndia
  ? indiaConstants.SPRAY_TRACK_STATUS_CLICK
  : '';

export const CHECK_SPRAY_SERVICE_AVAILABILITY = isIndia
  ? indiaConstants.CHECK_SPRAY_SERVICE_AVAILABILITY
  : '';

export const SPRAY_ADD_ADDRESS_CLICK = isIndia
  ? indiaConstants.SPRAY_ADD_ADDRESS_CLICK
  : '';
export const SPRAY_EDIT_ADDRESS_CLICK = isIndia
  ? indiaConstants.SPRAY_EDIT_ADDRESS_CLICK
  : '';
export const SPRAY_DELETE_ADDRESS_CLICK = isIndia
  ? indiaConstants.SPRAY_DELETE_ADDRESS_CLICK
  : '';
export const SPRAY_BOOK_SERVICE_BUTTON_CLICK = isIndia
  ? indiaConstants.SPRAY_BOOK_SERVICE_BUTTON_CLICK
  : '';
export const SPRAY_BOOK_SERVICE_REQUEST = isIndia
  ? indiaConstants.SPRAY_BOOK_SERVICE_REQUEST
  : '';
export const SPRAY_BOOK_SERVICE_SUCCESS = isIndia
  ? indiaConstants.SPRAY_BOOK_SERVICE_SUCCESS
  : '';
export const SPRAY_BOOK_SERVICE_ERROR = isIndia
  ? indiaConstants.SPRAY_BOOK_SERVICE_ERROR
  : '';
export const SPRAY_BOOKING_CONFIRMED_PAGE = isIndia
  ? indiaConstants.SPRAY_BOOKING_CONFIRMED_PAGE
  : '';
export const SPRAY_BOOKING_CONFIRMED_COPY_BOOKING_ID = isIndia
  ? indiaConstants.SPRAY_BOOKING_CONFIRMED_COPY_BOOKING_ID
  : '';
export const SPRAY_BOOKING_CONFIRMED_TRACK_STATUS_CLICK = isIndia
  ? indiaConstants.SPRAY_BOOKING_CONFIRMED_TRACK_STATUS_CLICK
  : '';
export const SPRAY_BOOKING_CONFIRMED_CONTACT_PARTNER_CLICK = isIndia
  ? indiaConstants.SPRAY_BOOKING_CONFIRMED_CONTACT_PARTNER_CLICK
  : '';
export const SPRAY_ADD_EDIT_ADDRESS_PAGE = isIndia
  ? indiaConstants.SPRAY_ADD_EDIT_ADDRESS_PAGE
  : '';
export const SPRAY_ADD_EDIT_ADDRESS_PAGE_CANCEL_CLICK = isIndia
  ? indiaConstants.SPRAY_ADD_EDIT_ADDRESS_PAGE_CANCEL_CLICK
  : '';
export const SPRAY_ADD_EDIT_ADDRESS_PAGE_SAVE_CLICK = isIndia
  ? indiaConstants.SPRAY_ADD_EDIT_ADDRESS_PAGE_SAVE_CLICK
  : '';

export const SPRAY_MACHINE_REQUEST = isIndia
  ? indiaConstants.SPRAY_MACHINE_REQUEST
  : '';
export const SPRAY_MACHINE_RESPONSE = isIndia
  ? indiaConstants.SPRAY_MACHINE_RESPONSE
  : '';
export const SPRAY_MACHINE_ERROE = isIndia
  ? indiaConstants.SPRAY_MACHINE_ERROE
  : '';
export const SPRAY_TRACK_STATUS_PENDING_CLICK = isIndia
  ? indiaConstants.SPRAY_TRACK_STATUS_PENDING_CLICK
  : '';
export const SPRAY_TRACK_STATUS_CONFIRMED_CLICK = isIndia
  ? indiaConstants.SPRAY_TRACK_STATUS_CONFIRMED_CLICK
  : '';
export const SPRAY_TRACK_STATUS_COMPLETED_CLICK = isIndia
  ? indiaConstants.SPRAY_TRACK_STATUS_COMPLETED_CLICK
  : '';
export const SPRAY_TRACK_STATUS_CANCELLED_CLICK = isIndia
  ? indiaConstants.SPRAY_TRACK_STATUS_CANCELLED_CLICK
  : '';
export const SPRAY_TRACK_STATUS_VIEWDETAIL_CLICK = isIndia
  ? indiaConstants.SPRAY_TRACK_STATUS_VIEWDETAIL_CLICK
  : '';
export const SPRAY_TRACK_STATUS_CANCELBOOKING_CLICK = isIndia
  ? indiaConstants.SPRAY_TRACK_STATUS_CANCELBOOKING_CLICK
  : '';
export const SPRAY_TRACK_STATUS_CONTACTPARTNER_CLICK = isIndia
  ? indiaConstants.SPRAY_TRACK_STATUS_CONTACTPARTNER_CLICK
  : '';
export const SPRAY_TRACK_STATUS_CANCELBOOKING_CANCEL_CLICK = isIndia
  ? indiaConstants.SPRAY_TRACK_STATUS_CANCELBOOKING_CANCEL_CLICK
  : '';
export const SPRAY_TRACK_STATUS_CANCELBOOKING_CONFIRM_CLICK = isIndia
  ? indiaConstants.SPRAY_TRACK_STATUS_CANCELBOOKING_CONFIRM_CLICK
  : '';
export const SPRAY_TRACK_STATUS_CANCELBOOKING_SUCCESS_MYORDERS_CLICK = isIndia
  ? indiaConstants.SPRAY_TRACK_STATUS_CANCELBOOKING_SUCCESS_MYORDERS_CLICK
  : '';

// Crop doctor Events
export const CROP_DOCTOR_LANDING_PAGE = isIndia
  ? indiaConstants.CROP_DOCTOR_LANDING_PAGE
  : '';
export const CROP_DOCTOR_HISTORY_API_REQUEST = isIndia
  ? indiaConstants.CROP_DOCTOR_HISTORY_API_REQUEST
  : '';
export const CROP_DOCTOR_HISTORY_API_RESPONSE = isIndia
  ? indiaConstants.CROP_DOCTOR_HISTORY_API_RESPONSE
  : '';
export const CROP_DOCTOR_HISTORY_API_ERROR = isIndia
  ? indiaConstants.CROP_DOCTOR_HISTORY_API_ERROR
  : '';
export const CROP_DOCTOR_LANDING_PAGE_TAKE_PICTURE = isIndia
  ? indiaConstants.CROP_DOCTOR_LANDING_PAGE_TAKE_PICTURE
  : '';
export const CROP_DOCTOR_HISTORY_ITEM_CLICK = isIndia
  ? indiaConstants.CROP_DOCTOR_HISTORY_ITEM_CLICK
  : '';
export const CROP_DOCTOR_DETAIL_PAGE = isIndia
  ? indiaConstants.CROP_DOCTOR_DETAIL_PAGE
  : '';
export const CROP_DOCTOR_DETAIL_PAGE_PRODUCT_ITEM_CLICK = isIndia
  ? indiaConstants.CROP_DOCTOR_DETAIL_PAGE_PRODUCT_ITEM_CLICK
  : '';
export const CROP_DOCTOR_DETAIL_PAGE_FEEDBACK_ALREADY_SUBMITTED = isIndia
  ? indiaConstants.CROP_DOCTOR_DETAIL_PAGE_FEEDBACK_ALREADY_SUBMITTED
  : '';
export const CROP_DOCTOR_DETAIL_PAGE_FEEDBACK_SUBMITTED = isIndia
  ? indiaConstants.CROP_DOCTOR_DETAIL_PAGE_FEEDBACK_SUBMITTED
  : '';
export const CROP_DOCTOR_DETAIL_PAGE_RATING_API_REQUEST = isIndia
  ? indiaConstants.CROP_DOCTOR_DETAIL_PAGE_RATING_API_REQUEST
  : '';
export const CROP_DOCTOR_DETAIL_PAGE_RATING_API_RESPONSE = isIndia
  ? indiaConstants.CROP_DOCTOR_DETAIL_PAGE_RATING_API_RESPONSE
  : '';
export const CROP_DOCTOR_DETAIL_PAGE_RATING_API_ERROR = isIndia
  ? indiaConstants.CROP_DOCTOR_DETAIL_PAGE_RATING_API_ERROR
  : '';
export const CROP_DOCTOR_SCAN_CROP_PAGE = isIndia
  ? indiaConstants.CROP_DOCTOR_SCAN_CROP_PAGE
  : '';
export const CROP_DOCTOR_SCAN_CROP_PAGE_IMAGE_API_REQUEST = isIndia
  ? indiaConstants.CROP_DOCTOR_SCAN_CROP_PAGE_IMAGE_API_REQUEST
  : '';
export const CROP_DOCTOR_SCAN_CROP_PAGE_IMAGE_API_RESPONSE = isIndia
  ? indiaConstants.CROP_DOCTOR_SCAN_CROP_PAGE_IMAGE_API_RESPONSE
  : '';
export const CROP_DOCTOR_SCAN_CROP_PAGE_IMAGE_API_ERROR = isIndia
  ? indiaConstants.CROP_DOCTOR_SCAN_CROP_PAGE_IMAGE_API_ERROR
  : '';
export const CROP_DOCTOR_SCAN_CROP_PAGE_CAMERA_UPLOAD = isIndia
  ? indiaConstants.CROP_DOCTOR_SCAN_CROP_PAGE_CAMERA_UPLOAD
  : '';
export const CROP_DOCTOR_SCAN_CROP_PAGE_GALLERY_UPLOAD = isIndia
  ? indiaConstants.CROP_DOCTOR_SCAN_CROP_PAGE_GALLERY_UPLOAD
  : '';

export const GET_DELETE_ACCOUNT_REQUEST = isIndia
  ? indiaConstants.GET_DELETE_ACCOUNT_REQUEST
  : '';
export const GET_DELETE_ACCOUNT_RESPONSE = isIndia
  ? indiaConstants.GET_DELETE_ACCOUNT_RESPONSE
  : '';
export const GET_DELETE_ACCOUNT_ERROR_RESPONSE = isIndia
  ? indiaConstants.GET_DELETE_ACCOUNT_ERROR_RESPONSE
  : '';

export const WHATSAPP_CONSENT_REQUEST = isIndia
  ? indiaConstants.WHATSAPP_CONSENT_REQUEST
  : '';
export const WHATSAPP_CONSENT_RESPONSE = isIndia
  ? indiaConstants.WHATSAPP_CONSENT_RESPONSE
  : '';
export const WHATSAPP_CONSENT_ERROR = isIndia
  ? indiaConstants.WHATSAPP_CONSENT_ERROR
  : '';
export const WHATSAPP_CONSENT_UPDATE_REQUEST = isIndia
  ? indiaConstants.WHATSAPP_CONSENT_UPDATE_REQUEST
  : '';

export const FCE_USER_REGISTRATION = isIndia
  ? indiaConstants.FCE_USER_REGISTRATION
  : '';

export const INTRODUCTION_SCREEN_INITIATED = isIndia
  ? indiaConstants.INTRODUCTION_SCREEN_INITIATED
  : apacConstants.INTRODUCTION_SCREEN_INITIATED;
export const INTRODUCTION_SCREEN_GET_STARTED = isIndia
  ? indiaConstants.INTRODUCTION_SCREEN_GET_STARTED
  : '';

export const CP_PRODUCT_BUY_RETAILER_CLICKED = isIndia
  ? indiaConstants.CP_PRODUCT_BUY_RETAILER_CLICKED
  : '';
export const SEED_PRODUCT_BUY_RETAILER_CLICKED = isIndia
  ? indiaConstants.SEED_PRODUCT_BUY_RETAILER_CLICKED
  : '';

// APAC SPECIFIC EVENTS
export const LANGUAGE_FETCH_TRANSLATION = isIndia
  ? ''
  : apacConstants.LANGUAGE_FETCH_TRANSLATION;
export const LANGUAGE_LOAD_FROM_PHRASE = isIndia
  ? ''
  : apacConstants.LANGUAGE_LOAD_FROM_PHRASE;
export const LANGUAGE_PHRASE_API_ERROR = isIndia
  ? ''
  : apacConstants.LANGUAGE_PHRASE_API_ERROR;
export const LANGUAGE_PHRASE_UPDATE_TRANSLATION = isIndia
  ? ''
  : apacConstants.LANGUAGE_PHRASE_UPDATE_TRANSLATION;
export const LOGIN_MANUAL_MOBILE_NUMBER_TYPING = isIndia
  ? ''
  : apacConstants.LOGIN_MANUAL_MOBILE_NUMBER_TYPING;
export const LOGIN_MOBILE_NUMBER_AUTOMATICALLY_PICKED = isIndia
  ? ''
  : apacConstants.LOGIN_MOBILE_NUMBER_AUTOMATICALLY_PICKED;
export const LOGIN_MOBILE_NUMBER_CHANGED = isIndia
  ? ''
  : apacConstants.LOGIN_MOBILE_NUMBER_CHANGED;
export const NONE_OF_THE_ABOVE_SELECTED = isIndia
  ? ''
  : apacConstants.NONE_OF_THE_ABOVE_SELECTED;
export const OTP_MANUALLY = isIndia ? '' : apacConstants.OTP_MANUALLY;
export const OTP_AUTO_POPULATE = isIndia ? '' : apacConstants.OTP_AUTO_POPULATE;
export const OTP_ERROR = isIndia ? '' : apacConstants.OTP_ERROR;
export const OTP_RESEND_TIMER_STARTED = isIndia
  ? ''
  : apacConstants.OTP_RESEND_TIMER_STARTED;
export const OTP_INCORRECT_ENTERED = isIndia
  ? ''
  : apacConstants.OTP_INCORRECT_ENTERED;
export const USER_CLICK_CHANGE_NUMBER = isIndia
  ? ''
  : apacConstants.USER_CLICK_CHANGE_NUMBER;
export const USER_PROFILE_REGISTRATION_PAGE = isIndia
  ? ''
  : apacConstants.USER_PROFILE_REGISTRATION_PAGE;
export const DASHBOARD_CONTENT_LIST_RESPONSE_ERROR = isIndia
  ? ''
  : apacConstants.DASHBOARD_CONTENT_LIST_RESPONSE_ERROR;
export const USER_DOWNLOADING_CROPS = isIndia
  ? ''
  : apacConstants.USER_DOWNLOADING_CROPS;
export const PRODUCT_SCAN_CLICK = isIndia
  ? ''
  : apacConstants.PRODUCT_SCAN_CLICK;
export const APPUPDATE_LIST_RESPONSE_ERROR = isIndia
  ? ''
  : apacConstants.APPUPDATE_LIST_RESPONSE_ERROR;
export const DASHBOARD_FEATURE_LIST_RESPONSE_ERROR = isIndia
  ? ''
  : apacConstants.DASHBOARD_FEATURE_LIST_RESPONSE_ERROR;
export const DASHBOARD_SLIDER_LIST_RESPONSE_ERROR = isIndia
  ? ''
  : apacConstants.DASHBOARD_SLIDER_LIST_RESPONSE_ERROR;
export const RETAILER_NURSERY_NO_DATA_AVAILABLE = isIndia
  ? ''
  : apacConstants.RETAILER_NURSERY_NO_DATA_AVAILABLE;
export const USER_CLICK_ON_MY_FAVORITE = isIndia
  ? ''
  : apacConstants.USER_CLICK_ON_MY_FAVORITE;
export const LANGUAGE_SELECTED = isIndia ? '' : apacConstants.LANGUAGE_SELECTED;
export const ERROR_RESPONSE_AUTO_COMPLETE = isIndia
  ? ''
  : apacConstants.ERROR_RESPONSE_AUTO_COMPLETE;
export const STATE_LIST_ERROR = isIndia ? '' : apacConstants.STATE_LIST_ERROR;
export const DISTRICT_LIST_ERROR = isIndia
  ? ''
  : apacConstants.DISTRICT_LIST_ERROR;
export const TALUKA_LIST_ERROR = isIndia ? '' : apacConstants.TALUKA_LIST_ERROR;
export const CROP_SERVICE_GET_CROP_LIST_ERROR_RESPONSE = isIndia
  ? ''
  : apacConstants.CROP_SERVICE_GET_CROP_LIST_ERROR_RESPONSE;
export const CROP_ENROLLMENT_SUCCESSFUL = isIndia
  ? ''
  : apacConstants.CROP_ENROLLMENT_SUCCESSFUL;
export const SETTINGS_PAGE = isIndia ? '' : apacConstants.SETTINGS_PAGE;
export const SETTINGS_PAGE_EDIT_CLICK = isIndia
  ? ''
  : apacConstants.SETTINGS_PAGE_EDIT_CLICK;
export const USER_EDITED_INFORMATION = isIndia
  ? ''
  : apacConstants.USER_EDITED_INFORMATION;
export const USER_CHANGING_LANGUAGE = isIndia
  ? ''
  : apacConstants.USER_CHANGING_LANGUAGE;
export const USER_ACCEPTING_CHANGE_LANGUAGE = isIndia
  ? ''
  : apacConstants.USER_ACCEPTING_CHANGE_LANGUAGE;
export const USER_CLICK_ON_MORE = isIndia
  ? ''
  : apacConstants.USER_CLICK_ON_MORE;
export const USER_CLICK_ON = isIndia ? '' : apacConstants.USER_CLICK_ON;
export const USER_REJECTING_CHANGE_LANGUAGE = isIndia
  ? ''
  : apacConstants.USER_REJECTING_CHANGE_LANGUAGE;
export const USER_DESELECTING_CROPS = isIndia
  ? ''
  : apacConstants.USER_DESELECTING_CROPS;
export const START_GEO_FENCING = isIndia ? '' : apacConstants.START_GEO_FENCING;
export const STOP_GEO_FENCING = isIndia ? '' : apacConstants.STOP_GEO_FENCING;
export const GET_NOTIFICATION_LIST_ERROR_RESPONSE = isIndia
  ? ''
  : apacConstants.GET_NOTIFICATION_LIST_ERROR_RESPONSE;
export const GET_NOTIFICATION_EDIT_ERROR_RESPONSE = isIndia
  ? ''
  : apacConstants.GET_NOTIFICATION_EDIT_ERROR_RESPONSE;
export const SAVE_FCM_TOKEN_ERROR_RESPONSE = isIndia
  ? ''
  : apacConstants.SAVE_FCM_TOKEN_ERROR_RESPONSE;
export const NEAR_ME_CLICK = isIndia ? '' : apacConstants.NEAR_ME_CLICK;
export const VISIT_NEAR_ME = isIndia ? '' : apacConstants.VISIT_NEAR_ME;
export const TOGGLE_MAP = isIndia ? '' : apacConstants.TOGGLE_MAP;
export const TOGGLE_LIST = isIndia ? '' : apacConstants.TOGGLE_LIST;
export const APPLY_FILTER = isIndia ? '' : apacConstants.APPLY_FILTER;
export const APPLY_FILTER_RETAIL = isIndia
  ? ''
  : apacConstants.APPLY_FILTER_RETAIL;
export const FMF_DIRECTION = isIndia ? '' : apacConstants.FMF_DIRECTION;
export const FMF_SHARE = isIndia ? '' : apacConstants.FMF_SHARE;
export const FMF_CALL = isIndia ? '' : apacConstants.FMF_CALL;
export const FMF_LOCATION_DISABLED = isIndia
  ? ''
  : apacConstants.FMF_LOCATION_DISABLED;
export const FMF_LOCATION_CANCEL = isIndia
  ? ''
  : apacConstants.FMF_LOCATION_CANCEL;
export const FMF_LOCATION_ENABLE = isIndia
  ? ''
  : apacConstants.FMF_LOCATION_ENABLE;
export const PLANTIX_CLICK = isIndia ? '' : apacConstants.PLANTIX_CLICK;
export const USER_ENTERING_PLANTIX = isIndia
  ? ''
  : apacConstants.USER_ENTERING_PLANTIX;
export const PLANTIX_SCAN_ON = isIndia ? '' : apacConstants.PLANTIX_SCAN_ON;
export const PLANTIX_MULTI_CROPS = isIndia
  ? ''
  : apacConstants.PLANTIX_MULTI_CROPS;
export const PLANTIX_MULTI_DIAG = isIndia
  ? ''
  : apacConstants.PLANTIX_MULTI_DIAG;
export const PLANTIX_SINGLE_DIAG = isIndia
  ? ''
  : apacConstants.PLANTIX_SINGLE_DIAG;
export const USER_ENTERING_PLANTIX_DETAILS = isIndia
  ? ''
  : apacConstants.USER_ENTERING_PLANTIX_DETAILS;
export const PLANTIX_DIAG_ERROR = isIndia
  ? ''
  : apacConstants.PLANTIX_DIAG_ERROR;
export const PLANTIX_NO_SOLUTION = isIndia
  ? ''
  : apacConstants.PLANTIX_NO_SOLUTION;
export const USER_ENTERING_PLANTIX_HISTORY = isIndia
  ? ''
  : apacConstants.USER_ENTERING_PLANTIX_HISTORY;

export const USER_CALLSUPPORT_CLICK = isIndia
  ? ''
  : apacConstants.USER_CALLSUPPORT_CLICK;
export const CALL_SUPPORT_CLICK = isIndia
  ? ''
  : apacConstants.CALL_SUPPORT_CLICK;
export const USER_SHARE_DIAGNOSIS_CLICK = isIndia
  ? ''
  : apacConstants.USER_SHARE_DIAGNOSIS_CLICK;

export const PLANTIX_RECOMMENDED_PRODUCTS = isIndia
  ? ''
  : apacConstants.PLANTIX_RECOMMENDED_PRODUCTS;
export const PLANTIX_FEEDBACK_SUBMIT = isIndia
  ? ''
  : apacConstants.PLANTIX_FEEDBACK_SUBMIT;
export const PLANTIX_INCOMPLETE_SCAN_NOT_NOW = isIndia
  ? ''
  : apacConstants.PLANTIX_INCOMPLETE_SCAN_NOT_NOW;

export const PLANTIX_INCOMPLETE_SCAN_CONTINUE = isIndia
  ? ''
  : apacConstants.PLANTIX_INCOMPLETE_SCAN_CONTINUE;

export const PLANTIX_SELECT_PHOTO_FROM_GALLERY = isIndia
  ? ''
  : apacConstants.PLANTIX_SELECT_PHOTO_FROM_GALLERY;

export const PLANTIX_CLICK_PHOTO = isIndia
  ? ''
  : apacConstants.PLANTIX_CLICK_PHOTO;

export const BUY_IT_NEAREST = isIndia ? '' : apacConstants.BUY_IT_NEAREST;
export const GET_THAI_MARKETING_CONSENT_ERROR_RESPONSE = isIndia
  ? ''
  : apacConstants.GET_THAI_MARKETING_CONSENT_ERROR_RESPONSE;
export const POST_THAI_MARKETING_CONSENT_ERROR_RESPONSE = isIndia
  ? ''
  : apacConstants.POST_THAI_MARKETING_CONSENT_ERROR_RESPONSE;
export const GET_KEY_CROPS_LIST_ERROR_RESPONSE = isIndia
  ? ''
  : apacConstants.GET_KEY_CROPS_LIST_ERROR_RESPONSE;
export const GET_THAI_PAGES_ERROR_RESPONSE = isIndia
  ? ''
  : apacConstants.GET_THAI_PAGES_ERROR_RESPONSE;
export const GET_PERSONAL_DATA_ERROR_RESPONSE = isIndia
  ? ''
  : apacConstants.GET_PERSONAL_DATA_ERROR_RESPONSE;
export const GET_CANCEL_MEMBERSHIP_ERROR_RESPONSE = isIndia
  ? ''
  : apacConstants.GET_CANCEL_MEMBERSHIP_ERROR_RESPONSE;
export const GET_CONSENT_ERROR_RESPONSE = isIndia
  ? ''
  : apacConstants.GET_CONSENT_ERROR_RESPONSE;

export const SERVICE_CARD_CLICK = isIndia
  ? ''
  : apacConstants.SERVICE_CARD_CLICK;
export const DASHBOARD_PAGE = isIndia ? '' : apacConstants.DASHBOARD_PAGE;

// E-commerce Events
export const ECOMMERCE_MY_CART = isIndia ? '' : apacConstants.ECOMMERCE_MY_CART;
export const ECOMMERCE_DELIVERY_ADDRESS_PAGE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_DELIVERY_ADDRESS_PAGE;
export const ECOMMERCE_CHANGE_LOCATION = isIndia
  ? ''
  : apacConstants.ECOMMERCE_CHANGE_LOCATION;

export const ECOMMERCE_FRCNCHISE_SCREEN = isIndia
  ? ''
  : apacConstants.ECOMMERCE_FRCNCHISE_SCREEN;
export const ECOMMERCE_CATEGORY = isIndia
  ? ''
  : apacConstants.ECOMMERCE_CATEGORY;
export const ECOMMERCE_CATEGORY_SELECT = isIndia
  ? ''
  : apacConstants.ECOMMERCE_CATEGORY_SELECT;
export const ECOMMERCE_PRODUCT_SEARCH = isIndia
  ? ''
  : apacConstants.ECOMMERCE_PRODUCT_SEARCH;
export const ECOMMERCE_ADD_TO_CART = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ADD_TO_CART;
export const ECOMMERCE_PRODUCT_DETAIL_PAGE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_PRODUCT_DETAIL_PAGE;
export const ECOMMERCE_CHECKOUT_SCREEN = isIndia
  ? ''
  : apacConstants.ECOMMERCE_CHECKOUT_SCREEN;
export const ECOMMERCE_NEW_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_NEW_ADDRESS;
export const ECOMMERCE_SELECTED_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_SELECTED_ADDRESS;
export const ECOMMERCE_NON_DELIVERABLE_ADD = isIndia
  ? ''
  : apacConstants.ECOMMERCE_NON_DELIVERABLE_ADD;
export const ECOMMERCE_PRODUCT_REMOVED = isIndia
  ? ''
  : apacConstants.ECOMMERCE_PRODUCT_REMOVED;
export const ECOMMERCE_ORDER_PLACE_ERROR = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ORDER_PLACE_ERROR;
export const ECOMMERCE_ORDER_SUCCESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ORDER_SUCCESS;
export const ECOMMERCE_EXISTING_ADDRESS_SELECTED = isIndia
  ? ''
  : apacConstants.ECOMMERCE_EXISTING_ADDRESS_SELECTED;
export const ECOMMERCE_ORDER_SUMMERY = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ORDER_SUMMERY;
export const ECOMMERCE_ORDER_PLACED = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ORDER_PLACED;
export const ECOMMERCE_CONTINUE_SHOPPING = isIndia
  ? ''
  : apacConstants.ECOMMERCE_CONTINUE_SHOPPING;
export const ECOMMERCE_VIEW_YOUR_ORDER = isIndia
  ? ''
  : apacConstants.ECOMMERCE_VIEW_YOUR_ORDER;

export const ECOMMERCE_ADD_NEW_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ADD_NEW_ADDRESS;
export const ECOMMERCE_ORDER_HISTORY = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ORDER_HISTORY;
export const ECOMMERCE_ONGOING_ORDERS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ONGOING_ORDERS;
export const ECOMMERCE_MY_ORDER = isIndia
  ? ''
  : apacConstants.ECOMMERCE_MY_ORDER;
export const ECOMMERCE_VIEW_ORDER_DETAILS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_VIEW_ORDER_DETAILS;
export const ECOMMERCE_FEEDBACK_RATING = isIndia
  ? ''
  : apacConstants.ECOMMERCE_FEEDBACK_RATING;
export const ECOMMERCE_DOWNLOAD_INVOICE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_DOWNLOAD_INVOICE;
export const ECOMMERCE_MY_DELIVERY_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_MY_DELIVERY_ADDRESS;
export const ECOMMERCE_EDIT_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_EDIT_ADDRESS;
export const ECOMMERCE_DELETE_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_DELETE_ADDRESS;
export const ECOMMERCE_SAVE_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_SAVE_ADDRESS;
export const ECOMMERCE_ERROR_STATE_LIST = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_STATE_LIST;
export const ECOMMERCE_ERROR_CITI_LIST = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_CITI_LIST;
export const ECOMMERCE_ERROR_AREA_LIST = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_AREA_LIST;
export const ECOMMERCE_ERROR_ADDRESS_LIST = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_ADDRESS_LIST;
export const ECOMMERCE_ERROR_MERCHANT_DATA = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_MERCHANT_DATA;
export const ECOMMERCE_ERROR_CART_LIST = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_CART_LIST;
export const ECOMMERCE_ERROR_MERCHANT_CATEGORIES_DATA = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_MERCHANT_CATEGORIES_DATA;
export const ECOMMERCE_ERROR_MERCHANT_PRODUCTS_DATA = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_MERCHANT_PRODUCTS_DATA;
export const ECOMMERCE_ERROR_MERCHANT_PRODUCT_DETAIL_DATA = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_MERCHANT_PRODUCT_DETAIL_DATA;
export const ECOMMERCE_ERROR_UPDATE_CART_ITEM = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_UPDATE_CART_ITEM;
export const ECOMMERCE_ERROR_DELETE_CART_ITEM = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_DELETE_CART_ITEM;
export const ECOMMERCE_ERROR_CHECKOUT_DATA = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_CHECKOUT_DATA;
export const ECOMMERCE_ERROR_APPLY_VOUCHER_DATA = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_APPLY_VOUCHER_DATA;
export const ECOMMERCE_ERROR_REMOVE_VOUCHER_DATA = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_REMOVE_VOUCHER_DATA;
export const ECOMMERCE_ERROR_ORDER_DETAILS_DATA = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_ORDER_DETAILS_DATA;
export const ECOMMERCE_ERROR_ORDER_INVOICE_FILE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_ORDER_INVOICE_FILE;
export const ECOMMERCE_ERROR_ADD_TO_CART = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_ADD_TO_CART;
export const ECOMMERCE_ERROR_ORDER_LIST = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_ORDER_LIST;
export const ECOMMERCE_ERROR_ADD_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_ADD_ADDRESS;
export const ECOMMERCE_ERROR_EDIT_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_EDIT_ADDRESS;
export const ECOMMERCE_ERROR_DELETE_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_DELETE_ADDRESS;
export const ECOMMERCE_ERROR_DELIVERY_PRICE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_DELIVERY_PRICE;
export const ECOMMERCE_ERROR_REPEAT_ORDER = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_REPEAT_ORDER;
export const ECOMMERCE_ERROR_DELETE_CART = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_DELETE_CART;
export const ECOMMERCE_ERROR_REFRESH_CART = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_REFRESH_CART;
export const ECOMMERCE_ERROR_RATING_LIST = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_RATING_LIST;
export const ECOMMERCE_ERROR_SAVE_RATING = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_SAVE_RATING;
export const ECOMMERCE_CALL_RETAILER = isIndia
  ? ''
  : apacConstants.ECOMMERCE_CALL_RETAILER;
export const ECOMMERCE_SHOP = isIndia ? '' : apacConstants.ECOMMERCE_SHOP;
export const ECOMMERCE_SELECT_NEW_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_SELECT_NEW_ADDRESS;
export const ECOMMERCE_SHOP_HOMEPAGE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_SHOP_HOMEPAGE;
export const ECOMMERCE_PLUS_ICON = isIndia
  ? ''
  : apacConstants.ECOMMERCE_PLUS_ICON;
export const ECOMMERCE_MINUS_ICON = isIndia
  ? ''
  : apacConstants.ECOMMERCE_MINUS_ICON;
export const ECOMMERCE_DELETE_PRODUCT = isIndia
  ? ''
  : apacConstants.ECOMMERCE_DELETE_PRODUCT;
export const ECOMMERCE_SHARE_CLICK = isIndia
  ? ''
  : apacConstants.ECOMMERCE_SHARE_CLICK;
export const ECOMMERCE_VOUCHER_APPLIED = isIndia
  ? ''
  : apacConstants.ECOMMERCE_VOUCHER_APPLIED;
export const ECOMMERCE_VOUCHER_REMOVED = isIndia
  ? ''
  : apacConstants.ECOMMERCE_VOUCHER_REMOVED;
export const ECOMMERCE_PAYMENT = isIndia ? '' : apacConstants.ECOMMERCE_PAYMENT;
export const ECOMMERCE_LETS_ORDER = isIndia
  ? ''
  : apacConstants.ECOMMERCE_LETS_ORDER;
export const ECOMMERCE_PLACE_ORDER = isIndia
  ? ''
  : apacConstants.ECOMMERCE_PLACE_ORDER;
export const ECOMMERCE_NEXT_PAYMENT = isIndia
  ? ''
  : apacConstants.ECOMMERCE_NEXT_PAYMENT;
export const ECOMMERCE_CASH_CHANGE_REQUEST = isIndia
  ? ''
  : apacConstants.ECOMMERCE_CASH_CHANGE_REQUEST;
export const ECOMMERCE_GO_TO_FRANCHISE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_GO_TO_FRANCHISE;
export const ECOMMERCE_MARK_DEFAULT = isIndia
  ? ''
  : apacConstants.ECOMMERCE_MARK_DEFAULT;
export const ECOMMERCE_LOCATION_CHANGE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_LOCATION_CHANGE;
export const ECOMMERCE_MANUAL_ADDRESS_CAPTURE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_MANUAL_ADDRESS_CAPTURE;
export const ECOMMERCE_LOCATION_DISABLE_CANCEL = isIndia
  ? ''
  : apacConstants.ECOMMERCE_LOCATION_DISABLE_CANCEL;
export const ECOMMERCE_ENABLE_LOCATION = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ENABLE_LOCATION;
export const ECOMMERCE_LOCATION_NOT_DELIVERABLE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_LOCATION_NOT_DELIVERABLE;
export const ECOMMERCE_USER_ENABLED_LOCATION = isIndia
  ? ''
  : apacConstants.ECOMMERCE_USER_ENABLED_LOCATION;
export const ECOMMERCE_LOCATION_PERMISSION_POPUP = isIndia
  ? ''
  : apacConstants.ECOMMERCE_LOCATION_PERMISSION_POPUP;
export const ECOMMERCE_LOCATION_NOT_SERVICABLE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_LOCATION_NOT_SERVICABLE;
export const ECOMMERCE_GEO_MAP_CONFIRM = isIndia
  ? ''
  : apacConstants.ECOMMERCE_GEO_MAP_CONFIRM;
export const ECOMMERCE_GEO_ADD_ADDRESS_OTHERS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_GEO_ADD_ADDRESS_OTHERS;
export const ECOMMERCE_LOCATION_CHANGE_ADDRESS = isIndia
  ? ''
  : apacConstants.ECOMMERCE_LOCATION_CHANGE_ADDRESS;
export const ECOMMERCE_CHECKOUT_LESSAMOUNT_EXIT_CLICKED = isIndia
  ? ''
  : apacConstants.ECOMMERCE_CHECKOUT_LESSAMOUNT_EXIT_CLICKED;
export const ECOMMERCE_CHECKOUT_LESSAMOUNT_CONTINUE_CLICKED = isIndia
  ? ''
  : apacConstants.ECOMMERCE_CHECKOUT_LESSAMOUNT_CONTINUE_CLICKED;
export const ECOMMERCE_CHECKOUT_LESSAMOUNT_SHOW_POPUP = isIndia
  ? ''
  : apacConstants.ECOMMERCE_CHECKOUT_LESSAMOUNT_SHOW_POPUP;
export const ECOMMERCE_ERROR_MIN_ORDER_RESPONSE = isIndia
  ? ''
  : apacConstants.ECOMMERCE_ERROR_MIN_ORDER_RESPONSE;

// Query module
export const QUERIES_RAISED = isIndia ? '' : apacConstants.QUERIES_RAISED;
export const QUERY_FEEDBACK = isIndia ? '' : apacConstants.QUERY_FEEDBACK;
export const QUERY_RESPONSE_LINK_CLICKED = isIndia
  ? ''
  : apacConstants.QUERY_RESPONSE_LINK_CLICKED;
export const PAGE_VIEWED_FROM_QUERY_RESPONSE = isIndia
  ? ''
  : apacConstants.PAGE_VIEWED_FROM_QUERY_RESPONSE;

// firebase event for user registration
export const REGISTRATION_COMPLETED = isIndia
  ? ''
  : apacConstants.REGISTRATION_COMPLETED;
export const WHATSAPPICON_DASHBOARD = isIndia
  ? ''
  : apacConstants.WHATSAPPICON_DASHBOARD;
export const WHATSAPPICON_PLANTIX = isIndia
  ? ''
  : apacConstants.WHATSAPPICON_PLANTIX;
export const WHATSAPPICON_CHECKOUT = isIndia
  ? ''
  : apacConstants.WHATSAPPICON_CHECKOUT;
export const WHATSAPPICON_MYORDERS = isIndia
  ? ''
  : apacConstants.WHATSAPPICON_MYORDERS;
// Enroll Crop

export const ENROLL_CROP_USER_VISITING_CROP_CALENDAR = isIndia
  ? ''
  : apacConstants.ENROLL_CROP_USER_VISITING_CROP_CALENDAR;

export const ENROLL_CROP_CLICK = isIndia ? '' : apacConstants.ENROLL_CROP_CLICK;
export const ENROLL_CROP_FARMING_PRACTICES = isIndia
  ? ''
  : apacConstants.ENROLL_CROP_FARMING_PRACTICES;
export const ENROLL_CROP_CROP_DURATION = isIndia
  ? ''
  : apacConstants.ENROLL_CROP_CROP_DURATION;
export const ENROLL_CROP_DATE_OF_SOWING = isIndia
  ? ''
  : apacConstants.ENROLL_CROP_DATE_OF_SOWING;
export const ENROLL_CROP_DATE_OF_TRANSPLANT = isIndia
  ? ''
  : apacConstants.ENROLL_CROP_DATE_OF_TRANSPLANT;
export const USER_CLICKING_ENROLL_CROP = isIndia
  ? ''
  : apacConstants.USER_CLICKING_ENROLL_CROP;
export const ENROLL_CROP_EDIT_CLICK_AFTER_SAVE = isIndia
  ? ''
  : apacConstants.ENROLL_CROP_EDIT_CLICK_AFTER_SAVE;
export const ENROLL_CROP_USER_CLICKING_CROP_CALENDAR = isIndia
  ? ''
  : apacConstants.ENROLL_CROP_USER_CLICKING_CROP_CALENDAR;
export const CROP_ENROLLMENT_COMPLETE = isIndia
  ? ''
  : apacConstants.CROP_ENROLLMENT_COMPLETE;
export const ENROLL_CROP_REMINDER_TAB = isIndia
  ? ''
  : apacConstants.ENROLL_CROP_REMINDER_TAB;
export const NOT_NOW_CLICK = isIndia ? '' : apacConstants.NOT_NOW_CLICK;
export const PLANTIX_ADD_CROP = isIndia ? '' : apacConstants.PLANTIX_ADD_CROP;

// Refer & Earn event
export const REFER_MORE_MENU_CLICKED = isIndia
  ? ''
  : apacConstants.REFER_MORE_MENU_CLICKED;
export const REFER_AND_EARN_LANDING = isIndia
  ? ''
  : apacConstants.REFER_AND_EARN_LANDING;
export const REFER_USER_CLICKING_QR_CODE = isIndia
  ? ''
  : apacConstants.REFER_USER_CLICKING_QR_CODE;
export const REFER_CLICKING_COPY_REFERRAL_CODE = isIndia
  ? ''
  : apacConstants.REFER_CLICKING_COPY_REFERRAL_CODE;
export const REFER_CLICKING_REFERRAL_NOW = isIndia
  ? ''
  : apacConstants.REFER_CLICKING_REFERRAL_NOW;
export const REFER_LANDING_ON_REFERRAL_DIALOG = isIndia
  ? ''
  : apacConstants.REFER_LANDING_ON_REFERRAL_DIALOG;
export const REFER_TYPING_ON_REFERRAL_DIALOG_INPUT = isIndia
  ? ''
  : apacConstants.REFER_TYPING_ON_REFERRAL_DIALOG_INPUT;
export const REFER_APPLY_ON_REFERRAL_DIALOG = isIndia
  ? ''
  : apacConstants.REFER_APPLY_ON_REFERRAL_DIALOG;
export const REFER_CLICKING_DISMISS_ON_REFERRAL_DIALOG = isIndia
  ? ''
  : apacConstants.REFER_CLICKING_DISMISS_ON_REFERRAL_DIALOG;
export const REFER_APPLY_ON_AUTOMATICALLY = isIndia
  ? ''
  : apacConstants.REFER_APPLY_ON_AUTOMATICALLY;
export const USER_CLICKING_ON_MORE_BOTTOM_TAB = isIndia
  ? ''
  : apacConstants.USER_CLICKING_ON_MORE_BOTTOM_TAB;
export const USER_EDITED_ENROLL_DATA_CANCELLED = isIndia
  ? ''
  : apacConstants.USER_EDITED_ENROLL_DATA_CANCELLED;
export const USER_EDITED_ENROLL_DATA_SUCCESSFULLY = isIndia
  ? ''
  : apacConstants.USER_EDITED_ENROLL_DATA_SUCCESSFULLY;
// Hybrid events
export const USER_SHARING_HYBRID = isIndia
  ? ''
  : apacConstants.USER_SHARING_HYBRID;

export const USER_SHARING_CP_PRODUCT = isIndia
  ? ''
  : apacConstants.USER_SHARING_CP_PRODUCT;
export const USER_CHANGEING_CROP = isIndia
  ? ''
  : apacConstants.USER_CHANGEING_CROP;
export const USER_VISITING_CP_CHALLENGES = isIndia
  ? ''
  : apacConstants.USER_VISITING_CP_CHALLENGES;
export const USER_VIEW_ALL_CROPCHALLENGE = isIndia
  ? ''
  : apacConstants.USER_VIEW_ALL_CROPCHALLENGE;
export const USER_VISITING_CHANGE_STAGE_DETAIL = isIndia
  ? ''
  : apacConstants.USER_VISITING_CHANGE_STAGE_DETAIL;
export const USER_VISITING_STAGE_DETAIL = isIndia
  ? ''
  : apacConstants.USER_VISITING_STAGE_DETAIL;
export const SWITCHING_AGRONOMY_PRATICES_AND_PRECAUTIONS_TAB = isIndia
  ? ''
  : apacConstants;
export const USER_CLICKING_ON_KNOWMORE_BUTTON = isIndia
  ? ''
  : apacConstants.USER_CLICKING_ON_KNOWMORE_BUTTON;
export const USER_VISITING_PROFILE = isIndia
  ? ''
  : apacConstants.USER_VISITING_PROFILE;
export const USER_VISITING_ABOUTUS = isIndia
  ? ''
  : apacConstants.USER_VISITING_ABOUTUS;
export const USER_EDITING_PROFILE = isIndia
  ? ''
  : apacConstants.USER_EDITING_PROFILE;
export const USER_ADDING_PRODUCT_TO_FAVOURITE = isIndia
  ? ''
  : apacConstants.USER_ADDING_PRODUCT_TO_FAVOURITE;

// crop protection service
export const CROP_PROTECTION_PRODUCT_LIST_ERROR = isIndia
  ? ''
  : apacConstants.CROP_PROTECTION_PRODUCT_LIST_ERROR;
export const CROP_PROTECTION_CHALLENGES_ERROR = isIndia
  ? ''
  : apacConstants.CROP_PROTECTION_CHALLENGES_ERROR;
export const CROP_PROTECTION_STAGES_ERROR = isIndia
  ? ''
  : apacConstants.CROP_PROTECTION_STAGES_ERROR;

// Farm service
export const FARM_AREA_LIST_ERROR = isIndia
  ? ''
  : apacConstants.FARM_AREA_LIST_ERROR;
export const FARM_AREA_SAVE_ERROR = isIndia
  ? ''
  : apacConstants.FARM_AREA_SAVE_ERROR;
export const FARM_AREA_GET_AREA_ERROR = isIndia
  ? ''
  : apacConstants.FARM_AREA_GET_AREA_ERROR;
export const FARM_AREA_DELETE_FARM_ERROR = isIndia
  ? ''
  : apacConstants.FARM_AREA_DELETE_FARM_ERROR;

// Query List Service
export const QUERY_LIST_GET_ERROR = isIndia
  ? ''
  : apacConstants.QUERY_LIST_GET_ERROR;
export const QUERY_LIST_DELETE_ERROR = isIndia
  ? ''
  : apacConstants.QUERY_LIST_DELETE_ERROR;
export const QUERY_LIST_NEW_QUERY_ERROR = isIndia
  ? ''
  : apacConstants.QUERY_LIST_NEW_QUERY_ERROR;
export const QUERY_LIST_RATE_QUERY_ERROR = isIndia
  ? ''
  : apacConstants.QUERY_LIST_RATE_QUERY_ERROR;
export const QUERY_LIST_UPLOAD_QUERY_ERROR = isIndia
  ? ''
  : apacConstants.QUERY_LIST_UPLOAD_QUERY_ERROR;
export const QUERY_LIST_REPLY_QUERY_ERROR = isIndia
  ? ''
  : apacConstants.QUERY_LIST_REPLY_QUERY_ERROR;
export const QUERY_LIST_QUERY_CONVERSATION_ERROR = isIndia
  ? ''
  : apacConstants.QUERY_LIST_QUERY_CONVERSATION_ERROR;
export const QUERY_LIST_CATEGORY_ERROR = isIndia
  ? ''
  : apacConstants.QUERY_LIST_CATEGORY_ERROR;
export const QUERY_LIST_DELETE_QUERY_FILE_ERROR = isIndia
  ? ''
  : apacConstants.QUERY_LIST_DELETE_QUERY_FILE_ERROR;
export const QUERY_LIST_CALL_SUPPORT_ERROR = isIndia
  ? ''
  : apacConstants.QUERY_LIST_CALL_SUPPORT_ERROR;
export const QUERY_LIST_CALL_SUPPORT_CROP_PROTECTION_ERROR = isIndia
  ? ''
  : apacConstants.QUERY_LIST_CALL_SUPPORT_CROP_PROTECTION_ERROR;

// Refer & EARN service
export const REFER_GET_REFER_CODE_ERROR = isIndia
  ? ''
  : apacConstants.REFER_GET_REFER_CODE_ERROR;
export const REFER_SAVE_REFERRAL_QR_CODE_ERROR = isIndia
  ? ''
  : apacConstants.REFER_SAVE_REFERRAL_QR_CODE_ERROR;
export const REFER_APPLY_REFERRAL_ERROR = isIndia
  ? ''
  : apacConstants.REFER_APPLY_REFERRAL_ERROR;

// Store service
export const STORE_GET_LIST_ERROR = isIndia
  ? ''
  : apacConstants.STORE_GET_LIST_ERROR;
export const STORE_GET_DISTANCE_ERROR = isIndia
  ? ''
  : apacConstants.STORE_GET_DISTANCE_ERROR;

// Nearest Retailer Service
export const NEAREST_RETAILER_GET_CROP_LIST_ERROR = isIndia
  ? ''
  : apacConstants.NEAREST_RETAILER_GET_CROP_LIST_ERROR;

// Plantix Service
export const PLANTIX_SERVICE_IMAGE_DIAGNOSIS_ERROR = isIndia
  ? ''
  : apacConstants.PLANTIX_SERVICE_IMAGE_DIAGNOSIS_ERROR;
export const PLANTIX_SERVICE_DIAGNOSIS_CALL_SUPPORT_ERROR = isIndia
  ? ''
  : apacConstants.PLANTIX_SERVICE_DIAGNOSIS_CALL_SUPPORT_ERROR;
export const PLANTIX_SERVICE_DIAGNOSIS_RATING_REASONS_ERROR = isIndia
  ? ''
  : apacConstants.PLANTIX_SERVICE_DIAGNOSIS_RATING_REASONS_ERROR;
export const PLANTIX_SERVICE_DIAGNOSIS_RATING_FEEDBACK_ERROR = isIndia
  ? ''
  : apacConstants.PLANTIX_SERVICE_DIAGNOSIS_RATING_FEEDBACK_ERROR;
export const PLANTIX_SERVICE_DIAGNOSIS_HISTORY_ERROR = isIndia
  ? ''
  : apacConstants.PLANTIX_SERVICE_DIAGNOSIS_HISTORY_ERROR;
export const PLANTIX_SERVICE_DIAGNOSIS_BY_SCANID_ERROR = isIndia
  ? ''
  : apacConstants.PLANTIX_SERVICE_DIAGNOSIS_BY_SCANID_ERROR;
// Weather Service
export const WEATHER_SERVICE_FORECAST_ERROR = isIndia
  ? ''
  : apacConstants.WEATHER_SERVICE_FORECAST_ERROR;
export const WEATHER_SERVICE_HISTORIC_DATA_ERROR = isIndia
  ? ''
  : apacConstants.WEATHER_SERVICE_HISTORIC_DATA_ERROR;
// Seed Calculator Event
export const SEED_CALCULATOR_SERVICE_CLICK = isIndia
  ? ''
  : apacConstants.SEED_CALCULATOR_SERVICE_CLICK;
export const MY_CROPS_CLICK = isIndia ? '' : apacConstants.MY_CROPS_CLICK;

export const SAVE_APPFEEDBACK_ERROR = isIndia
  ? ''
  : apacConstants.SAVE_APPFEEDBACK_ERROR;
export const FEEDBACK_THUMBSUP = isIndia ? '' : apacConstants.FEEDBACK_THUMBSUP;
export const FEEDBACK_THUMBSDOWN = isIndia
  ? ''
  : apacConstants.FEEDBACK_THUMBSDOWN;
export const FEEDBACK_NOTHANKYOU = isIndia
  ? ''
  : apacConstants.FEEDBACK_NOTHANKYOU;
export const FEEDBACK_CLOSE = isIndia ? '' : apacConstants.FEEDBACK_CLOSE;
// MPIN event
export const MPIN_LOGIN_MOBILE_NUMBER_AUTOMATICALLY_PICKED = isIndia
  ? ''
  : apacConstants.MPIN_LOGIN_MOBILE_NUMBER_AUTOMATICALLY_PICKED;
export const MPIN_LOGIN_MOBILE_NUMBER_CHANGED = isIndia
  ? ''
  : apacConstants.MPIN_LOGIN_MOBILE_NUMBER_CHANGED;
export const MPIN_USER_CLICK_CHANGE_NUMBER = isIndia
  ? ''
  : apacConstants.MPIN_USER_CLICK_CHANGE_NUMBER;
export const MPIN_SCREEN_INITIALIZED = isIndia
  ? ''
  : apacConstants.MPIN_SCREEN_INITIALIZED;
export const MPIN_USER_CLICKED_FORGOT_MPIN = isIndia
  ? ''
  : apacConstants.MPIN_USER_CLICKED_FORGOT_MPIN;
export const MPIN_ERROR = isIndia ? '' : apacConstants.MPIN_ERROR;
export const MPIN_USER_CLICKED_INFO = isIndia
  ? ''
  : apacConstants.MPIN_USER_CLICKED_INFO;
export const MPIN_ATTEMPT_EXCEEDED = isIndia
  ? ''
  : apacConstants.MPIN_ATTEMPT_EXCEEDED;
export const MPIN_CREATED = isIndia ? '' : apacConstants.MPIN_CREATED;
export const MPIN_INCORRECT_ENTRY = isIndia
  ? ''
  : apacConstants.MPIN_INCORRECT_ENTRY;

// Booking Tool Event
export const CLICKED_BOOKING_TOOL_ = isIndia
  ? ''
  : apacConstants.CLICKED_BOOKING_TOOL_;
export const BOOKING_TOOL_INFORMATION_PAGE = isIndia
  ? ''
  : apacConstants.BOOKING_TOOL_INFORMATION_PAGE;
export const BOOKING_TOOL_REQUEST_NOW = isIndia
  ? ''
  : apacConstants.BOOKING_TOOL_REQUEST_NOW;
export const BOOKING_TOOL_CALL_SUPPORT_INFO = isIndia
  ? ''
  : apacConstants.BOOKING_TOOL_CALL_SUPPORT_INFO;
export const BOOKING_TOOL_WHATSAPP_INFO = isIndia
  ? ''
  : apacConstants.BOOKING_TOOL_WHATSAPP_INFO;
export const BOOKING_TOOL_VISITED_BOOKING = isIndia
  ? ''
  : apacConstants.BOOKING_TOOL_VISITED_BOOKING;
export const NOTIFICATION_BELL_CLICKED = isIndia
  ? ''
  : apacConstants.NOTIFICATION_BELL_CLICKED;
export const NOTIFICATION_VIEWED = isIndia
  ? ''
  : apacConstants.NOTIFICATION_VIEWED;
export const NOTIFICATION_UNREAD = isIndia
  ? ''
  : apacConstants.NOTIFICATION_UNREAD;
export const MARK_AS_READ_INITIATED = isIndia
  ? ''
  : apacConstants.MARK_AS_READ_INITIATED;
export const MARK_AS_READ_COMPLETE = isIndia
  ? ''
  : apacConstants.MARK_AS_READ_COMPLETE;
export const DELETE_INITIATED = isIndia ? '' : apacConstants.DELETE_INITIATED;
export const DELETE_CONFIRMATION_VIEWED = isIndia
  ? ''
  : apacConstants.DELETE_CONFIRMATION_VIEWED;
export const DELETE_CONFIRMED = isIndia ? '' : apacConstants.DELETE_CONFIRMED;
export const DELETE_DISMISSED = isIndia ? '' : apacConstants.DELETE_DISMISSED;
export const DELETE_CANCELLED = isIndia ? '' : apacConstants.DELETE_CANCELLED;
export const NOTIFICATION_LINK_CLICKED = isIndia
  ? ''
  : apacConstants.NOTIFICATION_LINK_CLICKED;
export const NOTIFICATION_READ = isIndia ? '' : apacConstants.NOTIFICATION_READ;
export const PAGE_VIEWED_FROM_NOTIFICATION = isIndia
  ? ''
  : apacConstants.PAGE_VIEWED_FROM_NOTIFICATION;

// NewsFeed Events
export const USER_VIEWING_IMAGES = isIndia
  ? ''
  : apacConstants.USER_VIEWING_IMAGES;
export const USER_VISITING_YOUTUBE_LIST = isIndia
  ? ''
  : apacConstants.USER_VISITING_YOUTUBE_LIST;
export const USER_CLICK_YOUTUBE_LINK_LISTPAGE = isIndia
  ? ''
  : apacConstants.USER_CLICK_YOUTUBE_LINK_LISTPAGE;
export const USER_LANDING_YOUTUBE_CHANNEL_SCREEN = isIndia
  ? ''
  : apacConstants.USER_LANDING_YOUTUBE_CHANNEL_SCREEN;

// Centrigo Events
export const CENTRIGO_INTRODUCTION_VIEWED = isIndia
  ? ''
  : apacConstants.CENTRIGO_INTRODUCTION_VIEWED;
export const CENTRIGO_FLASH_SCREEN_INITIATED = isIndia
  ? ''
  : apacConstants.CENTRIGO_FLASH_SCREEN_INITIATED;
export const CENTRIGO_WELCOME_SCREEN_VIEWED = isIndia
  ? ''
  : apacConstants.CENTRIGO_WELCOME_SCREEN_VIEWED;
export const CENTRIGO_EXPLORE_CENTRIGO_SELECTED = isIndia
  ? ''
  : apacConstants.CENTRIGO_EXPLORE_CENTRIGO_SELECTED;
export const CENTRIGO_CENTRIGO_LOGO_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_CENTRIGO_LOGO_CLICKED;
export const CENTRIGO_CROPWISE_LOGO_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_CROPWISE_LOGO_CLICKED;
export const CENTRIGO_SPLASH_SCREEN_INITIATED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SPLASH_SCREEN_INITIATED;
export const CENTRIGO_HOME_PAGE_LANDED = isIndia
  ? ''
  : apacConstants.CENTRIGO_HOME_PAGE_LANDED;
export const CENTRIGO_CENTER_DEATILS_VIEWED = isIndia
  ? ''
  : apacConstants.CENTRIGO_CENTER_DEATILS_VIEWED;
export const CENTRIGO_CENTER_CALL_INITIATED = isIndia
  ? ''
  : apacConstants.CENTRIGO_CENTER_CALL_INITIATED;
export const CENTRIGO_CENTER_SHARE_INITIATED = isIndia
  ? ''
  : apacConstants.CENTRIGO_CENTER_SHARE_INITIATED;
export const CENTRIGO_CENTER_DETAILS_EXIT = isIndia
  ? ''
  : apacConstants.CENTRIGO_CENTER_DETAILS_EXIT;
export const CENTRIGO_NEWS_FEED_SIDE_SCROLL_INTERACTION = isIndia
  ? ''
  : apacConstants.CENTRIGO_NEWS_FEED_SIDE_SCROLL_INTERACTION;
export const CENTRIGO_PROMOTIONAL_IMAGE_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_PROMOTIONAL_IMAGE_CLICKED;
export const CENTRIGO_PROMOTIONAL_IMAGE_BACK_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_PROMOTIONAL_IMAGE_BACK_CLICKED;
export const CENTRIGO_ONGOING_SERVICES_VIEWED = isIndia
  ? ''
  : apacConstants.CENTRIGO_ONGOING_SERVICES_VIEWED;
export const CENTRIGO_PROMOTION_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_PROMOTION_CLICKED;
export const CENTRIGO_PROMOTION_BACK_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_PROMOTION_BACK_CLICKED;
export const CENTRIGO_VIDEO_PLAY_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_VIDEO_PLAY_CLICKED;
export const CENTRIGO_NEWSFEED_LINK_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_NEWSFEED_LINK_CLICKED;
export const CENTRIGO_SERVICE_REQUEST_INITIATED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICE_REQUEST_INITIATED;
export const CENTRIGO_SERVICE_REQUEST_SUBMITTED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICE_REQUEST_SUBMITTED;
export const CENTRIGO_REQUEST_SUBMITTED_SUCCESSFULLY_FLASH_SCREEN_VIEWED =
  isIndia
    ? ''
    : apacConstants.CENTRIGO_REQUEST_SUBMITTED_SUCCESSFULLY_FLASH_SCREEN_VIEWED;
export const CENTRIGO_REDIRECT_TO_ONGOING_SERVICES = isIndia
  ? ''
  : apacConstants.CENTRIGO_REDIRECT_TO_ONGOING_SERVICES;
export const CENTRIGO_ONGOING_SERVICE_DETAILS_PAGE_LOADED = isIndia
  ? ''
  : apacConstants.CENTRIGO_ONGOING_SERVICE_DETAILS_PAGE_LOADED;
export const CENTRIGO_ONGOING_SERVICE_DETAILS_VIEWED = isIndia
  ? ''
  : apacConstants.CENTRIGO_ONGOING_SERVICE_DETAILS_VIEWED;
export const CENTRIGO_ONGOING_SERVICE_SUPPORT_CALL_ICON_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_ONGOING_SERVICE_SUPPORT_CALL_ICON_CLICKED;
export const CENTRIGO_ONGOING_SERVICE_PAGE_EXIT = isIndia
  ? ''
  : apacConstants.CENTRIGO_ONGOING_SERVICE_PAGE_EXIT;
export const CENTRIGO_SERVICE_HISTORY_PAGE_LOADED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICE_HISTORY_PAGE_LOADED;
export const CENTRIGO_SERVICE_HISTORY_PAGE_EXIT = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICE_HISTORY_PAGE_EXIT;
export const CENTRIGO_HOME_PAGE_LOADED = isIndia
  ? ''
  : apacConstants.CENTRIGO_HOME_PAGE_LOADED;
export const CENTRIGO_BACK_BUTTON_CLICKED_SERVICE_REQUEST_SUBMISSION = isIndia
  ? ''
  : apacConstants.CENTRIGO_BACK_BUTTON_CLICKED_SERVICE_REQUEST_SUBMISSION;
export const CENTRIGO_ONGOING_SERVICES_PAGE_LOADED = isIndia
  ? ''
  : apacConstants.CENTRIGO_ONGOING_SERVICES_PAGE_LOADED;
export const CENTRIGO_AGRI_LOAN_PAGE_VIEWED = isIndia
  ? ''
  : apacConstants.CENTRIGO_AGRI_LOAN_PAGE_VIEWED;
export const CENTRIGO_AGRI_LOAN_SUPPORT_CALL_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_AGRI_LOAN_SUPPORT_CALL_CLICKED;
export const CENTRIGO_REQUEST_SUBMITTED_SUCCESSFULLY_SCREEN_VIEWED = isIndia
  ? ''
  : apacConstants.CENTRIGO_REQUEST_SUBMITTED_SUCCESSFULLY_SCREEN_VIEWED;
export const CENTRIGO_REQUEST_SUBMITTED_FAILED_SCREEN_VIEWED = isIndia
  ? ''
  : apacConstants.CENTRIGO_REQUEST_SUBMITTED_FAILED_SCREEN_VIEWED;
export const CENTRIGO_SERVICE_REQUEST_BACK_BUTTON_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICE_REQUEST_BACK_BUTTON_CLICKED;
export const CENTRIGO_SERVICE_DETAILS_PAGE_VIEWED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICE_DETAILS_PAGE_VIEWED;
export const CENTRIGO_SERVICE_DETAILS_SUPPORT_CALL_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICE_DETAILS_SUPPORT_CALL_CLICKED;
export const CENTRIGO_SERVICE_DETAILS_PAGE_EXIT = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICE_DETAILS_PAGE_EXIT;

export const CENTRIGO_SERVICE_INFO_PAGE_VIEWED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICE_INFO_PAGE_VIEWED;
export const CENTRIGO_SERVICE_INFO_SUPPORT_CALL_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICE_INFO_SUPPORT_CALL_CLICKED;

export const CENTRIGO_FEATURE_CLICKED = isIndia
  ? ''
  : apacConstants.CENTRIGO_FEATURE_CLICKED;
export const CENTRIGO_FEATURE_EXIT = isIndia
  ? ''
  : apacConstants.CENTRIGO_FEATURE_EXIT;
export const CENTRIGO_ONGOING_SERVICES_VISITED = isIndia
  ? ''
  : apacConstants.CENTRIGO_ONGOING_SERVICES_VISITED;
export const CENTRIGO_ONGOING_SERVICES_CROP_SELECTED = isIndia
  ? ''
  : apacConstants.CENTRIGO_ONGOING_SERVICES_CROP_SELECTED;
export const CENTRIGO_ONGOING_SERVICES_FILTERS_APPLIED = isIndia
  ? ''
  : apacConstants.CENTRIGO_ONGOING_SERVICES_FILTERS_APPLIED;
export const CENTRIGO_SERVICES_HISTORY_VISITED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICES_HISTORY_VISITED;
export const CENTRIGO_SERVICES_HISTORY_CROP_SELECTED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICES_HISTORY_CROP_SELECTED;
export const CENTRIGO_SERVICES_HISTORY_FILTERS_APPLIED = isIndia
  ? ''
  : apacConstants.CENTRIGO_SERVICES_HISTORY_FILTERS_APPLIED;
// Centrigo Events End

export const USER_OTP_VERIFIED = isIndia ? '' : apacConstants.USER_OTP_VERIFIED;

// New Weather Amplitude Events
export const WEATHER_PAGE_VIEWED = isIndia
  ? ''
  : apacConstants.WEATHER_PAGE_VIEWED;
export const CHART_INTERVAL_CLICKED = isIndia
  ? ''
  : apacConstants.CHART_INTERVAL_CLICKED;
export const COLOUR_ZONE_CLICKED = isIndia
  ? ''
  : apacConstants.COLOUR_ZONE_CLICKED;
export const SCROLL_DOWN = isIndia ? '' : apacConstants.SCROLL_DOWN;
export const DAY_SELECTED = isIndia ? '' : apacConstants.DAY_SELECTED;
export const WEATHER_7_DAY_FORECAST_VIEWED = isIndia
  ? ''
  : apacConstants.WEATHER_7_DAY_FORECAST_VIEWED;
export const WEATHER_7_DAY_FORECAST_CARD_CLICKED = isIndia
  ? ''
  : apacConstants.WEATHER_7_DAY_FORECAST_CARD_CLICKED;
export const WEATHER_7_DAY_FORECAST_SPRAY_GUIDE_CLICKED = isIndia
  ? ''
  : apacConstants.WEATHER_7_DAY_FORECAST_SPRAY_GUIDE_CLICKED;
export const WEATHER_TEMP_VIEW_CHART = isIndia
  ? ''
  : apacConstants.WEATHER_TEMP_VIEW_CHART;
export const WEATHER_TEMP_TOGGLE_BUTTON_CLICKED = isIndia
  ? ''
  : apacConstants.WEATHER_TEMP_TOGGLE_BUTTON_CLICKED;
export const WEATHER_TEMP_DATA_POINT_CLICKED = isIndia
  ? ''
  : apacConstants.WEATHER_TEMP_DATA_POINT_CLICKED;
export const WEATHER_TEMP_SCROLL_DATE = isIndia
  ? ''
  : apacConstants.WEATHER_TEMP_SCROLL_DATE;
export const WEATHER_PRECIPITATION_TOGGLE_BUTTON_CLICKED = isIndia
  ? ''
  : apacConstants.WEATHER_PRECIPITATION_TOGGLE_BUTTON_CLICKED;
export const WEATHER_PRECIPITATION_DATA_POINT_CLICKED = isIndia
  ? ''
  : apacConstants.WEATHER_PRECIPITATION_DATA_POINT_CLICKED;

export const WEATHER_PRECIPITATION_SCROLL_DATE = isIndia
  ? ''
  : apacConstants.WEATHER_PRECIPITATION_SCROLL_DATE;
export const WEATHER_WIND_VIEW_CHART = isIndia
  ? ''
  : apacConstants.WEATHER_WIND_VIEW_CHART;
export const WEATHER_WIND_TOGGLE_BUTTON_CLICKED = isIndia
  ? ''
  : apacConstants.WEATHER_WIND_TOGGLE_BUTTON_CLICKED;
export const WEATHER_WIND_DATA_POINT_CLICKED = isIndia
  ? ''
  : apacConstants.WEATHER_WIND_DATA_POINT_CLICKED;
export const WEATHER_WIND_SCROLL_DATE = isIndia
  ? ''
  : apacConstants.WEATHER_WIND_SCROLL_DATE;
export const WEATHER_HUMIDITY_VIEW_CHART = isIndia
  ? ''
  : apacConstants.WEATHER_HUMIDITY_VIEW_CHART;
export const WEATHER_HUMIDITY_TOGGLE_BUTTON_CLICKED = isIndia
  ? ''
  : apacConstants.WEATHER_HUMIDITY_TOGGLE_BUTTON_CLICKED;
export const WEATHER_HUMIDITY_DATA_POINT_CLICKED = isIndia
  ? ''
  : apacConstants.WEATHER_HUMIDITY_DATA_POINT_CLICKED;
export const WEATHER_HUMIDITY_SCROLL_DATE = isIndia
  ? ''
  : apacConstants.WEATHER_HUMIDITY_SCROLL_DATE;

// New Query Module Amplitude Events
export const QUERY_MODULE_NEW_QUERY = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_NEW_QUERY;
export const QUERY_MODULE_CROP_SELECTED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_CROP_SELECTED;
export const QUERY_MODULE_CATEGORY_SELECTED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_CATEGORY_SELECTED;
export const QUERY_MODULE_QUERY_MESSAGE_WRITTEN = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_QUERY_MESSAGE_WRITTEN;
export const QUERY_MODULE_FILE_UPLOADED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_FILE_UPLOADED;
export const QUERY_MODULE_FILE_UPLOAD_FAILED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_FILE_UPLOAD_FAILED;
export const QUERY_MODULE_IMAGE_VIEWED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_IMAGE_VIEWED;
export const QUERY_MODULE_VOICE_MESSAGE_RECORDED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_VOICE_MESSAGE_RECORDED;
export const QUERY_MODULE_VOICE_MESSAGE_RECORD_FAILED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_VOICE_MESSAGE_RECORD_FAILED;
export const QUERY_MODULE_VOICE_MESSAGE_PLAYED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_VOICE_MESSAGE_PLAYED;
export const QUERY_MODULE_QUERY_CANCELLED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_QUERY_CANCELLED;
export const QUERY_SENT = isIndia ? '' : apacConstants.QUERY_SENT;
export const QUERY_MODULE_RESPONSE_VIEWED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_RESPONSE_VIEWED;
export const QUERY_MODULE_ISSUE_RESOLVED_CLICKED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_ISSUE_RESOLVED_CLICKED;
export const QUERY_MODULE_STARS_ADDED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_STARS_ADDED;
export const QUERY_MODULE_QUERY_RESPONSE_CALL_ICON_CLICKED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_QUERY_RESPONSE_CALL_ICON_CLICKED;

export const QUERY_MODULE_QUERY_VIEWED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_QUERY_VIEWED;

export const QUERY_MODULE_DELETE_INITIATED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_DELETE_INITIATED;
export const QUERY_MODULE_DELETE_CONFIRMATION = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_DELETE_CONFIRMATION;
export const QUERY_MODULE_DELETE_CONFIRMED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_DELETE_CONFIRMED;
export const QUERY_MODULE_DELETE_DISMISSED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_DELETE_DISMISSED;
export const QUERY_MODULE_DELETE_CANCELLED = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_DELETE_CANCELLED;
export const QUERY_MODULE_DELETE_SUCCESS = isIndia
  ? ''
  : apacConstants.QUERY_MODULE_DELETE_SUCCESS;

// Terms and conditions event
export const TERMS_CHECKBOX_CLICKED = isIndia
  ? ''
  : apacConstants.TERMS_CHECKBOX_CLICKED;
export const TERMS_ACCEPT_CLICKED = isIndia
  ? ''
  : apacConstants.TERMS_ACCEPT_CLICKED;
export const TERMS_DOWNLOAD_CLICKED = isIndia
  ? ''
  : apacConstants.TERMS_DOWNLOAD_CLICKED;
export const PRIVACY_POLICY_DOWNLOAD_CLICKED = isIndia
  ? ''
  : apacConstants.PRIVACY_POLICY_DOWNLOAD_CLICKED;

// Farm area events
export const FARM_AREA_PERIMETER_WALKED = isIndia
  ? ''
  : apacConstants.FARM_AREA_PERIMETER_WALKED;
export const FARM_AREA_NAME_ENTERED = isIndia
  ? ''
  : apacConstants.FARM_AREA_NAME_ENTERED;
export const FARM_AREA_SAVE_BUTTON_CLICKED = isIndia
  ? ''
  : apacConstants.FARM_AREA_SAVE_BUTTON_CLICKED;
export const FARM_AREA_ZERO_AREA_ALERT_SHOWN = isIndia
  ? ''
  : apacConstants.FARM_AREA_ZERO_AREA_ALERT_SHOWN;
export const FARM_AREA_ZERO_AREA_OK_CLICKED = isIndia
  ? ''
  : apacConstants.FARM_AREA_ZERO_AREA_OK_CLICKED;

// My crop events

export const CROP_LIST_ICON_CLICKED = isIndia
  ? ''
  : apacConstants.CROP_LIST_ICON_CLICKED;
export const CROP_SEARCH_INITIATED = isIndia
  ? ''
  : apacConstants.CROP_SEARCH_INITIATED;
export const CROP_SELECTED = isIndia ? '' : apacConstants.CROP_SELECTED;
export const CROP_DESELECTED = isIndia ? '' : apacConstants.CROP_DESELECTED;
export const CROP_DOWNLOAD_INITIATED = isIndia
  ? ''
  : apacConstants.CROP_DOWNLOAD_INITIATED;
export const CROP_DOWNLOAD_COMPLETE = isIndia
  ? ''
  : apacConstants.CROP_DOWNLOAD_COMPLETE;
export const CROP_DOWNLOAD_FAILED = isIndia
  ? ''
  : apacConstants.CROP_DOWNLOAD_FAILED;
export const CROP_PRODUCT_VIEWED = isIndia
  ? ''
  : apacConstants.CROP_PRODUCT_VIEWED;
export const CROP_FAVOURITE_BUTTON_CLICKED = isIndia
  ? ''
  : apacConstants.CROP_FAVOURITE_BUTTON_CLICKED;
export const CROP_FAVOURITE_BUTTON_UNCLICKED = isIndia
  ? ''
  : apacConstants.CROP_FAVOURITE_BUTTON_UNCLICKED;

// News Feed Events

export const NEWS_FEED_VIDEO_CLICKED = isIndia
  ? ''
  : apacConstants.NEWS_FEED_VIDEO_CLICKED;
export const NEWS_FEED_VIDEO_STARTED = isIndia
  ? ''
  : apacConstants.NEWS_FEED_VIDEO_STARTED;
export const NEWS_FEED_VIDEO_WATCHED = isIndia
  ? ''
  : apacConstants.NEWS_FEED_VIDEO_WATCHED;

// Setup account

export const SETUP_ACCOUNT_CALL = isIndia
  ? ''
  : apacConstants.SETUP_ACCOUNT_CALL;
export const SETUP_ACCOUNT_CHAT = isIndia
  ? ''
  : apacConstants.SETUP_ACCOUNT_CHAT;
// marketin compaign
export const MARKETING_COMPAIGN = isIndia
  ? ''
  : apacConstants.MARKETING_COMPAIGN;
export const DEEP_LINK_EVENT = isIndia ? '' : apacConstants.DEEP_LINK_EVENT;

// inapp event for testing
export const CURRENT_USER_LANGUAGE = isIndia
  ? ''
  : apacConstants.CURRENT_USER_LANGUAGE;
// Age Range
export const AGE_RANGE_APPEARED = isIndia
  ? ''
  : apacConstants.AGE_RANGE_APPEARED;
export const AGE_RANGE_CLOSED = isIndia ? '' : apacConstants.AGE_RANGE_CLOSED;
export const AGE_RANGE_OKAY_CLICK = isIndia
  ? ''
  : apacConstants.AGE_RANGE_OKAY_CLICK;

// Missing Event
export const GET_APPFEEDBACK_ERROR = isIndia
  ? ''
  : apacConstants.GET_APPFEEDBACK_ERROR;
export const INTRODUCTION_SCREEN_SKIPPED = isIndia
  ? ''
  : apacConstants.INTRODUCTION_SCREEN_SKIPPED;

// NEW LOLLYPOP EVENTS BEGINS
export const DASHBOARD_CONFIG_ERROR = isIndia
  ? indiaConstants.DASHBOARD_CONFIG_ERROR
  : apacConstants.DASHBOARD_CONFIG_ERROR;
