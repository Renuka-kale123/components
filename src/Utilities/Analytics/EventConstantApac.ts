// App.tsx
export const APP_INITIALIZATION = 'App Initialization';

// LanguageSelection/index.tsx & Respective functionality
export const LANGUAGE_INITIALIZATION = 'Language Screen Initiated';
export const LANGUAGE_FETCH_TRANSLATION =
  'Fetch trans from Phrase API Initiated';
export const LANGUAGE_LOAD_FROM_PHRASE = 'Req API call from phrase';
export const LANGUAGE_PHRASE_API_ERROR = 'Error Response from phrase';
export const LANGUAGE_PHRASE_UPDATE_TRANSLATION =
  'Updating translations in default locale';
export const LANGUAGE_SCREEN_BUTTON_PRESS = 'Language Screen_Language captured';

// Signup/Login creen
export const LOGIN_MANUAL_MOBILE_NUMBER_TYPING =
  'User Manually Typing the Mobile Number';
export const LOGIN_MOBILE_NUMBER_AUTOMATICALLY_PICKED =
  'User Mobile Number Picked Automatically';
export const LOGIN_MOBILE_NUMBER_CHANGED = 'User Mobile Number Changed';
export const NONE_OF_THE_ABOVE_SELECTED = 'User Selected None of the above';
// Login/index.tsx & Respective functionality
export const LOGIN_INITIALIZATION = 'Login Screen Initiated';
export const LOGIN_SEND_OTP_BUTTON_PRESS =
  'Login screen send otp button pressed';

// OTP/index.tsx & Respective functionality
export const OTP_VERIFICATION_INITIALIZATION = 'OTP Screen Initiated';
export const OTP_VERIFICATION_EXISTING_USER =
  'OTP Verification for existing user';
export const OTP_VERIFICATION_NEW_USER = 'OTP Verification for New user';
export const OTP_CONTINUE_BUTTON_PRESS =
  'OTP Verification continue button press';
export const OTP_RESEND_LINK_PRESS = 'OTP resend link pressed';
export const OTP_HANDLE_TERMS_CONDITIONS = 'OTP handle TC model';
export const OTP_MANUALLY = 'OTP Typed Manually';
export const OTP_AUTO_POPULATE = 'OTP Getting Auto Populated';
export const OTP_ERROR = 'OTP Error';
export const OTP_RESEND_TIMER_STARTED = 'Resend OTP timer started';
export const OTP_INCORRECT_ENTERED = 'OTP entered incorrect';
export const USER_CLICK_CHANGE_NUMBER = 'User Clicked on change mobile number';
// UserProfile/index.tsx & Respective functionality
export const USER_PROFILE_INITIALIZATION = 'User Profile Screen Initiated';
export const USER_PROFILE_REGISTRATION_PAGE =
  'Registration User Landing On Regis Page';
export const USER_PROFILE_CURRENT_LOCATION_INITIALIZATION =
  'User Profile Curent location initiated';
export const USER_STATE_UPDATED_SUCCESSFULLY =
  'User state updated successfully';
export const USER_DISTRICT_UPDATED_SUCCESSFULLY =
  'User district updated successfully';
export const USER_TALUKA_UPDATED_SUCCESSFULLY =
  'User taluka updated successfully';

// Dashboard/index.tsx
export const DASHBOARD_SCREEN = 'On Dashboard screen Initialization';
export const DASHBOARD_CONTENT_LIST_RESPONSE_ERROR =
  'Dashboard video_API Resp Err';
export const USER_DOWNLOADING_CROPS = 'User Downloading Crops dashboard';
export const PRODUCT_SCAN_CLICK = 'User Clicking on Product Scan Icon';
// AppUpdate
export const APPUPDATE_LIST_RESPONSE_ERROR =
  'Updt List Resp Err Get List App Udate';

export const DASHBOARD_FEATURE_LIST_RESPONSE_ERROR =
  'Dashboard featuresList_API resp Err';
export const DASHBOARD_SLIDER_LIST_RESPONSE_ERROR =
  'Dashboard sliderList API Resp Err';
// PrivacyPolicy/index.tsx
export const PRIVACY_POLICY_SCREEN = 'Privacy Policy screen initiated';
export const PRIVACY_POLICY_BACK = 'Privacy Policy screen Back button press';
export const PRIVACY_POLICY_ACCEPT = 'Privacy Policy User Accepting TC';
export const PRIVACY_POLICY_SERVICE_ERROR = 'Privacy Policy_API respErr';

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

export const RETAILER_NURSERY_NO_DATA_AVAILABLE = 'Retailer_No Records Found';
// Cards/FavoriteListCard.tsx
export const USER_CLICK_ON_MY_FAVORITE = 'User Click On My Favrioutes';

export const USER_VISITING_FAVORITE = 'User Landing On My Favrioutes';
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
export const GENERIC_SERVICE_CALL_ERROR_RESPONSE =
  'Err resp unsucc Genric API Call';

// AuthService.ts
export const RESPONSE_UPDATE_USER_PROFILE_API =
  'AuthServiceResponse successful prof upd';
export const ERROR_RESPONSE_UPDATE_USER_PROFILE_API =
  'AuthServiceErrorResponseUnsuccesProfUpd';
export const ERROR_RESPONSE_SEND_OTP_API =
  'Auth Service Err Resp unsucces OTP send';
export const ERROR_RESPONSE_GET_USER_PROFILE_API =
  'Auth Service Err Resp unsucc prof capt';
export const USER_REGISTRATION = 'Registration_User sign up successful';

// OTPService.ts
export const ERROR_RESPONSE_OTP_VERIFY =
  'OTP Service Err Resp on unsucc API OTP';

// LanguageService.ts
export const LANGUAGE_GET_LANGUAGE_LIST_ERROR_RESPONSE =
  'Lang Srv Err Resp unsucc API fr gt lang';
export const LANGUAGE_SELECTED = 'User selected language';

// PlacesService.ts
export const ERROR_RESPONSE_AUTO_COMPLETE =
  'Plac Serv_Err resp unsucc API Auto comp';
export const ERROR_RESPONSE_PLACE_DETAILS =
  'Plac Serv_Err resp unsucc API Place det';
export const ERROR_RESPONSE_GEOCODE = 'Place Serv_Err resp unsuccPIfr Geocode';
export const STATE_LIST_ERROR = 'Place Serv_Err on API for State data';
export const DISTRICT_LIST_ERROR = 'Place Serv_Err on API for dist data';
export const TALUKA_LIST_ERROR = 'Place Serv_Err on API for Tal data';

// CropService.ts
export const CROP_SERVICE_GET_CROP_LIST_ERROR_RESPONSE =
  'Crop Service_Resp Err inGet Crp list';
export const CROP_SERVICE_GET_SEED_CROP_ERROR_RESPONSE =
  'Crop Service_Resp Err in Get Seeds Crop';
