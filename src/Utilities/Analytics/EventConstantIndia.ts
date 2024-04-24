// App.tsx
export const APP_INITIALIZATION = 'App Initialization';

// LanguageSelection/index.tsx & Respective functionality
export const LANGUAGE_INITIALIZATION = 'Language Screen Initiated';

// export const LANGUAGE_PHRASE_API_ERROR =
//   'Error Response on loading languages from phrase';

export const LANGUAGE_SCREEN_BUTTON_PRESS =
  'Language Screen - Language captured';

// Login/index.tsx & Respective functionality
export const LOGIN_INITIALIZATION = 'Login Screen Initiated';
export const LOGIN_SEND_OTP_BUTTON_PRESS =
  'Login screen send otp button pressed';
export const REQUEST_SEND_OTP_BUTTON_PRESS = 'Login send otp api called';

// OTP/index.tsx & Respective functionality
export const OTP_VERIFICATION_INITIALIZATION = 'OTP Screen Initiated';
export const OTP_VERIFICATION_EXISTING_USER =
  'OTP Verification for existing user';
export const OTP_VERIFICATION_NEW_USER = 'OTP Verification for New user';
export const OTP_CONTINUE_BUTTON_PRESS =
  'OTP Verification continue button pressed';
export const OTP_RESEND_LINK_PRESS = 'OTP resend link pressed';
export const OTP_HANDLE_TERMS_CONDITIONS =
  'OTP handle terms ans condition conditions model';

// UserProfile/index.tsx & Respective functionality
export const USER_PROFILE_INITIALIZATION = 'User Profile Screen Initiated';
export const USER_PROFILE_CURRENT_LOCATION_INITIALIZATION =
  'User Profile get curent location initiated';
export const USER_STATE_UPDATED_SUCCESSFULLY =
  'User state updated successfully';
export const USER_DISTRICT_UPDATED_SUCCESSFULLY =
  'User district updated successfully';
export const USER_TALUKA_UPDATED_SUCCESSFULLY =
  'User taluka updated successfully';

// Dashboard/index.tsx
export const DASHBOARD_SCREEN = 'On Dashboard screen Initialization';

// PrivacyPolicy/index.tsx
export const PRIVACY_POLICY_SCREEN = 'Privacy Policy Screen';
export const PRIVACY_POLICY_BACK = 'Privacy Policy screen - Back button press';
export const PRIVACY_POLICY_ACCEPT =
  'Privacy Policy screen - Accept button press';
export const PRIVACY_POLICY_SERVICE_ERROR =
  'Privacy Policy screen - API response error';

// Home//
export const USER_LOGGED_SUCCESSFULL = 'User logged in successfully';

///
export const USER_VISITING_HYBRID_PRODUCTS = 'User visited the hybird products';

// Home/CropProtectionList/index.tsx//
export const USER_VISITING_CP_PRODUCTS = 'User visited the cp products';

// Home/HybridFilter/index.tsx//
export const USER_VISITING_HYBIRD_RECOMMENDER =
  'User visited the hybird recommender';

// Home/CropProtectionRecommender/Index.tsx
export const USER_VISITING_CP_RECOMMENDER = 'User visited the cp recommender';

// Home/CropProtectionRecommender/Index.tsx
export const USER_VISITING_DIFFERENT_CROPS = 'User visiting different crops';

// Home/Retailer/SGNearMe.tsx
export const USER_VISITING_RETAILER_NURSERY =
  'User visiting retailer and nursery';

// Cards/FavoriteListCard.tsx
export const USER_VISITING_FAVORITE = 'User visiting favourite';

// src/Components/WeatherCard/WeatherCard.tsx
export const USER_VISITING_WEATHER_CARD = 'User visiting weather card';

// Home/Dashboard/index.tsx
export const USER_VISITING_ONLINESESSION_VIDEO =
  'User visiting online session video';

// Home/HybridProductDetails/index.tsx
export const USER_VISITING_AGRONOMY_PRATICES =
  'User visiting agronomy pratices';

// Home/CropProtectionList/GrowerTestimonials.tsx
export const USER_VISITING_GROWER_TESTIMONIALS =
  'User visiting GrowerTestimonials';

export const USER_VISITING_THREAT_ANALYSIS = 'User visiting Threat Analysis';

// UserProfile/index.tsx
export const PROFILE_PAGE_EVENT = 'Profile Page';

// RequestService.ts
export const GENERIC_SERVICE_CALL_REQUEST =
  'Request Service - Generic API Call request';
export const GENERIC_SERVICE_CALL_RESPONSE =
  'Request Service - Response on successful Generic API Call';