export const CROP_SERVICE_GET_FILTERS_CROP_ERROR_RESPONSE =
  'Crop Service_Resp ErrGet Filters Crop';
export const CROP_SERVICE_GET_DOWNLOAD_CROP_IMAGES_ERROR_RESPONSE =
  'Crop Service_Err Respdownload Crop imag';
export const CROP_ENROLLMENT_SAVE_ERROR_RESPONSE =
  'Crop Service_Err in Posting Enrolment';
export const APPLY_RECOMMENDATION_SUCCESS =
  'Crp Enrolmt_Apply Recommendation succ';
export const APPLY_RECOMMENDATION_ERROR =
  'Crp Enrolmt_Apply Recommendation Err';
export const CROP_ENROLLMENT_SUCCESSFUL = 'Crop enrolled successfully';

// PrivacyPolicyService.ts
export const ERROR_RESPONSE_PRIVACY_POLICY =
  'Priv Pol Serv_Err Resp unsucc API to ge';
export const ERROR_RESPONSE_SAVE_PRIVACY_POLICY_CONSENT =
  'Priv Pol Serv_Err Resp unsucc APIto sav';

// Setting Page
export const SETTINGS_PAGE = 'User Landing on Setting Page';
export const SETTINGS_PAGE_EDIT_CLICK = 'User Clicking On Edit';
export const USER_EDITED_INFORMATION = 'User Edited the Indormation';
export const USER_CHANGING_LANGUAGE = 'User Changing Language';
export const USER_ACCEPTING_CHANGE_LANGUAGE = 'User Accepting Change Language';
export const USER_CLICK_ON_MORE = 'User Clicking On More';
export const USER_CLICK_ON = 'User Clicking On';
export const USER_REJECTING_CHANGE_LANGUAGE = 'User Rejecting Change Language';

// Location manager
export const LOCATION_MANAGER_CURRENT_LOCATION_DATA =
  'Location manager_Get current Locatn da';
export const LOCATION_MANAGER_GET_LOCATION =
  'Location manager_Get current location';
export const LOCATION_MANAGER_WATCH_LOCATION =
  'Location manager_Watch location';
export const LOCATION_MANAGER_STOP_WATCHER = 'Location manager_Stop watcher';
export const LOCATION_MANAGER_REMOVE_WATCHER =
  'Location manager_Remove watcher';
export const LOCATION_MANAGER_REMOVE_SETTING_LISTENER =
  'Location manager_Remove setting listen';
export const LOCATION_MANAGER_CHECK_LOCATION_ENABLED =
  'Location manager_Chk LocatnEnabl or not';
export const LOCATION_MANAGER_CHECK_LOCATION_PERMISSIONS =
  'Location manager_Chk Locatn permissions';

// Retailer Nursery screen
export const RETAILER_NURSERY = 'On RetailerNursery Screen';

// Crop Verities List View
export const HYBRID_DATA_INITIALIZATION = 'Crop varities list screen initiated';
export const SAVED_CROP_DATA = 'Saved Crop data on varities view screen';
export const USER_DESELECTING_CROPS = 'User Removing Crops';
// Mandi Screen;
export const ERROR_MANDI_LIST = 'Error of Mandi List home_mandi screen';
export const ERROR_MANDI_COMMODITIES = 'Error of Mandi COMMOD home_mandi';
export const ERROR_MANDI_SEARCH = 'Error of Mandi SEARCH fr home_mandi';
export const ERROR_MANDI_VARIETIES = 'Error of Mandi VARIETIES fr home_mandi';
export const USER_VISITING_VIEW_ALL_MANDI =
  'User visiting view all mandi screen';
export const USER_SELECTED_NEWCROP_VIEW_ALL_MANDI =
  'User selected new Crp view all mandi sc';

export const USER_VISITING_FARM_AREA_CALCULATOR =
  'User visiting farm area calculator';
export const START_GEO_FENCING = 'User clicks on start geo fencing';
export const STOP_GEO_FENCING = 'User clicks on stop geo fencing';

export const USER_VISITING_PRODUCT_SCAN = 'User visiting product scan screen';

export const ENROLL_CROP_USER_VISITING_ENROLL_CROP =
  'Enroll Crop User visiting enroll Crp';

export const USER_CHANGED_STATE_DIS_VIEW_ALL_MANDI =
  'User changed State_Dist view all mand';
export const USER_SELECTED_CROP_VIEW_ALL_MANDI =
  'User selected Crp on view all mandi scr';

export const USER_SIGN_OUT = 'User signed out';
export const GET_NOTIFICATION_LIST_ERROR_RESPONSE =
  'Notificaiton List_Resp Error LtNotifitn';
export const GET_NOTIFICATION_EDIT_ERROR_RESPONSE =
  'Noti IT_Resp ErrLtNotifitn';
export const SAVE_FCM_TOKEN_ERROR_RESPONSE =
  'Save FCM Token_Resp ErrSave FCM Token';

// Find My Franchise
export const NEAR_ME_CLICK = 'User navigating to retailer and nursery';
export const VISIT_NEAR_ME = 'Near Me Maps_vist Franches and Retail';

export const TOGGLE_MAP = 'Near Me Maps_User toggled to Map view';

export const TOGGLE_LIST = 'Near Me Maps_User toggled to List view';

export const APPLY_FILTER = 'Near Me Maps_clicked on apply filter';

export const APPLY_FILTER_RETAIL = 'User clicked on apply filter from Retai';

export const FMF_DIRECTION = 'Near Me Maps clk directidetails screen';

export const FMF_SHARE = 'Near Me Maps Click on sharetails screen';

export const FMF_CALL = 'Near Me Maps Click on details screen';

export const FMF_LOCATION_DISABLED = 'Near Me Maps_User Location is disabl';

export const FMF_LOCATION_CANCEL = 'Near Me Maps_User Loca disabl_clk cance';

export const FMF_LOCATION_ENABLE = 'Near Me Maps_UserLoca disab_clk enable';
// Plantix related events

export const PLANTIX_CLICK = 'Plantix_Click on plantix Icon';
export const USER_ENTERING_PLANTIX = 'Plantix_is entering plantix scan flow';
export const PLANTIX_SCAN_ON = 'Plantix_Plantix diagnosis is going on';
export const PLANTIX_MULTI_CROPS = 'Pltx_Multi Crp idenfi under Pltx scan';
export const PLANTIX_MULTI_DIAG = 'Plantix_Multi diag idenfi fr sgle Crp';
export const PLANTIX_SINGLE_DIAG = 'Plantix_Sgle diagnos idenfi fr sgle Crp';
export const USER_ENTERING_PLANTIX_DETAILS =
  'Plantix_enterg diagnos details screen';
export const PLANTIX_DIAG_ERROR = 'Plantix_Therean Err while dog pltx scan';
export const PLANTIX_NO_SOLUTION = 'Plantix_Diag det dur scan no solutAvail';
export const USER_ENTERING_PLANTIX_HISTORY =
  'Plantix_enterg plantix htory screen';