export const GENERIC_SERVICE_CALL_ERROR_RESPONSE =
  'Request Service - Error response on unsuccessful Generic API Call';

// AuthService.ts
export const REQUEST_UPDATE_USER_PROFILE_API =
  'Auth Service - Request API call to update the user profile';
export const RESPONSE_UPDATE_USER_PROFILE_API =
  'Auth Service - Response on successful profile update';
export const ERROR_RESPONSE_UPDATE_USER_PROFILE_API =
  'Auth Service - Error Response on unsuccessful profile update';
export const REQUEST_SEND_OTP_API =
  'Auth Service - Request API call to send OTP';
export const RESPONSE_SEND_OTP_API =
  'Auth Service - Response on successful OTP send';
export const ERROR_RESPONSE_SEND_OTP_API =
  'Auth Service - Error Response on unsuccessful OTP send';
export const REQUEST_GET_USER_PROFILE_API =
  'Auth Service - Request API call to get the user profile';
export const RESPONSE_GET_USER_PROFILE_API =
  'Auth Service - Response on successful profile capture';
export const ERROR_RESPONSE_GET_USER_PROFILE_API =
  'Auth Service - Error Response on unsuccessful profile capture';
export const USER_REGISTRATION = 'Registration - User sign up successful';

// OTPService.ts
export const REQUEST_OTP_VERIFY =
  'OTP Service - Request API call to verify OTP';
export const RESPONSE_OTP_VERIFY =
  'OTP Service - Response on successful API call to verify OTP';
export const ERROR_RESPONSE_OTP_VERIFY =
  'OTP Service - Error Response on unsuccessful API call to verify OTP';

// LanguageService.ts
export const LANGUAGE_GET_LANGUAGE_LIST_REQUEST =
  'Language Service - Request API call for getting the languages';

export const LANGUAGE_GET_LANGUAGE_LIST_ERROR_RESPONSE =
  'Language Service - Error Response on sunuccessful API call for getting the languages';

// PlacesService.ts

export const REQUEST_PLACE_DETAILS =
  'Places Service - Request API call for Place details';
export const RESPONSE_PLACE_DETAILS =
  'Places Service - Response on successful API call for Place details';
export const ERROR_RESPONSE_PLACE_DETAILS =
  'Places Service - Error response on unsuccessful API call for Place details';
export const REQUEST_GEOCODE = 'Places Service - Request API call for Geocode';
export const RESPONSE_GEOCODE =
  'Places Service - Response on successful API call for Geocode';
export const ERROR_RESPONSE_GEOCODE =
  'Places Service - Error response on unsuccessful API call for Geocode';
export const STATE_LIST_REQUEST =
  'Places Service - Response on successful API call for State data';
export const DISTRICT_LIST_REQUEST =
  'Places Service - Response on successful API call for district data';
export const TALUKA_LIST_REQUEST =
  'Places Service - Response on successful API call for Taluka data';

// CropService.ts

export const CROP_SERVICE_GET_SEED_CROP_REQUEST =
  'Crop Service - Request Get Seeds From Crop';
export const CROP_SERVICE_GET_SEED_CROP_RESPONSE =
  'Crop Service - Response Get Seeds From Crop';
export const CROP_SERVICE_GET_SEED_CROP_ERROR_RESPONSE =
  'Crop Service - Response error in Get Seeds From Crop';

export const CROP_SERVICE_GET_FILTERS_CROP_REQUEST =
  'Crop Service - Request Get Filters From Crop';
export const CROP_SERVICE_GET_FILTERS_CROP_RESPONSE =
  'Crop Service - Response Get Filters From Crop';
export const CROP_SERVICE_GET_FILTERS_CROP_ERROR_RESPONSE =
  'Crop Service - Response error in Get Filters From Crop';

export const CROP_SERVICE_GET_DOWNLOAD_CROP_IMAGES_REQUEST =
  'Crop Service - Request download crop images';
export const CROP_SERVICE_GET_DOWNLOAD_CROP_IMAGES_RESPONSE =
  'Crop Service - Response of download crop images';
export const CROP_SERVICE_GET_DOWNLOAD_CROP_IMAGES_ERROR_RESPONSE =
  'Crop Service - Error Response of download crop images';

export const CROP_ENROLLMENT_SAVE = 'Crop Service - Post Enrolment';
export const CROP_ENROLLMENT_SAVE_ERROR_RESPONSE =
  'Crop Service - Error in Posting Enrolment';

export const APPLY_RECOMMENDATION_SUCCESS =
  'Crop Enrollment - Apply recommendation success';
export const APPLY_RECOMMENDATION_ERROR =
  'Crop Enrollment - Apply recommendation error';

// PrivacyPolicyService.ts
export const REQUEST_PRIVACY_POLICY =
  'Privacy Policy Service - Request  API call to get the terms and conditions for the user';
export const RESPONSE_PRIVACY_POLICY =
  'Privacy Policy Service - Response on successful API call to get the terms and conditions for the user';
export const ERROR_RESPONSE_PRIVACY_POLICY =
  'Privacy Policy Service - Error Response on unsuccessful API call to get the terms and conditions for the user';
export const REQUEST_SAVE_PRIVACY_POLICY_CONSENT =
  'Privacy Policy Service - Request API call to save the consents of terms and conditions for the user';
export const RESPONSE_SAVE_PRIVACY_POLICY_CONSENT =
  'Privacy Policy Service - Response on successful API call to save the consents of terms and conditions for the user';
export const ERROR_RESPONSE_SAVE_PRIVACY_POLICY_CONSENT =
  'Privacy Policy Service - Error Response on unsuccessful API call to save the consents of terms and conditions for the user';

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
export const LOCATION_MANAGER_CURRENT_LOCATION_DATA =
  'Location manager- Get current location data of user';
export const LOCATION_MANAGER_GET_LOCATION =
  'Location manager - Get current location';
export const LOCATION_MANAGER_WATCH_LOCATION =
  'Location manager - Watch location';
export const LOCATION_MANAGER_STOP_WATCHER = 'Location manager - Stop watcher';
export const LOCATION_MANAGER_REMOVE_WATCHER =
  'Location manager - Remove watcher';
export const LOCATION_MANAGER_REMOVE_SETTING_LISTENER =
  'Location manager - Remove setting listener';
export const LOCATION_MANAGER_CHECK_LOCATION_ENABLED =
  'Location manager - Check location is enabled or not';
export const LOCATION_MANAGER_CHECK_LOCATION_PERMISSIONS =
  'Location manager - Check Location permissions';

// Retailer Nursery screen
export const RETAILER_NURSERY = 'On Retailer & Nursery Screen';

// Crop Verities List View
export const HYBRID_DATA_INITIALIZATION = 'Crop varities list screen initiated';
export const SAVED_CROP_DATA =
  'Saved crop data on crop varities list view screen';

// Mandi Screen
export const REQUEST_MANDI_LIST = 'Request Mandi List for home/mandi screen';
export const RESPONSE_MANDI_LIST =
  'Response of Mandi List for home/mandi screen';
export const ERROR_MANDI_LIST = 'Error of Mandi List for home/mandi screen';

export const REQUEST_MANDI_COMMODITIES =
  'Request Mandi COMMODITIES for home/mandi screen';
export const RESPONSE_MANDI_COMMODITIES =
  'Response of Mandi COMMODITIES for home/mandi screen';
export const ERROR_MANDI_COMMODITIES =
  'Error of Mandi COMMODITIES for home/mandi screen';

export const REQUEST_MANDI_SEARCH =
  'Request Mandi SEARCH for home/mandi screen';
export const RESPONSE_MANDI_SEARCH =
  'Response of Mandi SEARCH for home/mandi screen';
export const ERROR_MANDI_SEARCH = 'Error of Mandi SEARCH for home/mandi screen';

export const REQUEST_MANDI_VARIETIES =
  'Request Mandi VARIETIES for home/mandi screen';
export const RESPONSE_MANDI_VARIETIES =
  'Response of Mandi VARIETIES for home/mandi screen';
export const ERROR_MANDI_VARIETIES =
  'Error of Mandi VARIETIES for home/mandi screen';

export const USER_VISITING_VIEW_ALL_MANDI =
  'User visiting view all mandi screen';

export const USER_SELECTED_NEWCROP_VIEW_ALL_MANDI =
  'User selected a new crop on view all mandi screen';

export const USER_VISITING_FARM_AREA_CALCULATOR =
  'User visiting farm area calculator screen';

export const USER_VISITING_PRODUCT_SCAN = 'User visiting product scan screen';

export const USER_VISITING_ENROLL_CROP = 'User visiting enroll crop screen';

export const USER_VISITING_CROP_CALENDAR = 'User visiting crop calendar screen';

export const USER_VISITING_VIEW_ALL_REMINDER =
  'User visiting view all reminders screen';

export const USER_CLICK_APPLIED_RECOMMENDATION =
  'User clicked apply recommendation';

export const USER_PRACTICE_DURATION_ENROLL =
  'User selected calendar for a specific crop';

export const USER_EDIT_ENROLLMENT = 'User editing crop enrollment';

export const USER_CHANGED_STATE_DIS_VIEW_ALL_MANDI =
  'User changed State and Ditrict on view all mandi screen';