export const USER_CALLSUPPORT_CLICK = 'Plantix_User clicked call support';
export const CALL_SUPPORT_CLICK = 'User Clicking On Call Support';
export const USER_SHARE_DIAGNOSIS_CLICK =
  'Plantix_User clicked shared diagnosis';
export const PLANTIX_RECOMMENDED_PRODUCTS = 'Plantix_Recommended products list';
export const PLANTIX_FEEDBACK_SUBMIT = 'Plantix_Feedback submited';
export const PLANTIX_INCOMPLETE_SCAN_NOT_NOW =
  'Plantix_Not now clk popup incomplete sc';
export const PLANTIX_INCOMPLETE_SCAN_CONTINUE =
  'Plantix_continue clk popup incomp scan';
export const PLANTIX_SELECT_PHOTO_FROM_GALLERY =
  'Plantix_Selecting Photo from gallery';
export const PLANTIX_CLICK_PHOTO = 'Plantix_User Clicking a photo';

export const BUY_IT_NEAREST = 'Click on buy it from nearest retailer';
export const GET_THAI_MARKETING_CONSENT_ERROR_RESPONSE =
  'Get Thai Marketing Consent Error';
export const POST_THAI_MARKETING_CONSENT_ERROR_RESPONSE =
  'POST Thai Marketing Consent Error';
export const GET_KEY_CROPS_LIST_ERROR_RESPONSE = 'Get Key Crops List Error';
export const GET_THAI_PAGES_ERROR_RESPONSE = 'Get Thai Pages Error';
export const GET_PERSONAL_DATA_ERROR_RESPONSE = 'Get Personal Data Error';
export const GET_CANCEL_MEMBERSHIP_ERROR_RESPONSE =
  'Get Cancel Membership Error';
export const GET_CONSENT_ERROR_RESPONSE = 'Get Consent Error';

export const SERVICE_CARD_CLICK = 'User visiting';
export const DASHBOARD_PAGE = 'User visits dashboard';

// E-commerce Events
export const ECOMMERCE_MY_CART = 'Ecommerce_User visiting My Cart screen';
export const ECOMMERCE_DELIVERY_ADDRESS_PAGE =
  'Ecom_visiting Delivery Address screen';
export const ECOMMERCE_CHANGE_LOCATION =
  'Ecommerce_User clicks on Change locatio';

export const ECOMMERCE_FRCNCHISE_SCREEN =
  'Ecommerce_clk Go to Franche on pop up';
export const ECOMMERCE_CATEGORY = 'Ecommerce_User visits category page';
export const ECOMMERCE_CATEGORY_SELECT = 'Ecommerce_User select an category';
export const ECOMMERCE_PRODUCT_SEARCH =
  'Ecommerce_User clicks on product search';
export const ECOMMERCE_ADD_TO_CART = 'EcommerceUser clicks on add to cart but';
export const ECOMMERCE_PRODUCT_DETAIL_PAGE =
  'Ecommerce_User clicks on product detail';
export const ECOMMERCE_VIEW_ALL = 'Ecommerce_User clicks on view all';
export const ECOMMERCE_CHECKOUT_SCREEN = 'Ecommerce_User clicks on checkout';
export const ECOMMERCE_NEW_ADDRESS = 'Ecommerce_User clicks on new address';
export const ECOMMERCE_SELECTED_ADDRESS = 'Ecommerce_User selected an address';
export const ECOMMERCE_NON_DELIVERABLE_ADD = 'Ecommerce_delivery not possible';
export const ECOMMERCE_PRODUCT_REMOVED = 'Ecommerce_User removed product';
export const ECOMMERCE_ORDER_PLACE_ERROR =
  'Ecommerce_Errors on order placement';
export const ECOMMERCE_ORDER_SUCCESS = 'Ecommerce_Successful order placement';
export const ECOMMERCE_EXISTING_ADDRESS_SELECTED =
  'Ecommerce_Existing address selected';
export const ECOMMERCE_ORDER_SUMMERY = 'Ecommerce_User clicks on order summary';
export const ECOMMERCE_ORDER_PLACED = 'Ecommerce_User has placed an order';
export const ECOMMERCE_CONTINUE_SHOPPING =
  'Ecommerce_clk ct shoppgbutt success pg';
export const ECOMMERCE_VIEW_YOUR_ORDER =
  'Ecommerce_clk View order link success';
export const ECOMMERCE_ADD_NEW_ADDRESS =
  'Ecommerce_visits to add new address pg';
export const ECOMMERCE_ORDER_HISTORY = 'Ecommerce_User visits order history pg';
export const ECOMMERCE_ONGOING_ORDERS = 'Ecommerce_visits to ongoing orders pg';
export const ECOMMERCE_MY_ORDER = 'Ecommerce_User visits to my order pg';
export const ECOMMERCE_VIEW_ORDER_DETAILS =
  'Ecommerce_vist view order details pg';
export const ECOMMERCE_FEEDBACK_RATING =
  'Ecom_User give the feedback by rating';
export const ECOMMERCE_DOWNLOAD_INVOICE =
  'Ecom_clicks on download invoice link';
export const ECOMMERCE_MY_DELIVERY_ADDRESS =
  'Ecom_clicks on My delivery address';
export const ECOMMERCE_EDIT_ADDRESS = 'Ecom_clk itddress under My del add';
export const ECOMMERCE_DELETE_ADDRESS = 'Ecom_clk Del address under My del add';
export const ECOMMERCE_SAVE_ADDRESS = 'Ecom_User clicks on save address';
export const ECOMMERCE_ERROR_STATE_LIST =
  'Ecom_Err St List expec del_add new add';
export const ECOMMERCE_ERROR_CITI_LIST =
  'Ecom_ErrCiti Li expec del_add new addre';
export const ECOMMERCE_ERROR_AREA_LIST =
  'Ecom_ErrArea Lis expec del_add new addr';
export const ECOMMERCE_ERROR_ADDRESS_LIST =
  'Ecom_ErrAdd Lt expec del_add checkout';
export const ECOMMERCE_ERROR_MERCHANT_DATA =
  'Ecom_Errmercht data from expect del scr';
export const ECOMMERCE_ERROR_CART_LIST =
  'Ecom_Err Cart shop hom_prod_cat_prodDet';
export const ECOMMERCE_ERROR_MERCHANT_CATEGORIES_DATA =
  'Ecom_ErrMercht cat dat shop homepage';
export const ECOMMERCE_ERROR_MERCHANT_PRODUCTS_DATA =
  'Ecom_Errmercht prod dat shop homepage';
export const ECOMMERCE_ERROR_MERCHANT_PRODUCT_DETAIL_DATA =
  'Ecom_Err of Merchants product detail';
export const ECOMMERCE_ERROR_UPDATE_CART_ITEM = 'Error of update cart item';
export const ECOMMERCE_ERROR_DELETE_CART_ITEM =
  'Ecommerce_Error of delte cart item';