export const USER_SELECTED_CROP_VIEW_ALL_MANDI =
  'User selected crop on view all mandi screen';

export const USER_SIGN_OUT = 'User signed out';

export const REQUEST_FETCHAPPLICATION_STATE =
  'Jai Kisan Fetch Application Requested';
export const ERROR_FETCHAPPLICATION_STATE = 'Jai Kisan Fetch Application Error';
export const RESPONSE_FETCHAPPLICATION_STATE =
  'Jai Kisan Fetch Application Success';

export const REQUEST_SETLOANELIGIBILITY_STATE =
  'Jai Kisan Save Loan Eligibility Details';
export const ERROR_SETLOANELIGIBILITY_STATE =
  'Jai Kisan Save Loan Eligibility Details Error';
export const RESPONSE_SETLOANELIGIBILITY_STATE =
  'Jai Kisan Save Loan Eligibility Details Success';

export const REQUEST_SPRAYSERVICE_MY_ORDERS_STATE =
  'Spray Services My Orders List';
export const ERROR_SPRAYSERVICE_MY_ORDERS_STATE =
  'Spray Services My Orders List Error';
export const RESPONSE_SPRAYSERVICE_MY_ORDERS_STATE =
  'Spray Services My Orders List Success';

export const REQUEST_SPRAYSERVICE_MY_ORDERS_HISTORY_STATE =
  'Spray Services My Orders History List';
export const ERROR_SPRAYSERVICE_MY_ORDERS_HISTORY_STATE =
  'Spray Services My Orders History List Error';
export const RESPONSE_SPRAYSERVICE_MY_ORDERS_HISTORY_STATE =
  'Spray Services My Orders History List Success';

export const REQUEST_SPRAYSERVICE_ORDER_DETAILS_STATE =
  'Spray Services Get Orders Details';
export const ERROR_SPRAYSERVICE_ORDER_DETAILS_STATE =
  'Spray Services Orders Details Error';
export const RESPONSE_SPRAYSERVICE_ORDERS_DETAILS_STATE =
  'Spray Services Orders Details Success';

export const REQUEST_SPRAYSERVICE_CANCEL_ORDERS_STATE =
  'Spray Services CANCEL Orders Details';
export const ERROR_SPRAYSERVICE_CANCEL_ORDERS_STATE =
  'Spray Services CANCEL Orders Details Error';
export const RESPONSE_SPRAYSERVICE_CANCEL_ORDERS_STATE =
  'Spray Services CANCEL Orders Details Success';

export const REQUEST_SPRAYSERVICE_LIST_STATE = 'Spray Services List Details';
export const ERROR_SPRAYSERVICE_LIST_STATE = 'Spray Services List Error';
export const RESPONSE_SPRAYSERVICE_LIST_STATE = 'Spray Services List Success';

export const REQUEST_CANCEL_LIST_STATE = 'Cancel Services List Details';
export const ERROR_CANCEL_LIST_STATE = 'Cancel Services List Error';
export const RESPONSE_CANCEL_LIST_STATE = 'Cancel Services List Success';

export const REQUEST_SEARCHSERVICE_LIST_STATE = 'Search Services List Details';
export const ERROR_SEARCHSERVICE_LIST_STATE = 'Search Services List Error';
export const RESPONSE_SEARCHSERVICE_LIST_STATE = 'Search Services List Success';

export const REQUEST_ADDRESS_LIST_STATE = 'Address List Details';
export const ERROR_ADDRESS_LIST_STATE = 'Address List Error';
export const RESPONSE_ADDRESS_LIST_STATE = 'Address List Success';

export const REQUEST_BOOKING_LIST_STATE = 'Booking List Details';
export const ERROR_BOOKING_LIST_STATE = 'Booking List Error';
export const RESPONSE_BOOKING_LIST_STATE = 'Booking List Success';

export const REQUEST_SAVE_ADDRESS_STATE = 'Save Address for Sprayer Details';
export const ERROR_SAVE_ADDRESS_STATE = 'Save Address for Sprayer Error';
export const ERROR_EDIT_ADDRESS_STATE = 'Error Edit for Sprayer Error';
export const RESPONSE_SAVE_ADDRESS_STATE = 'Save Address for Sprayer Success';
export const RESPONSE_EDIT_ADDRESS_STATE = 'Edit Address for Sprayer Success';

export const REQUEST_VIEW_ORDER_STATE = 'View Order for Sprayer Details';
export const ERROR_VIEW_ORDER_STATE = 'View Order for Sprayer Error';
export const RESPONSE_VIEW_ORDER_STATE = 'View Order for Sprayer Success';

export const GET_REFERRAL_CODE_RESPONSE =
  'MDO/Referral code - Get referral code';
export const GET_REFERRAL_CODE_ERROR =
  'MDO/Referral code - Get referral code error';

export const APPLY_REFERRAL_CODE_RESPONSE =
  'MDO/Referral code - Apply referral code';
export const APPLY_REFERRAL_CODE_ERROR =
  'MDO/Referral code - Apply referral code error';

export const DRAWER_MENU_ITEM_CLICK = 'Drawer - User Clicked on menu ';
export const MY_SERVICE_ITEM_CLICK = 'Dashboard My Services - User clicked on ';
export const MY_SERVICES_ITEM_CLICK = 'My Services - User clicked on ';

export const USER_LANDED_ON_MANDI_SCREEN = 'User landed on mandi screen';
export const USER_EXITED_FROM_MANDI_SCREEN = 'User exited from mandi screen';

export const USER_VISITING_ADD_CROPS_SCREEN = 'User visiting add crops screen';
export const USER_LEAVING_ADD_CROPS_SCREEN = 'User leaving add crops screen';
export const CONFRIM_SAVE_CROPS_CLICKED =
  'Add Crops - User clicked on confirm to save crops';
export const USER_VISITING_MY_CROPS_SCREEN = 'User visiting my crops screen';
export const USER_LEAVING_MY_CROPS_SCREEN = 'User leaving my crops screen';
export const USER_VISITING_CROP_CALENDAR_SCREEN =
  'User visiting crop calendar screen';
export const USER_LEAVING_CROP_CALENDAR_SCREEN =
  'User leaving crop calendar screen';
export const USER_VISITING_ENROLL_CROP_SCREEN =
  'User visiting enroll crop screen';
export const USER_LEAVING_ENROLL_CROP_SCREEN =
  'User leaving enroll crops screen';
// Farm Loan
// Landing page
export const FARM_LOAN_LANDING_PAGE = 'Farm Loan landing page';
export const FARM_LOAN_LANDING_PAGE_REQUEST =
  'Farm Loan landing page: loan stage api call Request';
export const FARM_LOAN_LANDING_PAGE_RESPONSE =
  'Farm loan landing page: loan stage api call Success';
export const FARM_LOAN_LANDING_PAGE_ERROR =
  'Farm loan landing page: loan stage api call Failure';
export const FARM_LOAN_ELIGIBLE_BUTTON_CLICK =
  'Farm loan landing page: user clicks on Check Eligibility Button';
export const FARM_LOAN_CONSENT_DIALOG =
  'Farm loan landing page: Check Eligibility, consent dialog displayed';
export const FARM_LOAN_NAVIGATE_JAIKISSAN_WEBSITE =
  'Farm loan landing page: Check Eligibility, navigate to Jai Kissan Website';
export const FARM_LOAN_CONSENT_DIALOG_ACCEPTED =
  'Farm loan landing page: Check Eligibility, user accepted loan consent';
export const FARM_LOAN_APPLY_LOAN_BUTTON_CLICK =
  'Farm loan landing page: Apply Loan, user clicks on Apply loan Button';
export const FARM_LOAN_NAVIGATE_RETAILER_PAGE =
  'Farm loan landing page: Apply Loan, user navigate to Retailers page';
export const FARM_LOAN_TRACK_STATUS_BUTTON_CLICK =
  'Farm loan landing page: Track status, user clicks on Track status Button';
export const FARM_LOAN_NAVIGATE_TRACK_STATUS_PAGE =
  'Farm loan landing page: Track status, user navigate to Track status page';

// Retailer List page
export const RETAILERS_PAGE_REQUEST =
  'Retailar Page for loan: Retailers List page api call Request';
export const RETAILERS_PAGE_ERROR =
  'Retailar List Page for loan: Retailers page api call Error';
export const RETAILERS_PAGE_RESPONSE =
  'Retailar Page for loan: Retailers List page api call Success';
export const RETAILERS_PAGE_ITEM_CLICK_EVENT =
  'Retailar Page for loan: Retailers List item click';
export const RETAILERS_PAGE_PHONE_CLICK_EVENT =
  'Retailar Page for loan: Retailers List item phone click';
export const RETAILERS_PAGE_SHARE_CLICK_EVENT =
  'Retailar Page for loan: Retailers List item share click';
export const RETAILERS_PAGE_SEARCH_CLICK_EVENT =
  'Retailar Page for loan: Retailers List item search click';

// Retailer details page
export const RETAILER_DETAILS_PAGE_REQUEST =
  'Retailar Details Page for loan: Api Request';
export const RETAILER_DETAILS_PAGE_ERROR =
  'Retailar Details Page for loan: Api call Error';