export const ECOMMERCE_ERROR_CHECKOUT_DATA = 'Ecommerce_Error of checkout';
export const ECOMMERCE_ERROR_APPLY_VOUCHER_DATA =
  'Ecom_Err of apply voucher code';
export const ECOMMERCE_ERROR_REMOVE_VOUCHER_DATA =
  'Ecom_Err of remove voucher code';
export const ECOMMERCE_ERROR_ORDER_DETAILS_DATA =
  'Ecommerce_Error of order details';
export const ECOMMERCE_ERROR_ORDER_INVOICE_FILE =
  'Ecommerce_Error of order invoice';
export const ECOMMERCE_ERROR_ADD_TO_CART = 'Ecommerce_Error of add to cart';
export const ECOMMERCE_ERROR_ORDER_LIST = 'Ecommerce_Error of order list';
export const ECOMMERCE_ERROR_ADD_ADDRESS = 'Ecommerce_Error of add new address';
export const ECOMMERCE_ERROR_EDIT_ADDRESS = 'Ecommerce_Error of edit address';
export const ECOMMERCE_ERROR_DELETE_ADDRESS =
  'Ecommerce_Error of delete address';
export const ECOMMERCE_ERROR_DELIVERY_PRICE =
  'Ecommerce_Error of delivery price';
export const ECOMMERCE_ERROR_REPEAT_ORDER = 'Ecommerce_Error of repeat order';
export const ECOMMERCE_ERROR_DELETE_CART = 'Ecommerce_Error of delete cart';
export const ECOMMERCE_ERROR_REFRESH_CART = 'Ecommerce_Error of refresh cart';
export const ECOMMERCE_ERROR_RATING_LIST = 'Ecommerce_Error for rating list';
export const ECOMMERCE_ERROR_SAVE_RATING = 'Ecommerce_Error of save rating';
export const ECOMMERCE_CALL_RETAILER = 'Ecommerce_User calling retailer';
export const ECOMMERCE_SHOP = 'Ecommerce_User clicks on Shop';
export const ECOMMERCE_SELECT_NEW_ADDRESS =
  'Ecom_clk Sel NewAdd expect del Address';
export const ECOMMERCE_SHOP_HOMEPAGE = 'Ecommerce_User visits shop home page';
export const ECOMMERCE_PLUS_ICON = 'Ecommerce_User clicks on Plus Icon ';
export const ECOMMERCE_MINUS_ICON = 'Ecommerce_User clicks on Minus Icon';
export const ECOMMERCE_DELETE_PRODUCT = 'Ecom_User clicks on Delete Product';
export const ECOMMERCE_SHARE_CLICK = 'Ecom_User clicks on share option';
export const ECOMMERCE_VOUCHER_APPLIED = 'Ecom_User clicks on apply voucher';
export const ECOMMERCE_VOUCHER_REMOVED = 'Ecom_User clicks on remove voucher';
export const ECOMMERCE_PAYMENT = 'Ecommerce_User clicks on payment';
export const ECOMMERCE_LETS_ORDER = 'Ecommerce_User clicks on lets order';
export const ECOMMERCE_PLACE_ORDER = 'Ecommerce_User clicks on place order';
export const ECOMMERCE_NEXT_PAYMENT = 'Ecommerce_User clicks on next payment';
export const ECOMMERCE_CASH_CHANGE_REQUEST =
  'Ecom_visited to cash change request';
export const ECOMMERCE_GO_TO_FRANCHISE = 'Ecom_User clicked on go to franchise';
export const ECOMMERCE_MARK_DEFAULT = 'Ecom_clk marks defaultddress butt';
export const ECOMMERCE_LOCATION_CHANGE = 'Ecom_clk chg Locatn landg map pg scr';
export const ECOMMERCE_MANUAL_ADDRESS_CAPTURE =
  'Ecom_vist manual Addr capture screen';
export const ECOMMERCE_LOCATION_DISABLE_CANCEL =
  'Ecommerce_User clicks on cancel';
export const ECOMMERCE_ENABLE_LOCATION = 'Ecom_User clicks on enable location';
export const ECOMMERCE_LOCATION_NOT_DELIVERABLE =
  'Ecom_clk Franch card when Locat not del';
export const ECOMMERCE_USER_ENABLED_LOCATION =
  'Ecommerce_User enabled location';
export const ECOMMERCE_LOCATION_PERMISSION_POPUP =
  'Ecommerce_Location permission popup';
export const ECOMMERCE_LOCATION_NOT_SERVICABLE =
  'Ecom_vist Locatn not servicable page';
export const ECOMMERCE_GEO_MAP_CONFIRM = 'Ecommerce_User clicks on confirm';
export const ECOMMERCE_GEO_ADD_ADDRESS_OTHERS =
  'Ecom_User selected other in add address';
export const ECOMMERCE_LOCATION_CHANGE_ADDRESS =
  'Ecom_clkChgLocat_land on add Addr scr';
export const ECOMMERCE_CHECKOUT_LESSAMOUNT_EXIT_CLICKED =
  'Ecom_clk Ext on popup when amountless';
export const ECOMMERCE_CHECKOUT_LESSAMOUNT_CONTINUE_CLICKED =
  'Ecom_clk cont on popup when amountless';
export const ECOMMERCE_CHECKOUT_LESSAMOUNT_SHOW_POPUP =
  'Ecom_Popup shown when amount is less';
export const ECOMMERCE_ERROR_MIN_ORDER_RESPONSE =
  'ECOMMERCE_ERROR_MIN_ORDER_RESPONSE';

// Query module
export const QUERIES_RAISED = 'Get Query Raised Request';
export const QUERY_FEEDBACK = 'Get FeedBack given';
export const QUERY_RESPONSE_LINK_CLICKED =
  'Query Module_Query_Resp_link_Clicked';
export const PAGE_VIEWED_FROM_QUERY_RESPONSE =
  'Query Mod_Page_view_From_Query_Resp_Pag';

// firebase event for user registration
export const REGISTRATION_COMPLETED = '_REGISTRATION_COMPLETED';
export const WHATSAPPICON_DASHBOARD = 'Click on whatsapp icon from dashboard';
export const WHATSAPPICON_PLANTIX = 'clk whatsapp ic from Pltx Diag Detail';
export const WHATSAPPICON_CHECKOUT = 'clk whatsapp icon Ecom Checkout scr';
export const WHATSAPPICON_MYORDERS = 'clk whatsapp icon Ecom My orders scr';
// Enroll Crop

export const ENROLL_CROP_USER_VISITING_CROP_CALENDAR =
  'Enroll Crp_vitg Crp calendar screen';

export const USER_VISITING_VIEW_ALL_REMINDER =
  'Enroll Crp_vitg viewll remders screen';

export const USER_CLICK_APPLIED_RECOMMENDATION =
  'Enroll Crp_Click apply Recommendation';

export const USER_PRACTICE_DURATION_ENROLL =
  'Enroll Crp_select calen fr specifi Crp';