export const RETAILER_DETAILS_PAGE_RESPONSE =
  'Retailar Details Page for loan: Api call Success';
export const RETAILER_DETAILS_PAGE_CONFIRM_LOAN =
  'Retailar Details Page for loan: Confirm Loan dialog';
export const RETAILER_DETAILS_PAGE_CONFIRM_LOAN_CLOSED =
  'Retailar Details Page for loan: Confirm Loan dialog, cancel button click ';
export const RETAILER_DETAILS_PAGE_CONFIRM_LOAN_CONFIRM =
  'Retailar Details Page for loan: Confirm Loan dialog, confirm button click ';
export const RETAILER_DETAILS_PAGE_PHONE_CLICK_EVENT =
  'Retailar Details Page for loan: Retailer phone click';
export const RETAILER_DETAILS_PAGE_SHARE_CLICK_EVENT =
  'Retailar Details Page for loan: Retailer share click';

// Apply loan success congratulation screen
export const CONGRATULATION_SCREEN =
  'Congratulation screen after successfully applied loan';
export const CONGRATULATION_SCREEN_CLOSE =
  'Congratulation screen after successfully applied loan: Congratulation screen close click';
export const CONGRATULATION_SCREEN_PHONE_CLICK =
  'Congratulation screen after successfully applied loan: Congratulation screen phone dial';
export const CONGRATULATION_SCREEN_DOCUMENT_LIST =
  'Congratulation screen after successfully applied loan: Congratulation screen document list click';
export const LOAN_DOCUMENT_LIST_REQUEST = 'Jai Kisan Fetch Documentlist';
export const LOAN_DOCUMENT_LIST_ERROR = 'Jai Kisan Fetch Documentlist Error';
export const LOAN_DOCUMENT_LIST_RESPONSE =
  'Jai Kisan Fetch Documentlist Success';

// Eligibility congratulation screen
export const ELIGIBILITY_CONGRATULATION_SCREEN =
  'Congratulation screen after successfully check farmer eligibility';
export const ELIGIBILITY_CONGRATULATION_SCREEN_CLOSE =
  'Congratulation screen after successfully check farmer eligibility: On close Click';
export const GET_LOAN_ELIGIBILITY_REQUEST =
  'Jai Kisan Fetch Loan Eligibility Details';
export const GET_LOAN_ELIGIBILITY_ERROR =
  'Jai Kisan Fetch Loan Eligibility Details Error';
export const GET_LOAN_ELIGIBILITY_RESPONSE =
  'Jai Kisan Fetch Loan Eligibility Details Success';

export const USER_CLICKED_SEED_VARIETY = 'User clicked on Seed variety';
export const USER_CLICKED_CROP_PROTECTION = 'User clicked on Crop Protection';

export const USER_CLICKED_RECOMMEND_A_VARIETY =
  'User clicked on recommend a variety';
export const USER_CLICKED_RECOMMEND_A_CROP_PROTECTION =
  'User clicked on recommend a crop protection';
export const USER_SELECTED_NEWCROP_TO_VIEW_SEED_VARIETIES =
  'User selected a new crop in seed varieties';
export const USER_CLIKED_ON_FILTER_IN_SEED_VARIETY =
  'User clicked on seed variety filter';
export const USER_CLIKED_ON_PRODUCT_IN_SEED_VARIETY =
  'User clicked on seed variety product';
export const USER_CLICKED_RECOMMEND_ME = 'User clicked on recommend me';
export const USER_CLICKED_START_OVER_IN_VARIETY_RECOMMENDER =
  'User clicked on  start over in variety recommender';
export const USER_MARKED_FAVOURITE_PRODUCT =
  'User marked favourite product for';
export const USER_VISITED_KEY_FEATURES = 'User visited key features';
export const USER_SELECTED_NEWCROP_TO_VIEW_CROP_PROTECTION =
  'User selected a new crop in crop protection';
export const USER_SELECTED_NEWCROP_TO_RECOMMEND_A_PRODUCT =
  'User selected a new crop in recommender a crop protection';
export const USER_SELECTED_CROP_CHALLEGES =
  'User selected a new crop challenge for disease';
export const USER_SELECTED_CROP_STAGES = 'User selected a crop stage for';

export const TEMPERATURE_WIDGET_NEXT_AROOW_CLICK =
  'on click of temperature next arrow widget';
export const TEMPERATURE_WIDGET_PERVIOUS_AROOW_CLICK =
  'on click of temperature pervious arrow widget';
export const WEATHER_MODULE_7DAYSFORECAST_RENDER =
  'On click of the category item 7 days forecast';
export const WEATHER_MODULE_HOURLYFORECAST_RENDER =
  'On click of the category item hourly forecast';

// MDO Referal Events
export const USER_VISITED_MDO_REFERAL_PAGE = 'User Visited MDO Referal Page';
export const USER_SUBMITTED_REFERAL_CODE = 'User submitted Referal code';

// SPray Services
export const SPRAY_LANDING_PAGE = 'Spray Services: Landing page';
export const SPRAY_BOOM_SERVICE_CHECK_AVAILABILITY_REQUEST =
  'Spray Services: Check Boom spray api call request';
export const SPRAY_BOOM_SERVICE_CHECK_AVAILABILITY_SUCCESS =
  'Spray Services: Check Boom spray api call success';
export const SPRAY_BOOM_SERVICE_CHECK_AVAILABILITY_ERROR =
  'Spray Services: Check Boom spray api call error';
export const SPRAY_DRONE_SERVICE_CHECK_AVAILABILITY_REQUEST =
  'Spray Services: Check Drone spray api call request';
export const SPRAY_DRONE_SERVICE_CHECK_AVAILABILITY_SUCCESS =
  'Spray Services: Check Drone spray api call success';
export const SPRAY_DRONE_SERVICE_CHECK_AVAILABILITY_ERROR =
  'Spray Services: Check Drone spray api call error';

export const SPRAY_SERVICE_CLICK = 'Book Service button click:';
// export const SPRAY_DRONE_BOOK_SERVICE_CLICK =
//   'Spray Services: Drone spray Book service button click';
export const SPRAY_TRACK_STATUS_CLICK =
  'Spray Services: Track status button click';

export const CHECK_SPRAY_SERVICE_AVAILABILITY =
  'Spray Services: Check availabilty button click';

export const SPRAY_ADD_ADDRESS_CLICK =
  'Book Spray Services page: Add Address click';
export const SPRAY_EDIT_ADDRESS_CLICK =
  'Book Spray Services page: Edit Address click';
export const SPRAY_DELETE_ADDRESS_CLICK =
  'Book Spray Services page: Delete Address click';
export const SPRAY_BOOK_SERVICE_BUTTON_CLICK =
  'Book Spray Services page: Book Service button click';
export const SPRAY_BOOK_SERVICE_REQUEST =
  'Book Spray Services page: Book Service Request';
export const SPRAY_BOOK_SERVICE_SUCCESS =
  'Book Spray Services page: Book Service Success';
export const SPRAY_BOOK_SERVICE_ERROR =
  'Book Spray Services page: Book Service error';
export const SPRAY_BOOKING_CONFIRMED_PAGE =
  'Booking Spray Confirmed page: Congratulation screen';
export const SPRAY_BOOKING_CONFIRMED_COPY_BOOKING_ID =
  'Booking Spray Confirmed page: Clipboard copy booking Id';
export const SPRAY_BOOKING_CONFIRMED_TRACK_STATUS_CLICK =
  'Booking Spray Confirmed page: Click on Track Status button';
export const SPRAY_BOOKING_CONFIRMED_CONTACT_PARTNER_CLICK =
  'Booking Spray Confirmed page: Click on Contact Partner button';
export const SPRAY_ADD_EDIT_ADDRESS_PAGE =
  'Spray Add address page: Add address page';
export const SPRAY_ADD_EDIT_ADDRESS_PAGE_CANCEL_CLICK =
  'Spray Add address page: Cancel button click';
export const SPRAY_ADD_EDIT_ADDRESS_PAGE_SAVE_CLICK =
  'Spray Add address page: Save button click';

export const SPRAY_MACHINE_REQUEST = 'Spray Booking: Machine list api request';
export const SPRAY_MACHINE_RESPONSE =
  'Spray Booking: Machine list api response received';
export const SPRAY_MACHINE_ERROE = 'Spray Booking: Machine list api error msg';
export const SPRAY_TRACK_STATUS_PENDING_CLICK =
  'Spray Services: Track status pending button click';
export const SPRAY_TRACK_STATUS_CONFIRMED_CLICK =
  'Spray Services: Track status confirmed button click';
export const SPRAY_TRACK_STATUS_COMPLETED_CLICK =
  'Spray Services: Track status completed button click';
export const SPRAY_TRACK_STATUS_CANCELLED_CLICK =
  'Spray Services: Track status cancelled button click';
export const SPRAY_TRACK_STATUS_VIEWDETAIL_CLICK =
  'Spray Services: Track status view detail button click';
export const SPRAY_TRACK_STATUS_CANCELBOOKING_CLICK =
  'Spray Services: Track status Cancel booking button click';
export const SPRAY_TRACK_STATUS_CONTACTPARTNER_CLICK =
  'Spray Services: Track status Contact partner button click';