export const USER_EDIT_ENROLLMENT = 'Enroll Crp_User editing Crp Enrolmt';

export const ENROLL_CROP_CLICK = 'Enroll Crp_clickg on enroll Crp now_';
export const ENROLL_CROP_FARMING_PRACTICES =
  'Enroll Crp_selecting farming practices';
export const ENROLL_CROP_CROP_DURATION =
  'Enroll Crp_User selecting Crp duration';
export const ENROLL_CROP_DATE_OF_SOWING = 'Enroll Crp_selecting date of sowing';
export const ENROLL_CROP_DATE_OF_TRANSPLANT =
  'Enroll Crp_selectg datetransplantg';
export const USER_CLICKING_ENROLL_CROP = 'Enroll crop_User clicking on enroll';
export const ENROLL_CROP_EDIT_CLICK_AFTER_SAVE =
  'Enroll Crp_clkg savAft Editg enroll Crp';
export const ENROLL_CROP_USER_CLICKING_CROP_CALENDAR =
  'Enroll Crp_clicking on Crp calandar';
export const CROP_ENROLLMENT_COMPLETE =
  'Enroll Crp_Complitg enroll Crp Journey';
export const ENROLL_CROP_REMINDER_TAB = 'Enroll crop_User clicked on tab ';
export const NOT_NOW_CLICK = 'User clicked on not now button';
export const PLANTIX_ADD_CROP = 'Add Crp_CrpDet PltxScan_CrpNot down';

// Refer & Earn event
export const REFER_MORE_MENU_CLICKED = 'Refer_User clicking on Refer';
export const REFER_AND_EARN_LANDING = 'Refer_landing on Refer and Earn Page';
export const REFER_USER_CLICKING_QR_CODE = 'Refer_User clicking on QR code';
export const REFER_CLICKING_COPY_REFERRAL_CODE =
  'Refer_clicking on copy referral code';
export const REFER_CLICKING_REFERRAL_NOW = 'Refer_User clicking on Refer Now';
export const REFER_LANDING_ON_REFERRAL_DIALOG =
  'Refer_User landing on referral code';
export const REFER_TYPING_ON_REFERRAL_DIALOG_INPUT =
  'Refer_User typed on referral code';
export const REFER_APPLY_ON_REFERRAL_DIALOG = 'Refer_User clicking on apply';
export const REFER_CLICKING_DISMISS_ON_REFERRAL_DIALOG =
  'Refer_User clicking on dismiss';
export const REFER_APPLY_ON_AUTOMATICALLY =
  'Refer_referral code applied from store';
export const USER_CLICKING_ON_MORE_BOTTOM_TAB = 'User clicking on more';
export const USER_EDITED_ENROLL_DATA_CANCELLED =
  'Enroll Crp_cancell the it enrollCrps';
export const USER_EDITED_ENROLL_DATA_SUCCESSFULLY =
  'Enroll crop_User editing the enroll data';
// Hybrid events
export const USER_SHARING_HYBRID = 'User Sharing the hybrid variety';

export const USER_SHARING_CP_PRODUCT = 'User Sharing the CP Product';
export const USER_CHANGEING_CROP = 'User changing the crop';
export const USER_VISITING_CP_CHALLENGES = 'User visiting crop challenges';
export const USER_VIEW_ALL_CROPCHALLENGE =
  'User click on view all in Crp challenge';
export const USER_VISITING_CHANGE_STAGE_DETAIL = 'User changing the stage';
export const USER_VISITING_STAGE_DETAIL = 'User visiting the stage detail';
export const SWITCHING_AGRONOMY_PRATICES_AND_PRECAUTIONS_TAB =
  'switchg the praticesnd precauti tab';
export const USER_CLICKING_ON_KNOWMORE_BUTTON =
  'User clicking on know more button';
export const USER_VISITING_PROFILE = 'User visiting the profile page';
export const USER_VISITING_ABOUTUS = 'User visiting about us';
export const USER_EDITING_PROFILE = 'User editing the profile page';
export const USER_ADDING_PRODUCT_TO_FAVOURITE =
  'adding the product to the favourite';

// crop protection service
export const CROP_PROTECTION_PRODUCT_LIST_ERROR =
  'Crop Protection_Error in product list';

// export const CROP_PROTECTION_CHALLENGES_REQUEST =
export const CROP_PROTECTION_CHALLENGES_ERROR =
  'Crop Protection_Error in challenges';
export const CROP_PROTECTION_STAGES_ERROR = 'Crop Protection_Error in stages';

// Farm service
export const FARM_AREA_LIST_ERROR = 'Farm Area_Error in farm list';
export const FARM_AREA_SAVE_ERROR = 'Farm Area_Error in save farm';
export const FARM_AREA_GET_AREA_ERROR = 'Farm Area_Error in get farm area';
export const FARM_AREA_DELETE_FARM_ERROR = 'Farm Area_Error in delete farm';

// Query List Service
export const QUERY_LIST_GET_ERROR = 'Query List_Error in query list';
export const QUERY_LIST_DELETE_ERROR = 'Query List_Error in delete query list';
export const QUERY_LIST_NEW_QUERY_ERROR = 'Query List_Error in new query';
export const QUERY_LIST_RATE_QUERY_ERROR = 'Query List_Error in rate query';
export const QUERY_LIST_UPLOAD_QUERY_ERROR = 'Query List_Error in upload query';
export const QUERY_LIST_REPLY_QUERY_ERROR = 'Query List_Error in reply query';
export const QUERY_LIST_QUERY_CONVERSATION_ERROR =
  'Query List_Err in query conversation';
export const QUERY_LIST_CATEGORY_ERROR = 'Query List_Error in category';
export const QUERY_LIST_DELETE_QUERY_FILE_ERROR =
  'Query List_Error in delete query file';
export const QUERY_LIST_CALL_SUPPORT_ERROR = 'Query List_Error in call support';
export const QUERY_LIST_CALL_SUPPORT_CROP_PROTECTION_ERROR =
  'Query Lt_Err support Crp protection';

// Refer & EARN service
export const REFER_GET_REFER_CODE_ERROR = 'Refer_Error in get refer code';
export const REFER_SAVE_REFERRAL_QR_CODE_ERROR =
  'Refer_Error in save referral qr code';
export const REFER_APPLY_REFERRAL_ERROR = 'Refer_Error in apply referral';

// Store service
export const STORE_GET_LIST_ERROR = 'Store_Error in get list';
export const STORE_GET_DISTANCE_ERROR = 'Store_Error in get distance';

// Nearest Retailer Service
export const NEAREST_RETAILER_GET_CROP_LIST_ERROR =
  'Nearest Retailer_Err in get Crp list';

// Plantix Service
export const PLANTIX_SERVICE_IMAGE_DIAGNOSIS_ERROR =
  'Plantix Serv_Err in image diagnosis';
export const PLANTIX_SERVICE_DIAGNOSIS_CALL_SUPPORT_ERROR =
  'Plantix Serv_Err in diagnosis support';