export const SPRAY_TRACK_STATUS_CANCELBOOKING_CANCEL_CLICK =
  'Spray Services: Track status cancel booking cancel button click';
export const SPRAY_TRACK_STATUS_CANCELBOOKING_CONFIRM_CLICK =
  'Spray Services: Track status cancel booking confirm button click';
export const SPRAY_TRACK_STATUS_CANCELBOOKING_SUCCESS_MYORDERS_CLICK =
  'Spray Services: Track status cancel booking success myorders button click';

// Crop doctor Events
export const CROP_DOCTOR_LANDING_PAGE = 'Crop doctor: Landing page';
export const CROP_DOCTOR_HISTORY_API_REQUEST =
  'Crop doctor: History API Request';
export const CROP_DOCTOR_HISTORY_API_RESPONSE =
  'Crop doctor: History API Response received';
export const CROP_DOCTOR_HISTORY_API_ERROR = 'Crop doctor: History API Failed';
export const CROP_DOCTOR_LANDING_PAGE_TAKE_PICTURE =
  'Crop doctor: Landing Page - Take picture button click';
export const CROP_DOCTOR_HISTORY_ITEM_CLICK =
  'Crop doctor: Landing Page - History item click';
export const CROP_DOCTOR_DETAIL_PAGE = 'Crop doctor: Details page loaded';
export const CROP_DOCTOR_DETAIL_PAGE_PRODUCT_ITEM_CLICK =
  'Crop doctor: Details page - Product item click';
export const CROP_DOCTOR_DETAIL_PAGE_FEEDBACK_ALREADY_SUBMITTED =
  'Crop doctor: Details page - Feedback already submitted';
export const CROP_DOCTOR_DETAIL_PAGE_FEEDBACK_SUBMITTED =
  'Crop doctor: Details page - Feedback submit';
export const CROP_DOCTOR_DETAIL_PAGE_RATING_API_REQUEST =
  'Crop doctor: Details page - Rating API Request';
export const CROP_DOCTOR_DETAIL_PAGE_RATING_API_RESPONSE =
  'Crop doctor: Details page - Rating API Response received';
export const CROP_DOCTOR_DETAIL_PAGE_RATING_API_ERROR =
  'Crop doctor: Details page - Rating API Failed';
export const CROP_DOCTOR_SCAN_CROP_PAGE = 'Crop doctor: Scan crop page';
export const CROP_DOCTOR_SCAN_CROP_PAGE_IMAGE_API_REQUEST =
  'Crop doctor: Scan crop page- Image upload Request';
export const CROP_DOCTOR_SCAN_CROP_PAGE_IMAGE_API_RESPONSE =
  'Crop doctor: Scan crop page- Image upload Response received';
export const CROP_DOCTOR_SCAN_CROP_PAGE_IMAGE_API_ERROR =
  'Crop doctor: Scan crop page- Image upload Response error';
export const CROP_DOCTOR_SCAN_CROP_PAGE_CAMERA_UPLOAD =
  'Crop doctor: Scan crop page- Camera upload';
export const CROP_DOCTOR_SCAN_CROP_PAGE_GALLERY_UPLOAD =
  'Crop doctor: Scan crop page- gallery upload';

export const GET_DELETE_ACCOUNT_REQUEST = 'Get Delete Account Request';
export const GET_DELETE_ACCOUNT_RESPONSE = 'Get Delete Account Response';
export const GET_DELETE_ACCOUNT_ERROR_RESPONSE = 'Get Delete Account Error';

export const WHATSAPP_CONSENT_REQUEST =
  'Whatsapp Consent - Request API call for Whatsapp Consent';
export const WHATSAPP_CONSENT_RESPONSE =
  'Whatsapp Consent - Response on successful API call for Whatsapp Consent';
export const WHATSAPP_CONSENT_ERROR =
  'Whatsapp Consent - Error Response on unsuccessful API call for Whatsapp Consent';
export const WHATSAPP_CONSENT_UPDATE_REQUEST =
  'Whatsapp Consent - Request API call for Whatsapp Consent update';

export const FCE_USER_REGISTRATION = 'User Registration';

export const INTRODUCTION_SCREEN_INITIATED = 'Introduction Screen Initiated';
export const INTRODUCTION_SCREEN_GET_STARTED =
  'Introduction - Get started Clicked';

export const CP_PRODUCT_BUY_RETAILER_CLICKED =
  'CP Product - Buy From Retailer Clicked';
export const SEED_PRODUCT_BUY_RETAILER_CLICKED =
  'Seed Product - Buy From Retailer Clicked';
export const DASHBOARD_CONFIG_ERROR = 'Error - Dashboard Config List';