export const PLANTIX_SERVICE_DIAGNOSIS_RATING_REASONS_ERROR =
  'Plantix Serv_Errdiagnos ratg reasons';
export const PLANTIX_SERVICE_DIAGNOSIS_RATING_FEEDBACK_ERROR =
  'Plantix Serv_Errdiagnos ratg feback';
export const PLANTIX_SERVICE_DIAGNOSIS_HISTORY_ERROR =
  'Plantix Serv_Err in diagnosis history';
export const PLANTIX_SERVICE_DIAGNOSIS_BY_SCANID_ERROR =
  'Plantix Serv_Err in diagnosis history';
// Weather Service
export const WEATHER_SERVICE_FORECAST_ERROR =
  'Weather Serv_Err in forecast data';
export const WEATHER_SERVICE_HISTORIC_DATA_ERROR =
  'Weather Serv_Err in historic data';
// Seed Calculator Event
export const SEED_CALCULATOR_SERVICE_CLICK =
  'Seed Calculator_clicked on Serv card';
export const MY_CROPS_CLICK = 'User navigating to My Crop';

export const SAVE_APPFEEDBACK_ERROR = 'App Feedback_Save Error';
export const FEEDBACK_THUMBSUP = 'App Feedback Thumbs Up_Submit';
export const FEEDBACK_THUMBSDOWN = 'App Feedback Thumbs Down_Submit';
export const FEEDBACK_NOTHANKYOU = 'App Feedback No Thank You';
export const FEEDBACK_CLOSE = 'App Feedback Close';
// MPIN event
export const MPIN_LOGIN_MOBILE_NUMBER_AUTOMATICALLY_PICKED =
  'MPIN_Mobile Number Picked Automatically';
export const MPIN_LOGIN_MOBILE_NUMBER_CHANGED = 'MPIN_Mobile Number Changed';
export const MPIN_USER_CLICK_CHANGE_NUMBER =
  'MPIN_Clicked on change mobile number';
export const MPIN_SCREEN_INITIALIZED = 'MPIN_Screen Initialized';
export const MPIN_USER_CLICKED_FORGOT_MPIN = 'MPIN_User clicked on forgot mpin';
export const MPIN_ERROR = 'MPIN_Error';
export const MPIN_USER_CLICKED_INFO = 'MPIN_User clicked on info';
export const MPIN_ATTEMPT_EXCEEDED = 'MPIN_User MPin attempt exceeded';
export const MPIN_CREATED = 'MPIN_User MPin created';
export const MPIN_INCORRECT_ENTRY = 'MPIN_User MPin incorrect attempt';

// Booking Tool Event
export const CLICKED_BOOKING_TOOL_ = 'SidcarClk Bookg Tool Dashb Serv_CRD_clk'; // using SERVICE_CARD_CLICK
export const BOOKING_TOOL_INFORMATION_PAGE = 'Seedcare_Vit Bookg frmation page';
export const BOOKING_TOOL_REQUEST_NOW = 'Seedcare_clk request now frmati page';
export const BOOKING_TOOL_CALL_SUPPORT_INFO =
  'Seedcare_clk support frmati page';
export const BOOKING_TOOL_WHATSAPP_INFO = 'Seedcare_clk whatspp frmati page';
export const BOOKING_TOOL_VISITED_BOOKING = 'Seedcare_Visited booking web page';
export const NOTIFICATION_BELL_CLICKED = 'NOTIFICATION_BELL_CLICKED';
export const NOTIFICATION_VIEWED = 'NOTIFICATION_VIEWED';
export const NOTIFICATION_UNREAD = 'NOTIFICATION_UNREAD';
export const MARK_AS_READ_INITIATED = 'MARK_AS_READ_INITIATED';
export const MARK_AS_READ_COMPLETE = 'MARK_AS_READ_INITIATED';
export const DELETE_INITIATED = 'DELETE_INITIATED';
export const DELETE_CONFIRMATION_VIEWED = 'DELETE_CONFIRMATION_VIEWED';
export const DELETE_CONFIRMED = 'DELETE_CONFIRMED';
export const DELETE_DISMISSED = 'DELETE_DISMISSED';
export const DELETE_CANCELLED = 'DELETE_CANCELLED';
export const NOTIFICATION_LINK_CLICKED = 'NOTIFICATION_LINK_CLICKED';
export const NOTIFICATION_READ = 'NOTIFICATION_READ';
export const PAGE_VIEWED_FROM_NOTIFICATION = 'PAGE_VIEWED_FROM_NOTIFICATION';

// NewsFeed Events
export const USER_VIEWING_IMAGES = 'Media_User viewing images';
export const USER_VISITING_YOUTUBE_LIST =
  'User visiting youtube video list page';
export const USER_CLICK_YOUTUBE_LINK_LISTPAGE =
  ' Media_User click Utube link list page';
export const USER_LANDING_YOUTUBE_CHANNEL_SCREEN =
  ' Media_User land Utube channel screen';

// Centrigo Events
export const CENTRIGO_INTRODUCTION_VIEWED = 'Centrigo_Introduction_Viewed';
export const CENTRIGO_FLASH_SCREEN_INITIATED =
  'Centrigo_Flash_Screen_Initiated';
export const CENTRIGO_WELCOME_SCREEN_VIEWED = 'Centrigo_Welcome_Screen_Viewed';
export const CENTRIGO_EXPLORE_CENTRIGO_SELECTED =
  'Centrigo_Explore_Centrigo_Selected';
export const CENTRIGO_CENTRIGO_LOGO_CLICKED = 'Centrigo_Centrigo_Logo_Clicked';
export const CENTRIGO_CROPWISE_LOGO_CLICKED = 'Centrigo_Cropwise_Logo_Clicked ';
export const CENTRIGO_SPLASH_SCREEN_INITIATED =
  'Centrigo_Splash_Screen_Initiated';
export const CENTRIGO_HOME_PAGE_LANDED = 'Centrigo_Home_Page_Landed';
export const CENTRIGO_CENTER_DEATILS_VIEWED = 'Centrigo_Center_Deatils_Viewed';
export const CENTRIGO_CENTER_CALL_INITIATED = 'Centrigo_Center_Call_Initiated';
export const CENTRIGO_CENTER_SHARE_INITIATED =
  'Centrigo_Center_Share_Initiated';
export const CENTRIGO_CENTER_DETAILS_EXIT = 'Centrigo_Center_Details_Exit';
export const CENTRIGO_NEWS_FEED_SIDE_SCROLL_INTERACTION =
  'Centrigo_News_Fe_Side_Scroll_teraction';
export const CENTRIGO_PROMOTIONAL_IMAGE_CLICKED =
  'Centrigo_Promotional_Image_Clicked';
export const CENTRIGO_PROMOTIONAL_IMAGE_BACK_CLICKED =
  'Centrigo_Promotional_Image_Back_Clicked';
export const CENTRIGO_ONGOING_SERVICES_VIEWED =
  'Centrigo_Ongoing_Services_Viewed';
export const CENTRIGO_PROMOTION_CLICKED = 'Centrigo_Promotion_Clicked';
export const CENTRIGO_PROMOTION_BACK_CLICKED =
  'Centrigo_Promotion_Back_Clicked';
export const CENTRIGO_VIDEO_PLAY_CLICKED = 'Centrigo_Video_Play_Clicked';
export const CENTRIGO_NEWSFEED_LINK_CLICKED = 'Centrigo_Newsfeed_Link_Clicked';
export const CENTRIGO_SERVICE_REQUEST_INITIATED =
  'Centrigo_Service_Request_Initiated';
export const CENTRIGO_SERVICE_REQUEST_SUBMITTED =
  'Centrigo_Service_Request_Submitted';
export const CENTRIGO_REQUEST_SUBMITTED_SUCCESSFULLY_FLASH_SCREEN_VIEWED =
  'centriReq_Sub_Success_Flash_Screen_view';
export const CENTRIGO_REDIRECT_TO_ONGOING_SERVICES =
  'Centrigo_Redirect_To_Ongoing_Services';
export const CENTRIGO_ONGOING_SERVICE_DETAILS_PAGE_LOADED =
  'Centrigo_Ongog_Serv_Details_Page_Load';
export const CENTRIGO_ONGOING_SERVICE_DETAILS_VIEWED =
  'Centrigo_Ongoing_Service_Details_Viewed';
export const CENTRIGO_ONGOING_SERVICE_SUPPORT_CALL_ICON_CLICKED =
  'Centrigo_Ongog_Serv_Support__Icon_Click';
export const CENTRIGO_ONGOING_SERVICE_PAGE_EXIT =
  'Centrigo_Ongoing_Service_Page_Exit';
export const CENTRIGO_SERVICE_HISTORY_PAGE_LOADED =
  'Centrigo_Service_History_Page_Loaded';
export const CENTRIGO_SERVICE_HISTORY_PAGE_EXIT =
  'Centrigo_Service_History_Page_Exit';
export const CENTRIGO_HOME_PAGE_LOADED = 'Centrigo_Home_Page_Loaded';
export const CENTRIGO_BACK_BUTTON_CLICKED_SERVICE_REQUEST_SUBMISSION =
  'centriBack_Butt_clk_Serv_Request_Submsi';
export const CENTRIGO_ONGOING_SERVICES_PAGE_LOADED =
  'Centrigo_Ongoing_Services_Page_Loaded';
export const CENTRIGO_AGRI_LOAN_PAGE_VIEWED = 'Centrigo_Agri_Loan_Page_Viewed';
export const CENTRIGO_AGRI_LOAN_SUPPORT_CALL_CLICKED =
  'Centrigo_Agri_Loan_Support_Call_Clicked';
export const CENTRIGO_REQUEST_SUBMITTED_SUCCESSFULLY_SCREEN_VIEWED =
  'centriReq_Sub_Successfully_Screen_view';
export const CENTRIGO_REQUEST_SUBMITTED_FAILED_SCREEN_VIEWED =
  'centriRequest_Submitt_Fail_Screen_view';
export const CENTRIGO_SERVICE_REQUEST_BACK_BUTTON_CLICKED =
  'Centrigo_Serv_Request_Back_Button_Click';
export const CENTRIGO_SERVICE_DETAILS_PAGE_VIEWED =
  'Centrigo_Service_Details_Page_Viewed';
export const CENTRIGO_SERVICE_DETAILS_SUPPORT_CALL_CLICKED =
  'Centrigo_Serv_Details_Support__Clicked';
export const CENTRIGO_SERVICE_DETAILS_PAGE_EXIT =
  'Centrigo_Service_Details_Page_Exit';

export const CENTRIGO_SERVICE_INFO_PAGE_VIEWED =
  'Centrigo_Service_Info_Page_Viewed';
export const CENTRIGO_SERVICE_INFO_SUPPORT_CALL_CLICKED =
  'Centrigo_Serv_Info_Support_Call_Clicked';

export const CENTRIGO_FEATURE_CLICKED = 'Centrigo_Feature_Clicked ';
export const CENTRIGO_FEATURE_EXIT = 'Centrigo_Feature_Exit ';
export const CENTRIGO_ONGOING_SERVICES_VISITED =
  'Centrigo_Ongoing_Services_Visited';
export const CENTRIGO_ONGOING_SERVICES_CROP_SELECTED =
  'Centrigo_Ongoing_Services_Crop_Selected';
export const CENTRIGO_ONGOING_SERVICES_FILTERS_APPLIED =
  'Centrigo_Ongoing_Servs_Filters_Applied';
export const CENTRIGO_SERVICES_HISTORY_VISITED =
  'Centrigo_Services_History_Visited';
export const CENTRIGO_SERVICES_HISTORY_CROP_SELECTED =
  'Centrigo_Servs_History_Crp_Selected';
export const CENTRIGO_SERVICES_HISTORY_FILTERS_APPLIED =
  'Centrigo_Servs_History_Filters_Applied';
// Centrigo Events End

export const USER_OTP_VERIFIED = 'User OTP verified';

// New Weather Amplitude Events
export const WEATHER_PAGE_VIEWED = 'Weather_Page_Viewed';
export const CHART_INTERVAL_CLICKED = 'Chart_Interval_Clicked';
export const COLOUR_ZONE_CLICKED = 'Colour_Zone_Clicked';
export const SCROLL_DOWN = 'Scroll_Down';
export const DAY_SELECTED = 'Day_Selected';
export const WEATHER_7_DAY_FORECAST_VIEWED = 'Weather_7_Days_Forecast_Viewed';
export const WEATHER_7_DAY_FORECAST_CARD_CLICKED =
  'Weather_7_Days_frecast_Day_Card_Click';
export const WEATHER_7_DAY_FORECAST_SPRAY_GUIDE_CLICKED =
  'Weather 7_Days_frecast_Spray_Guide_clk';
export const WEATHER_TEMP_VIEW_CHART = 'Weather_Temperature_View_Chart';
export const WEATHER_TEMP_TOGGLE_BUTTON_CLICKED =
  'Weather_Temperature_Toggle_Butt_clk';
export const WEATHER_TEMP_DATA_POINT_CLICKED =
  'Weather_Temperature_Data_Point_Clicked';
export const WEATHER_TEMP_SCROLL_DATE = 'Weather_Temperature_Scroll_Date';
export const WEATHER_PRECIPITATION_VIEW_CHART =
  'Weather_Precipitatio_View_Chart';
export const WEATHER_PRECIPITATION_TOGGLE_BUTTON_CLICKED =
  'Weather_Precipitati_Toggle_Butt_clk';
export const WEATHER_PRECIPITATION_DATA_POINT_CLICKED =
  'Weather_Precipitation_Data_Pot_Click';
export const WEATHER_PRECIPITATION_SCROLL_DATE =
  'Weather_Precipitation_Scroll_Date';
export const WEATHER_WIND_VIEW_CHART = 'Weather Forecast_Wind_View_Chart';
export const WEATHER_WIND_TOGGLE_BUTTON_CLICKED =
  'Weather_Wind_Toggle_Button_Clicked';
export const WEATHER_WIND_DATA_POINT_CLICKED =
  'Weather_Wind_Data_Point_Clicked';
export const WEATHER_WIND_SCROLL_DATE = 'Weather Forecast_Wind _Scroll_Date';
export const WEATHER_HUMIDITY_VIEW_CHART =
  'Weather Forecast_Humidity_View_Chart';
export const WEATHER_HUMIDITY_TOGGLE_BUTTON_CLICKED =
  'Weather_Humidity_Toggle_Button_Click';
export const WEATHER_HUMIDITY_DATA_POINT_CLICKED =
  'Weather_Humidity_Data_Point_Clicked';
export const WEATHER_HUMIDITY_SCROLL_DATE =
  'Weather Forecast_Humidity_Scroll_Date';

// New Query Module Amplitude Events
export const QUERY_MODULE_NEW_QUERY = 'New_Query_Opened';
export const QUERY_MODULE_CROP_SELECTED = 'Query_Module_Crop_Selected';
export const QUERY_MODULE_CATEGORY_SELECTED = 'Query_Module_Category_Selected';
export const QUERY_MODULE_QUERY_MESSAGE_WRITTEN =
  'Query_Module_Query_Message_Written';
export const QUERY_MODULE_FILE_UPLOADED = 'Query_Module_File Uploaded';
export const QUERY_MODULE_FILE_UPLOAD_FAILED =
  'Query_Module_File Upload Failed';
export const QUERY_MODULE_IMAGE_VIEWED = 'Image_Viewed';
export const QUERY_MODULE_VOICE_MESSAGE_RECORDED = 'Voice_Message_Recorded';
export const QUERY_MODULE_VOICE_MESSAGE_RECORD_FAILED =
  'Voice_Message_Record_Failed';
export const QUERY_MODULE_VOICE_MESSAGE_PLAYED = 'Voice_Message_Played';
export const QUERY_MODULE_QUERY_CANCELLED = 'Query_Cancelled';
export const QUERY_SENT = 'Query_Sent';
export const QUERY_MODULE_RESPONSE_VIEWED = 'Query_Response_Viewed';
export const QUERY_MODULE_ISSUE_RESOLVED_CLICKED = 'Issue_Resolve_Clicked';
export const QUERY_MODULE_STARS_ADDED = 'Stars_Rated';
export const QUERY_MODULE_QUERY_RESPONSE_CALL_ICON_CLICKED =
  'Query Response_call_icon_clicked';
export const QUERY_MODULE_QUERY_VIEWED = 'Query_Viewed';

export const QUERY_MODULE_DELETE_INITIATED = 'Query Module_Deleted_Initiated';
export const QUERY_MODULE_DELETE_CONFIRMATION =
  'Query Module_Delete_Confirmation_Viewed';
export const QUERY_MODULE_DELETE_CONFIRMED = 'Query Module_Delete_Confirmed';
export const QUERY_MODULE_DELETE_DISMISSED = 'Query Module_Delete_Dismissed';
export const QUERY_MODULE_DELETE_CANCELLED = 'Query Module_Delete_Cancelled';
export const QUERY_MODULE_DELETE_SUCCESS = 'Query Module_Delete_Success';

// Terms and conditions event
export const TERMS_CHECKBOX_CLICKED = 'TnC_Tick_Clicked';
export const TERMS_ACCEPT_CLICKED = 'TnC_Accept_Clicked';
export const TERMS_DOWNLOAD_CLICKED = 'TnC_Download_Clicked';
export const PRIVACY_POLICY_DOWNLOAD_CLICKED =
  'Privacy_Policy_Download_Clicked';

// Farm area events
export const FARM_AREA_PERIMETER_WALKED = 'Farm Calc_Farm_Perimeter_Walked';
export const FARM_AREA_NAME_ENTERED = 'Farm Calc_Farm_Name_Entered';
export const FARM_AREA_SAVE_BUTTON_CLICKED = 'Farm Calc_Save_Button_Clicked';
export const FARM_AREA_ZERO_AREA_ALERT_SHOWN =
  'Farm Calc_Zero_Area_Alert_Shown';
export const FARM_AREA_ZERO_AREA_OK_CLICKED =
  'Farm Calc_Zero_Area_Alert_Ok_Clicked';

// My crop events

export const CROP_LIST_ICON_CLICKED = 'Crop_List_Icon_Clicked';
export const CROP_SEARCH_INITIATED = 'Crop_Search_Initiated';
export const CROP_SELECTED = 'Crop_Selected';
export const CROP_DESELECTED = 'Crop_Deslected';
export const CROP_DOWNLOAD_INITIATED = 'Information_Download_Iniated';
export const CROP_DOWNLOAD_COMPLETE = 'Information_Download_Complete';
export const CROP_DOWNLOAD_FAILED = 'Information_Download_Failed';
export const CROP_PRODUCT_VIEWED = 'Product_Viewed';
export const CROP_FAVOURITE_BUTTON_CLICKED = 'Favourite_button_clicked';
export const CROP_FAVOURITE_BUTTON_UNCLICKED = 'Favourite_button_declicked';

// News Feed Events

export const NEWS_FEED_VIDEO_CLICKED = 'Video_Clicked';
export const NEWS_FEED_VIDEO_STARTED = 'Video_Started';
export const NEWS_FEED_VIDEO_WATCHED = 'Video_Watched';

// Setup account

export const SETUP_ACCOUNT_CALL = 'setup_account_call';
export const SETUP_ACCOUNT_CHAT = 'setup_account_chat';

// marketin compaign
export const MARKETING_COMPAIGN = '_marketing_campaign';
export const DEEP_LINK_EVENT = 'user arrived from deeplink';

// inapp event for testing
export const CURRENT_USER_LANGUAGE = 'CURRENT_USER_LANGUAGE_CHANGED';

// Age Range
export const AGE_RANGE_APPEARED = 'AgeRg_User saw Age Range popup';
export const AGE_RANGE_CLOSED = 'AgeRg_User Closed Age Range popup';
export const AGE_RANGE_OKAY_CLICK = 'AgeRg_User Clicked Ok Age Range popup';

// Missing Event
export const GET_APPFEEDBACK_ERROR = 'App Feedback - Get Error';

// Onboarding
export const INTRODUCTION_SCREEN_INITIATED = 'Introduction_Screen_Initiated';
export const INTRODUCTION_SCREEN_GET_STARTED =
  'Introduction_Get_started_Clicked';
export const INTRODUCTION_SCREEN_SKIPPED = 'Introduction_Skip_button_clicked';
export const DASHBOARD_CONFIG_ERROR = 'Error - Dashboard Config List';
