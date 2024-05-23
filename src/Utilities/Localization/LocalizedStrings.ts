// tslint:disable: variable-name
//import I18n from 'i18n-js';
import * as I18n from 'i18n-js';
//import { I18manager } from './i18n';
import * as I18manager from 'i18n';
/**
 * LocalizedStrings.loginTitle()
 */
export default class LocalizedStrings {
  static graphGuideMsg = () => I18manager.strings('graphGuideMsg');
  static phoneNumber = () => I18manager.strings('phoneNumber');
  static mobileNumber = () => I18manager.strings('mobileNumber');
  static phoneNumberExample = () => I18manager.strings('phoneNumberExample');
  static farmSizeHint = () => I18manager.strings('farmSizeHint');
  static measurement = () => I18manager.strings('measurement');
  static totalFarmSize = () => I18manager.strings('totalFarmSize');
  static loaderTitle = () => I18manager.strings('loaderTitle');
  static location = () => I18manager.strings('location');
  static yourAddress = () => I18manager.strings('yourAddress');
  static useMyLocation = () => I18manager.strings('useMyLocation');
  static or = () => I18manager.strings('or');
  static state = () => I18manager.strings('state');
  static address = () => I18manager.strings('address');
  static enterCountry = () => I18manager.strings('enterCountry');
  static enterState = () => I18manager.strings('enterState');
  static enterCity = () => I18manager.strings('enterCity');
  static invalidZipCode = () => I18manager.strings('invalidZipCode');
  static gpsTitle = () => I18manager.strings('gpsTitle');
  static allow = () => I18manager.strings('allow');
  static block = () => I18manager.strings('block');
  static back = () => I18manager.strings('back');
  static badCredentials = () => I18manager.strings('badCredentials');
  static invalidRequest = () => I18manager.strings('invalidRequest');
  static noInternet = () => I18manager.strings('noInternet');
  static somethingWrong = () => I18manager.strings('somethingWrong');
  static confirm = () => I18manager.strings('confirm');
  static cancel = () => I18manager.strings('cancel');
  static yes = () => I18manager.strings('yes');
  static noCropsAdded = () => I18manager.strings('noCropsAdded');
  static all = () => I18manager.strings('all');
  static next = () => I18manager.strings('next');
  static signup = () => I18manager.strings('signup');
  static start = () => I18manager.strings('start');
  static end = () => I18manager.strings('end');
  static locationServices = () => I18manager.strings('locationServices');
  static settings = () => I18manager.strings('settings');
  static allowLocationPermission = () =>
    I18manager.strings('allowLocationPermission');
  static error = () => I18manager.strings('error');
  static success = () => I18manager.strings('Success');
  static search_country = () => I18manager.strings('search_country');
  static acceptTermsCondition = () =>
    I18manager.strings('acceptTermsCondition');
  static continue = () => I18manager.strings('continue');
  static search = () => I18manager.strings('search');
  static edit = () => I18manager.strings('edit');
  static enter = () => I18manager.strings('enter');
  static fName = () => I18manager.strings('fName');
  static minLength = () => I18manager.strings('minLength');
  static oneUpperCase = () => I18manager.strings('oneUpperCase');
  static oneLowerCase = () => I18manager.strings('oneLowerCase');
  static oneNumber = () => I18manager.strings('oneNumber');
  static windSpeed = () => I18manager.strings('windSpeed');
  static evapotranspiration = () => I18manager.strings('evapotranspiration');
  static gusts = () => I18manager.strings('gusts');
  static leafWetness = () => I18manager.strings('leafWetness');
  static probability = () => I18manager.strings('probability');
  static direction = () => I18manager.strings('direction');
  static cloudCoverage = () => I18manager.strings('cloudCoverage');
  static precipitationTotal = () => I18manager.strings('precipitationTotal');
  static solarRadiation = () => I18manager.strings('solarRadiation');
  static dewPoint = () => I18manager.strings('dewPoint');
  static datePeriod = () => I18manager.strings('datePeriod');
  static daysForecast = () => I18manager.strings('daysForecast');
  static temperature = () => I18manager.strings('temperature');
  static precipitation = () => I18manager.strings('precipitation');
  static wind = () => I18manager.strings('wind');
  static humidity = () => I18manager.strings('humidity');
  static noForecastData = () => I18manager.strings('noForecastData');
  static sprayGuide = () => I18manager.strings('sprayGuide');
  static midDay = () => I18manager.strings('midDay');
  static midNight = () => I18manager.strings('midNight');
  static summary = () => I18manager.strings('summary');
  static forecast = () => I18manager.strings('forecast');
  static historic = () => I18manager.strings('historic');
  static bestToSpray = () => I18manager.strings('bestToSpray');
  static possToSpray = () => I18manager.strings('possToSpray');
  static notAdvisable = () => I18manager.strings('notAdvisable');
  static today = () => I18manager.strings('today');
  static data = () => I18manager.strings('data');
  static notInSelectedRange = () => I18manager.strings('notInSelectedRange');
  static yourDateRange = () => I18manager.strings('yourDateRange');
  static noDailyData = () => I18manager.strings('noDailyData');
  static low = () => I18manager.strings('low');
  static apply = () => I18manager.strings('apply');
  static save = () => I18manager.strings('save');
  static noCrop = () => I18manager.strings('noCrop');
  static close = () => I18manager.strings('close');
  static invalidDateRange = () => I18manager.strings('invalidDateRange');
  static weather = () => I18manager.strings('weather');
  static recommended = () => I18manager.strings('recommended');
  static limited = () => I18manager.strings('limited');
  static service_unavailable = () => I18manager.strings('service_unavailable');
  static noProductToAdd = () => I18manager.strings('noProductToAdd');
  static addCropSubTitle = () => I18manager.strings('addCropSubTitle');
  static FetchingLanguages = () => I18manager.strings('FetchingLanguages');
  static SelectLanguage = () => I18manager.strings('SelectLanguage');
  static SendingOTP = () => I18manager.strings('SendingOTP');
  static SignUpLogIn = () => I18manager.strings('SignUpLogIn');
  static validnumber = () => I18manager.strings('validnumber');
  static VerifyingOTP = () => I18manager.strings('VerifyingOTP');
  static ResendingOTP = () => I18manager.strings('ResendingOTP');
  static VerifyMobileNumber = () => I18manager.strings('VerifyMobileNumber');
  static otpsent = () => I18manager.strings('otpsent');
  static OTP = () => I18manager.strings('OTP');
  static incorrectotpmessage = () => I18manager.strings('incorrectotpmessage');
  static ResendOTP = () => I18manager.strings('ResendOTP');
  static CropSuccessfullyAdded = () =>
    I18manager.strings('CropSuccessfullyAdded');
  static fetchingCrops = () => I18manager.strings('fetchingCrops');
  static AddCrop = () => I18manager.strings('AddCrop');
  static Searchforyourcrop = () => I18manager.strings('Searchforyourcrop');
  static Savingcrops = () => I18manager.strings('Savingcrops');
  static Downloadingcropdata = () => I18manager.strings('Downloadingcropdata');
  static MyCrops = () => I18manager.strings('MyCrops');
  static RetailerNurseries = () => I18manager.strings('RetailerNurseries');
  static Call = () => I18manager.strings('Call');
  static Share = () => I18manager.strings('Share');
  static ProductsAvilable = () => I18manager.strings('ProductsAvilable');
  static SEEDS = () => I18manager.strings('SEEDS');
  static MyProfile = () => I18manager.strings('MyProfile');
  static MyAddress = () => I18manager.strings('MyAddress');
  static Language = () => I18manager.strings('Language');
  static AboutSyngenta = () => I18manager.strings('AboutSyngenta');
  static TermsConditions = () => I18manager.strings('TermsConditions');
  static SignOut = () => I18manager.strings('SignOut');
  static Fetchingcurrentlocation = () =>
    I18manager.strings('Fetchingcurrentlocation');
  static Updatinguserprofiledata = () =>
    I18manager.strings('Updatinguserprofiledata');
  static Fetchingplacedetails = () =>
    I18manager.strings('Fetchingplacedetails');
  static EditProfile = () => I18manager.strings('EditProfile');
  static SetUpAccount = () => I18manager.strings('SetUpAccount');
  static FirstName = () => I18manager.strings('FirstName');
  static LastName = () => I18manager.strings('LastName');
  static MobileNumberText = () => I18manager.strings('MobileNumberText');
  static willlocate = () => I18manager.strings('willlocate');
  static EnterYourVillage = () => I18manager.strings('EnterYourVillage');
  static Village = () => I18manager.strings('Village');
  static Taluka = () => I18manager.strings('Taluka');
  static District = () => I18manager.strings('District');
  static EnterPincode = () => I18manager.strings('EnterPincode');
  static Pincode = () => I18manager.strings('Pincode');
  static VarietyProducts = () => I18manager.strings('VarietyProducts');
  static VarietyRecommendations = () =>
    I18manager.strings('VarietyRecommendations');
  static StartOver = () => I18manager.strings('StartOver');
  static EnterMobileNumber = () => I18manager.strings('EnterMobileNumber');
  static ErrorwhileverifyingOTP = () =>
    I18manager.strings('ErrorwhileverifyingOTP');
  static Change = () => I18manager.strings('Change');
  static sectoresentOTP = () => I18manager.strings('sectoresentOTP');
  static termssigninguptext = () => I18manager.strings('termssigninguptext');
  static Filedownloaded = () => I18manager.strings('Filedownloaded');
  static DownloadTc = () => I18manager.strings('DownloadTc');
  static OK = () => I18manager.strings('OK');
  static Reminder = () => I18manager.strings('Reminder');
  static Alert = () => I18manager.strings('Alert');
  static Knowmore = () => I18manager.strings('Knowmore');
  static CropProtectionProducts = () =>
    I18manager.strings('CropProtectionProducts');
  static AlsoGreatOptions = () => I18manager.strings('AlsoGreatOptions');
  static OurTopPick = () => I18manager.strings('OurTopPick');
  static successfullyadded = () => I18manager.strings('successfullyadded');
  static facinginternetconnectivity = () =>
    I18manager.strings('facinginternetconnectivity');
  static TryAgain = () => I18manager.strings('TryAgain');
  static Dismiss = () => I18manager.strings('Dismiss');
  static DownloadFailed = () => I18manager.strings('DownloadFailed');
  static Next24Hours = () => I18manager.strings('Next24Hours');
  static ExpandedForcast = () => I18manager.strings('ExpandedForcast');
  static Expectdry = () => I18manager.strings('Expectdry');
  static SprayingTime = () => I18manager.strings('SprayingTime');
  static GoodMorning = () => I18manager.strings('GoodMorning');
  static GoodAfternoon = () => I18manager.strings('GoodAfternoon');
  static GoodEvening = () => I18manager.strings('GoodEvening');
  static GoodNight = () => I18manager.strings('GoodNight');
  static FieldCrops = () => I18manager.strings('FieldCrops');
  static VegetableSeeds = () => I18manager.strings('VegetableSeeds');
  static CropProtection = () => I18manager.strings('CropProtection');
  static TopCropChallenges = () => I18manager.strings('TopCropChallenges');
  static ViewAll = () => I18manager.strings('ViewAll');
  static LearnbyStages = () => I18manager.strings('LearnbyStages');
  static Retailer = () => I18manager.strings('Retailer');
  static Nursery = () => I18manager.strings('Nursery');
  static WhatAreYouLookingFor = () =>
    I18manager.strings('WhatAreYouLookingFor');
  static TypesOfProducts = () => I18manager.strings('TypesOfProducts');
  static ShowResullt = () => I18manager.strings('ShowResullt');
  static Clear = () => I18manager.strings('Clear');
  static AreYouSure = () => I18manager.strings('AreYouSure');
  static YouAreSigningOut = () => I18manager.strings('YouAreSigningOut');
  static FetchingNearestRetailerNursery = () =>
    I18manager.strings('FetchingNearestRetailerNursery');
  static Filter = () => I18manager.strings('Filter');
  static listofvarieties = () => I18manager.strings('listofvarieties');
  static varietyrecommender = () => I18manager.strings('varietyrecommender');
  static listcpproducts = () => I18manager.strings('listcpproducts');
  static cprecommender = () => I18manager.strings('cprecommender');
  static maturity = () => I18manager.strings('maturity');
  static sowingperiod = () => I18manager.strings('sowingperiod');
  static expectedYield = () => I18manager.strings('expectedYield');
  static seedRate = () => I18manager.strings('seedRate');
  static buyItFromRetailerOrNursery = () =>
    I18manager.strings('buyItFromRetailerOrNursery');
  static agronomyPracticesPrecautions = () =>
    I18manager.strings('agronomyPracticesPrecautions');
  static agronomyPractices = () => I18manager.strings('agronomyPractices');
  static precautions = () => I18manager.strings('precautions');
  static dosage = () => I18manager.strings('dosage');
  static stage = () => I18manager.strings('stage');
  static Wheretouse = () => I18manager.strings('Wheretouse');
  static howToUse = () => I18manager.strings('howToUse');
  static RecommendMeaVariety = () => I18manager.strings('RecommendMeaVariety');
  static DosandDonts = () => I18manager.strings('DosandDonts');
  static StewardshipGuidelines = () =>
    I18manager.strings('StewardshipGuidelines');
  static Dos = () => I18manager.strings('Dos');
  static Donts = () => I18manager.strings('Donts');
  static HandlingPesticides = () => I18manager.strings('HandlingPesticides');
  static ApplyingPesticides = () => I18manager.strings('ApplyingPesticides');
  static GrowerTestimonials = () => I18manager.strings('GrowerTestimonials');
  static EffectiveAgainst = () => I18manager.strings('EffectiveAgainst');
  static KeyFeatures = () => I18manager.strings('KeyFeatures');
  static CropChallenges = () => I18manager.strings('CropChallenges');
  static KnowMoreabouttheDiesease = () =>
    I18manager.strings('KnowMoreabouttheDiesease');
  static BuyPesticides = () => I18manager.strings('BuyPesticides');
  static AboutSyngentaDesc = () => I18manager.strings('AboutSyngentaDesc');
  static AbouttheDisease = () => I18manager.strings('AbouttheDisease');
  static ChangeStage = () => I18manager.strings('ChangeStage');
  static OurSolutions = () => I18manager.strings('OurSolutions');
  static Recommender = () => I18manager.strings('Recommender');
  static AskMeLater = () => I18manager.strings('AskMeLater');
  static AccessToCamera = () => I18manager.strings('AccessToCamera');
  static CameraPermission = () => I18manager.strings('CameraPermission');
  static ChooseAnOption = () => I18manager.strings('ChooseAnOption');
  static LaunchCamera = () => I18manager.strings('LaunchCamera');
  static SelectImageFromGallery = () =>
    I18manager.strings('SelectImageFromGallery');
  static ChooseState = () => I18manager.strings('ChooseState');
  static ChooseDistrict = () => I18manager.strings('ChooseDistrict');
  static ChooseTaluka = () => I18manager.strings('ChooseTaluka');
  static RequiredFields = () => I18manager.strings('RequiredFields');
  static ChangeCrop = () => I18manager.strings('ChangeCrop');
  static BuyItFromRetailer = () => I18manager.strings('BuyItFromRetailer');
  static RecommendMe = () => I18manager.strings('RecommendMe');
  static Home = () => I18manager.strings('Home');
  static NearMe = () => I18manager.strings('NearMe');
  static NoDataAdded = () => I18manager.strings('NoDataAdded');
  static MaxCropMsg = () => I18manager.strings('MaxCropMsg');
  static NoStore = () => I18manager.strings('NoStore');
  static Downloading = () => I18manager.strings('Downloading');
  static ApplyFilter = () => I18manager.strings('ApplyFilter');
  static ClearAll = () => I18manager.strings('ClearAll');
  static MyFavorites = () => I18manager.strings('MyFavorites');
  static PleaseSelect = () => I18manager.strings('PleaseSelect');
  static EnterYourState = () => I18manager.strings('EnterYourState');
  static WarningAlert = () => I18manager.strings('WarningAlert');
  static NoDataAvailable = () => I18manager.strings('NoDataAvailable');
  static RemoveFavourite = () => I18manager.strings('RemoveFavourite');
  static ApplicableCrop = () => I18manager.strings('ApplicableCrop');
  static GoBackMessage = () => I18manager.strings('GoBackMessage');
  static StateChangeAlert = () => I18manager.strings('StateChangeAlert');
  static DataLostMsg = () => I18manager.strings('DataLostMsg');
  static FavouriteRemoveMsg = () => I18manager.strings('FavouriteRemoveMsg');
  static NoDataForLanguage = () => I18manager.strings('NoDataForLanguage');
  static DeselectCrop = () => I18manager.strings('DeselectCrop');
  static TranslationNotAvailable = () =>
    I18manager.strings('TranslationNotAvailable');
  static PullDownToSyncData = () => I18manager.strings('PullDownToSyncData');
  static InfoAlert = () => I18manager.strings('InfoAlert');
  static METEOBLUE = () => I18manager.strings('METEOBLUE');
  static version = () => I18manager.strings('version');
  static QrIsInvalid = () => I18manager.strings('QrIsInvalid');
  static ScanProductQrCode = () => I18manager.strings('ScanProductQrCode');
  static DrupalProductPage = () => I18manager.strings('DrupalProductPage');
  static ScanAnotherQrCode = () => I18manager.strings('ScanAnotherQrCode');
  static Variety = () => I18manager.strings('Variety');
  static MinPrice = () => I18manager.strings('MinPrice');
  static MaxPrice = () => I18manager.strings('MaxPrice');
  static ModalPrice = () => I18manager.strings('ModalPrice');
  static MandiRates = () => I18manager.strings('MandiRates');
  static SearchForMarketPlace = () =>
    I18manager.strings('SearchForMarketPlace');
  static ViewMore = () => I18manager.strings('ViewMore');
  static SelectStateDistrict = () => I18manager.strings('SelectStateDistrict');
  static ViewMarketPlace = () => I18manager.strings('ViewMarketPlace');
  static Quintal = () => I18manager.strings('Quintal');
  static quintal = () => I18manager.strings('quintal');
  static UpdatedOn = () => I18manager.strings('UpdatedOn');
  static MarketPlace = () => I18manager.strings('MarketPlace');
  static EnrollCropNow = () => I18manager.strings('EnrollCropNow');
  static DateofSowing = () => I18manager.strings('DateofSowing');
  static DateofTransplant = () => I18manager.strings('DateofTransplant');
  static EditEnrollCrop = () => I18manager.strings('EditEnrollCrop');
  static EnrollCrop = () => I18manager.strings('EnrollCrop');
  static CropName = () => I18manager.strings('CropName');
  static Acrege = () => I18manager.strings('Acrege');
  static Acre = () => I18manager.strings('Acre');
  static CropDuration = () => I18manager.strings('CropDuration');
  static FarmingPractices = () => I18manager.strings('FarmingPractices');
  static SelectDateSowing = () => I18manager.strings('SelectDateSowing');
  static SelectDateTransplant = () =>
    I18manager.strings('SelectDateTransplant');
  static Enroll = () => I18manager.strings('Enroll');
  static Done = () => I18manager.strings('Done');
  static CropCalendar = () => I18manager.strings('CropCalendar');
  static scan_product = () => I18manager.strings('scan_product');
  static successful = () => I18manager.strings('successful');
  static scan_another = () => I18manager.strings('scan_another');
  static succesfully_scanned = () => I18manager.strings('succesfully_scanned');
  static point_earned = () => I18manager.strings('point_earned');
  static error_qr_code = () => I18manager.strings('error_qr_code');
  static enter_manually = () => I18manager.strings('enter_manually');
  static serail_no = () => I18manager.strings('serail_no');
  static gtin_no = () => I18manager.strings('gtin_no');
  static submit = () => I18manager.strings('submit');
  static membership = () => I18manager.strings('membership');
  static scan_to_earn = () => I18manager.strings('scan_to_earn');
  static view_loyalty_history = () =>
    I18manager.strings('view_loyalty_history');
  static total_balance_points = () =>
    I18manager.strings('total_balance_points');
  static how_it_work = () => I18manager.strings('how_it_work');
  static loyalty_history = () => I18manager.strings('loyalty_history');
  static load_more = () => I18manager.strings('load_more');
  static scan_success = () => I18manager.strings('scan_success');
  static points = () => I18manager.strings('points');
  static loyalty_info = () => I18manager.strings('loyalty_info');
  static loyalty_info_grapic = () => I18manager.strings('loyalty_info_grapic');
  static failed = () => I18manager.strings('failed');
  static sort = () => I18manager.strings('sort');
  static view_results = () => I18manager.strings('view_results');
  static clear_all = () => I18manager.strings('clear_all');
  static filter = () => I18manager.strings('filter');
  static manual_entry = () => I18manager.strings('manual_entry');
  static gtin = () => I18manager.strings('gtin');
  static serial_no_product = () => I18manager.strings('serial_no_product');
  static volume = () => I18manager.strings('volume');
  static contact_us_for_support = () =>
    I18manager.strings('contact_us_for_support');
  static correct_serial_no = () => I18manager.strings('correct_serial_no');
  static select_gtin = () => I18manager.strings('select_gtin');
  static no_data_found = () => I18manager.strings('no_data_found');
  static view_more = () => I18manager.strings('view_more');
  static home = () => I18manager.strings('home');
  static support = () => I18manager.strings('support');
  static timeout_msg = () => I18manager.strings('timeout_msg');
  static FarmAreaCalculator = () => I18manager.strings('FarmAreaCalculator');
  static StartGeoFencing = () => I18manager.strings('StartGeoFencing');
  static StopGeoFencing = () => I18manager.strings('StopGeoFencing');
  static StartGeoFencingMsg = () => I18manager.strings('StartGeoFencingMsg');
  static StopGeoFencingMsg = () => I18manager.strings('StopGeoFencingMsg');
  static MyFarmList = () => I18manager.strings('MyFarmList');
  static FenceAnotherFarm = () => I18manager.strings('FenceAnotherFarm');
  static Acerage = () => I18manager.strings('Acerage');
  static TotalFarmArea = () => I18manager.strings('TotalFarmArea');
  static FarmName = () => I18manager.strings('FarmName');
  static DelteFarmMessage = () => I18manager.strings('DelteFarmMessage');
  static DeleteFarmSubMessage = () =>
    I18manager.strings('DeleteFarmSubMessage');
  static Delete = () => I18manager.strings('Delete');
  static NoFarmAdded = () => I18manager.strings('NoFarmAdded');
  static unableToDownload = () => I18manager.strings('unableToDownload');
  static Applied = () => I18manager.strings('Applied');
  static Calendar = () => I18manager.strings('Calendar');
  static ProductName = () => I18manager.strings('ProductName');
  static ThreatName = () => I18manager.strings('ThreatName');
  static RecommendedDosage = () => I18manager.strings('RecommendedDosage');
  static CalendarCompleted = () => I18manager.strings('CalendarCompleted');
  static CalendarCompletedMsg = () =>
    I18manager.strings('CalendarCompletedMsg');
  static Days = () => I18manager.strings('Days');
  static EnrollCropAgain = () => I18manager.strings('EnrollCropAgain');
  static In = () => I18manager.strings('In');
  static Previous = () => I18manager.strings('Previous');
  static Reminders = () => I18manager.strings('Reminders');
  static Tommorow = () => I18manager.strings('Tommorow');
  static ThirdPartyMsg = () => I18manager.strings('ThirdPartyMsg');
  static LoadingMandiRates = () => I18manager.strings('LoadingMandiRates');
  static NoMatchFound = () => I18manager.strings('NoMatchFound');
  static OtherCrops = () => I18manager.strings('OtherCrops');
  static CropEnrolledSuccess = () => I18manager.strings('CropEnrolledSuccess');
  static EnrollmentLostMsg = () => I18manager.strings('EnrollmentLostMsg');
  static AreaCantBeZero = () => I18manager.strings('AreaCantBeZero');
  static Scan = () => I18manager.strings('Scan');
  static ContactRetailer = () => I18manager.strings('ContactRetailer');
  static NewsFeed = () => I18manager.strings('NewsFeed');
  static SomethingWentWrong = () => I18manager.strings('SomethingWentWrong');
  static WelcomeTitle = () => I18manager.strings('WelcomeTitle');
  static WelcomeDescription = () => I18manager.strings('WelcomeDescription');
  static Crop = () => I18manager.strings('crop');
  static Max = () => I18manager.strings('Max');
  static Min = () => I18manager.strings('Min');
  static Week = () => I18manager.strings('week');
  static Month = () => I18manager.strings('months');
  static Year = () => I18manager.strings('year');
  static Custom = () => I18manager.strings('custom');
  static TapOnGraphs = () => I18manager.strings('tapOnGraphs');
  static GraphModalPriceDescription = () =>
    I18manager.strings('graphModalPriceDescription');
  static SeeCPRecommendations = () =>
    I18manager.strings('SeeCPRecommendations');
  static EnrollCropSoon = () => I18manager.strings('EnrollCropSoon');
  static DateRange = () => I18manager.strings('dateRange');
  static DateSelectionValidation = () =>
    I18manager.strings('dateSelectionValidation');
  static DoYouWantUncheck = () => I18manager.strings('DoYouWantUncheck');
  static NewQuery = () => I18manager.strings('NewQuery');
  static SelectCrop = () => I18manager.strings('SelectCrop');
  static Category = () => I18manager.strings('Category');
  static SelectCategory = () => I18manager.strings('SelectCategory');
  static Message = () => I18manager.strings('Message');
  static MessagePlaceHolder = () => I18manager.strings('MessagePlaceHolder');
  static UploadYourFile = () => I18manager.strings('UploadYourFile');
  static RecordMessage = () => I18manager.strings('RecordMessage');
  static SelectFromGallery = () => I18manager.strings('SelectFromGallery');
  static DeleteFileDescription = () =>
    I18manager.strings('DeleteFileDescription');
  static HoldToRecord = () => I18manager.strings('HoldToRecord');
  static AccessToRecording = () => I18manager.strings('AccessToRecording');
  static QuerySent = () => I18manager.strings('QuerySent');
  static QuerySentDescription = () =>
    I18manager.strings('QuerySentDescription');
  static GoBackToHome = () => I18manager.strings('GoBackToHome');
  static Send = () => I18manager.strings('Send');
  static NewQueryFormValidation = () =>
    I18manager.strings('NewQueryFormValidation');
  static QueryDeleted = () => I18manager.strings('QueryDeleted');
  static QueryDeleteMessage = () => I18manager.strings('QueryDeleteMessage');
  static NewQueryTextAreaFormValidation = () =>
    I18manager.strings('NewQueryTextAreaFormValidation');
  static ImageValidationMessage = () =>
    I18manager.strings('ImageValidationMessage');
  static RecorderValidation = () => I18manager.strings('RecorderValidation');
  static ImageFilesExceededValidation = () =>
    I18manager.strings('ImageFilesExceededValidation');
  static VideoFilesExceededValidation = () =>
    I18manager.strings('VideoFilesExceededValidation');
  static AudioFilesExceededValidation = () =>
    I18manager.strings('AudioFilesExceededValidation');
  static FileDeleteError = () => I18manager.strings('FileDeleteError');
  static Notifications = () => I18manager.strings('Notifications');
  static ReadAll = () => I18manager.strings('ReadAll');
  static Notification = () => I18manager.strings('Notification');
  static SelectAll = () => I18manager.strings('SelectAll');
  static NotificationDeleteSubTitle = () =>
    I18manager.strings('NotificationDeleteSubTitle');
  static MarkAsRead = () => I18manager.strings('MarkAsRead');
  static Stores = () => I18manager.strings('Stores');
  static Store = () => I18manager.strings('Store');
  static PrivacyPolicy = () => I18manager.strings('PrivacyPolicy');
  static RequestCopyOfPersonalData = () =>
    I18manager.strings('RequestCopyOfPersonalData');
  static PleaseAcceptTC = () => I18manager.strings('PleaseAcceptTC');
  static ClickTextDetailsTC = () => I18manager.strings('ClickTextDetailsTC');
  static UserConsentStatement = () =>
    I18manager.strings('UserConsentStatement');
  static YouAgreeToGiveConsent = () =>
    I18manager.strings('YouAgreeToGiveConsent');
  static TermsConditionPrivacyData = () =>
    I18manager.strings('TermsConditionPrivacyData');
  static ConsentOnUsingDataMarketing = () =>
    I18manager.strings('ConsentOnUsingDataMarketing');
  static TC = () => I18manager.strings('TC');
  static PrivacyData = () => I18manager.strings('PrivacyData');
  static Close = () => I18manager.strings('Close');
  static IamOver20Years = () => I18manager.strings('IamOver20Years');
  static Accept = () => I18manager.strings('Accept');

  static ConsentForDataMarketingPurpose = () =>
    I18manager.strings('ConsentForDataMarketingPurpose');
  static Rai = () => I18manager.strings('Rai');
  static FarmSize = () => I18manager.strings('FarmSize');
  static ConsentMarketingContent = () =>
    I18manager.strings('ConsentMarketingContent');
  static KeyCrop = () => I18manager.strings('KeyCrop');
  static DateOfBirth = () => I18manager.strings('DateOfBirth');
  static YouWillNotGetMarketingNews = () =>
    I18manager.strings('YouWillNotGetMarketingNews');
  static EditPersonalData = () => I18manager.strings('EditPersonalData');
  static ToSendYourPersonalData = () =>
    I18manager.strings('ToSendYourPersonalData');
  static PleaseEnterEmail = () => I18manager.strings('PleaseEnterEmail');
  static GrowerPersonalInformation = () =>
    I18manager.strings('GrowerPersonalInformation');
  static Confirm = () => I18manager.strings('Confirm');
  static CreateFourDigitPin = () => I18manager.strings('CreateFourDigitPin');
  static RequestSentSuccessfully = () =>
    I18manager.strings('RequestSentSuccessfully');
  static CongratulationsRequestSent = () =>
    I18manager.strings('CongratulationsRequestSent');
  static CancelMembership = () => I18manager.strings('CancelMembership');
  static AreYouSureCancelMembership = () =>
    I18manager.strings('AreYouSureCancelMembership');
  static BuyFromNearestStore = () => I18manager.strings('BuyFromNearestStore');
  static KeyBenifits = () => I18manager.strings('KeyBenifits');
  static ConsentForMarketing = () => I18manager.strings('ConsentForMarketing');
  static ToEditContactTheAuthorityAt = () =>
    I18manager.strings('ToEditContactTheAuthorityAt');
  static MyQueries = () => I18manager.strings('MyQueries');
  static DeletingQueries = () => I18manager.strings('DeletingQueries');
  static DeselectAll = () => I18manager.strings('DeselectAll');
  static no = () => I18manager.strings('no');
  static IsIssueResolved = () => I18manager.strings('IsIssueResolved');
  static NeedSupport1 = () => I18manager.strings('NeedSupport1');
  static NeedSupport2 = () => I18manager.strings('NeedSupport2');
  static QueryDelete7Days = () => I18manager.strings('QueryDelete7Days');
  static RateExperienceMsg = () => I18manager.strings('RateExperienceMsg');
  static BackQueries = () => I18manager.strings('BackQueries');
  static More = () => I18manager.strings('More');
  static QueryResponse = () => I18manager.strings('QueryResponse');
  static ReplyQuery = () => I18manager.strings('ReplyQuery');
  static CallSupport = () => I18manager.strings('CallSupport');
  static FarmLocation = () => I18manager.strings('FarmLocation');

  static Franchise = () => I18manager.strings('Franchise');
  static Open = () => I18manager.strings('Open');
  static ClosesAt = () => I18manager.strings('ClosesAt');
  static Directions = () => I18manager.strings('Directions');
  static OpeaningHours = () => I18manager.strings('OpeaningHours');
  static Apply = () => I18manager.strings('Apply');
  static TypesOfProduct = () => I18manager.strings('TypesOfProduct');
  static DistancePreference = () => I18manager.strings('DistancePreference');
  static KM = () => I18manager.strings('KM');
  static Franchises = () => I18manager.strings('Franchises');
  static NoFranchiseFound = () => I18manager.strings('NoFranchiseFound');
  static FranchisesRetailers = () => I18manager.strings('FranchisesRetailers');
  static LocationTurnedOff = () => I18manager.strings('LocationTurnedOff');
  static LocationTurnedOffDesc = () =>
    I18manager.strings('LocationTurnedOffDesc');
  static EnableLocation = () => I18manager.strings('EnableLocation');
  static Field = () => I18manager.strings('Field');
  static Closed = () => I18manager.strings('Closed');
  static NoDataFound = () => I18manager.strings('NoDataFound');
  static ShareError = () => I18manager.strings('ShareError');
  static From = () => I18manager.strings('From');
  static ListOfStores = () => I18manager.strings('ListOfStores');
  static CallSupportMonToFri = () => I18manager.strings('CallSupportMonToFri');
  static CallSupportIfNeedsSupport = () =>
    I18manager.strings('CallSupportIfNeedsSupport');
  static NewNotificationReceived = () =>
    I18manager.strings('NewNotificationReceived');
  static Select = () => I18manager.strings('Select');
  static TypeHere = () => I18manager.strings('TypeHere');
  static Used = () => I18manager.strings('Used');
  static ContactStore = () => I18manager.strings('ContactStore');
  static RecommendPlantProtection = () =>
    I18manager.strings('RecommendPlantProtection');
  static InvalidEmailOTP = () => I18manager.strings('InvalidEmailOTP');
  static CropHealth = () => I18manager.strings('CropHealth');
  static RecommendedProducts = () => I18manager.strings('RecommendedProducts');
  static DiagnosisRating = () => I18manager.strings('DiagnosisRating');
  static DiagnosisSupportMsg = () => I18manager.strings('DiagnosisSupportMsg');
  static YourPhoto = () => I18manager.strings('YourPhoto');
  static PlantixImages = () => I18manager.strings('PlantixImages');
  static RatingFeedbackHeader = () =>
    I18manager.strings('RatingFeedbackHeader');
  static RatingFeedbackSubheader = () =>
    I18manager.strings('RatingFeedbackSubheader');
  static RatingThanksHeader = () => I18manager.strings('RatingThanksHeader');
  static FeedSubmitted = () => I18manager.strings('FeedSubmitted');
  static DetailedDiagnosis = () => I18manager.strings('DetailedDiagnosis');
  static PathogenClass = () => I18manager.strings('PathogenClass');
  static PreventiveMeasures = () => I18manager.strings('PreventiveMeasures');
  static ScientificName = () => I18manager.strings('ScientificName');
  static Symptoms = () => I18manager.strings('Symptoms');
  static TreatmentChemical = () => I18manager.strings('TreatmentChemical');
  static TreatmentOrganic = () => I18manager.strings('TreatmentOrganic');
  static Trigger = () => I18manager.strings('Trigger');
  static DiagnoseTips = () => I18manager.strings('DiagnoseTips');
  static DiagnoseTipsPoints = () => I18manager.strings('DiagnoseTipsPoints');
  static Okay = () => I18manager.strings('Okay');
  static PreviousScans = () => I18manager.strings('PreviousScans');
  static Diagnosis = () => I18manager.strings('Diagnosis');
  static TakeNewPicture = () => I18manager.strings('TakeNewPicture');
  static MultipleCropsHeadingPopup = () =>
    I18manager.strings('MultipleCropsHeadingPopup');
  static UploadInProgress = () => I18manager.strings('UploadInProgress');
  static DetectingProgress = () => I18manager.strings('DetectingProgress');
  static FindingSolutions = () => I18manager.strings('FindingSolutions');
  static MultipleDiseaseInfoText = () =>
    I18manager.strings('MultipleDiseaseInfoText');
  static DiseaseItemInfoText = () => I18manager.strings('DiseaseItemInfoText');
  static PlantixCardTitle = () => I18manager.strings('PlantixCardTitle');
  static PlantixCardSubTitle = () => I18manager.strings('PlantixCardSubTitle');
  static ScanPlant = () => I18manager.strings('ScanPlant');
  static OurSolutionsWithData = () =>
    I18manager.strings('OurSolutionsWithData');
  static OurSolutionsWithoutData = () =>
    I18manager.strings('OurSolutionsWithoutData');
  static unknownHealthDesc = () => I18manager.strings('unknownHealthDesc');
  static healthyCropTitle = () => I18manager.strings('healthyCropTitle');
  static videos = () => I18manager.strings('Videos');
  static ChannelDescription = () => I18manager.strings('channelDescription');
  static ChannelName = () => I18manager.strings('channelName');
  static ChannelNameSubTitle = () => I18manager.strings('channelNameSubTitle');
  static NewVideosFeeds = () => I18manager.strings('NewVideosFeeds');
  static FarmingExploration = () => I18manager.strings('FarmingExploration');
  static NoChannelFound = () => I18manager.strings('NoChannelFound');
  /** Ecommerce translation begin */
  static ExpectedDeliveryAddress = () =>
    I18manager.strings('ExpectedDeliveryAddress');
  static chooseFarmLocation = () => I18manager.strings('chooseFarmLocation');
  static Area = () => I18manager.strings('Area');
  static Province = () => I18manager.strings('Province');
  static SelectArea = () => I18manager.strings('SelectArea');
  static selectSavedAddress = () => I18manager.strings('selectSavedAddress');
  static LetsOrder = () => I18manager.strings('LetsOrder');
  static locationNotServicable = () =>
    I18manager.strings('locationNotServicable');
  static changeLocationMessage = () =>
    I18manager.strings('changeLocationMessage');
  static GoToFranchiseMessage = () =>
    I18manager.strings('GoToFranchiseMessage');
  static ChangeLocation = () => I18manager.strings('ChangeLocation');
  static EnterLocation = () => I18manager.strings('EnterLocation');
  static GoToFranchise = () => I18manager.strings('GoToFranchise');
  static chooseDeliveryLocation = () =>
    I18manager.strings('chooseDeliveryLocation');
  static Shop = () => I18manager.strings('Shop');
  static SearchProducts = () => I18manager.strings('SearchProducts');
  static DeliveryLocation = () => I18manager.strings('DeliveryLocation');
  static ShopByCategories = () => I18manager.strings('ShopByCategories');
  static Categories = () => I18manager.strings('Categories');
  static AddToCart = () => I18manager.strings('AddToCart');
  static RelatedProducts = () => I18manager.strings('RelatedProducts');
  static cartSuccessMessage = () => I18manager.strings('cartSuccessMessage');
  static oneProductAddedMsg = () => I18manager.strings('oneProductAddedMsg');
  static Herbs = () => I18manager.strings('Herbs');
  static Weight = () => I18manager.strings('Weight');
  static CropCategorySelectMsg = () =>
    I18manager.strings('CropCategorySelectMsg');
  static selectCrop = () => I18manager.strings('selectCrop');
  static selectCategory = () => I18manager.strings('selectCategory');
  static MyCart = () => I18manager.strings('MyCart');
  static Invoice = () => I18manager.strings('Invoice');
  static Submit = () => I18manager.strings('Submit');
  static CommentSubmitted = () => I18manager.strings('CommentSubmitted');
  static CommentSentMessage = () => I18manager.strings('CommentSentMessage');
  static Quantity = () => I18manager.strings('Quantity');
  static DeliveryAddress = () => I18manager.strings('DeliveryAddress');
  static AmountToPay = () => I18manager.strings('AmountToPay');
  static PaymentMethod = () => I18manager.strings('PaymentMethod');
  static EstimatedDelivery = () => I18manager.strings('EstimatedDelivery');
  static Order = () => I18manager.strings('Order');
  static AddComments = () => I18manager.strings('AddComments');
  static RepeatOrder = () => I18manager.strings('RepeatOrder');
  static ViewDetails = () => I18manager.strings('ViewDetails');
  static DateofPurchase = () => I18manager.strings('DateofPurchase');
  static OrderHistory = () => I18manager.strings('OrderHistory');
  static OngoingOrders = () => I18manager.strings('OngoingOrders');
  static OrderSearchPlaceholder = () =>
    I18manager.strings('OrderSearchPlaceholder');
  static MyOrders = () => I18manager.strings('MyOrders');
  static PlaceOrder = () => I18manager.strings('PlaceOrder');
  static CashChangeRequest = () => I18manager.strings('CashChangeRequest');
  static COD = () => I18manager.strings('COD');
  static NextPaymentBtn = () => I18manager.strings('NextPaymentBtn');
  static AddNewAddress = () => I18manager.strings('AddNewAddress');
  static TypeHerePlaceholder = () => I18manager.strings('TypeHerePlaceholder');
  static SpecialInstruction = () => I18manager.strings('SpecialInstruction');
  static SelectShippingAddress = () =>
    I18manager.strings('SelectShippingAddress');
  static Payment = () => I18manager.strings('Payment');
  static DeliveryInformation = () => I18manager.strings('DeliveryInformation');
  static Remove = () => I18manager.strings('Remove');
  static CartProductNotAvailable = () =>
    I18manager.strings('CartProductNotAvailable');
  static CheckOut = () => I18manager.strings('CheckOut');
  static EnterPromoCodePlaceholder = () =>
    I18manager.strings('EnterPromoCodePlaceholder');
  static MultipleCodesApplied = () =>
    I18manager.strings('MultipleCodesApplied');
  static Total = () => I18manager.strings('Total');
  static DeliveryFee = () => I18manager.strings('DeliveryFee');
  static Subtotal = () => I18manager.strings('Subtotal');
  static OrderSummary = () => I18manager.strings('OrderSummary');
  static Discount = () => I18manager.strings('Discount');
  static PromoCode = () => I18manager.strings('PromoCode');
  static TobeCalculated = () => I18manager.strings('TobeCalculated');
  static AddressNotDeliverable = () =>
    I18manager.strings('AddressNotDeliverable');
  static RequestedAmountGreater = () =>
    I18manager.strings('RequestedAmountGreater');
  static Free = () => I18manager.strings('Free');
  static ChooseYourArea = () => I18manager.strings('ChooseYourArea');
  static EnterFirstName = () => I18manager.strings('EnterFirstName');
  static EnterLastName = () => I18manager.strings('EnterLastName');
  static AddressLine1 = () => I18manager.strings('AddressLine1');
  static EnterAddressLine1 = () => I18manager.strings('EnterAddressLine1');
  static AddressLine2 = () => I18manager.strings('AddressLine2');
  static EnterAddressLine2 = () => I18manager.strings('EnterAddressLine2');
  static MakeDefault = () => I18manager.strings('MakeDefault');
  static SaveAddress = () => I18manager.strings('SaveAddress');
  static WarningYouCannotAddAddress = () =>
    I18manager.strings('WarningYouCannotAddAddress');
  static MaximumAddressesAdded = () =>
    I18manager.strings('MaximumAddressesAdded');
  static MyDeliveryAddresses = () => I18manager.strings('MyDeliveryAddresses');
  static MarkDefault = () => I18manager.strings('MarkDefault');
  static Default = () => I18manager.strings('Default');
  static RateProducts = () => I18manager.strings('RateProducts');
  static CheckoutMessage = () => I18manager.strings('CheckoutMessage');
  static ViewYourOrder = () => I18manager.strings('ViewYourOrder');
  static ThankYou = () => I18manager.strings('ThankYou');
  static CheckoutSuccessMessage = () =>
    I18manager.strings('CheckoutSuccessMessage');
  static CartItemsErrorMessage = () =>
    I18manager.strings('CartItemsErrorMessage');
  static DefaultAddress = () => I18manager.strings('DefaultAddress');
  static AllAddress = () => I18manager.strings('AllAddress');
  static ChangeLocationWarningMessage = () =>
    I18manager.strings('ChangeLocationWarningMessage');
  static PleaseSelectShippingAddress = () =>
    I18manager.strings('PleaseSelectShippingAddress');
  static EditAddress = () => I18manager.strings('EditAddress');
  static Items = () => I18manager.strings('Items');
  static NotDeliverableAddress = () =>
    I18manager.strings('NotDeliverableAddress');
  static City = () => I18manager.strings('City');
  static MyCartPriceChangedErrorMessage = () =>
    I18manager.strings('MyCartPriceChangedErrorMessage');
  static MyCartInvalidVoucherErrorMessage = () =>
    I18manager.strings('MyCartInvalidVoucherErrorMessage');
  static MyCartPriceAndInvalidVoucherErrorMessage = () =>
    I18manager.strings('MyCartPriceAndInvalidVoucherErrorMessage');
  static ByName = () => I18manager.strings('ByName');
  static NoSearchResultFound = () => I18manager.strings('NoSearchResultFound');
  static ChooseCityVillage = () => I18manager.strings('ChooseCityVillage');
  static Rupees = () => I18manager.strings('Rupees');
  static HomeShopTitle = () => I18manager.strings('HomeShopTitle');
  static StoreDetails = () => I18manager.strings('StoreDetails');
  static CallRetailer = () => I18manager.strings('CallRetailer');
  static validNoError = () => I18manager.strings('validNoError');
  static SelectEcommerceCategory = () =>
    I18manager.strings('SelectEcommerceCategory');
  static history = () => I18manager.strings('history');
  static ViewCart = () => I18manager.strings('ViewCart');
  static addressNotServicable = () =>
    I18manager.strings('addressNotServicable');
  static ChangeAddress = () => I18manager.strings('ChangeAddress');
  /** Ecommerce translation end */
  static CallSupportDisabledHomeTitle = () =>
    I18manager.strings('CallSupportDisabledHomeTitle');
  static CallSupportDisabledHomeSubTitle = () =>
    I18manager.strings('CallSupportDisabledHomeSubTitle');
  static Services = () => I18manager.strings('Services');
  static SetOTP = () => I18manager.strings('SetOTP');
  static ScanProductCardSliderDesc = () =>
    I18manager.strings('ScanProductCardSliderDesc');
  static ShopNow = () => I18manager.strings('ShopNow');
  static ShopNowSliderDescription = () =>
    I18manager.strings('ShopNowSliderDescription');
  static Retry = () => I18manager.strings('Retry');
  static UnableTOLoadWeather = () => I18manager.strings('UnableTOLoadWeather');
  static Warning = () => I18manager.strings('Warning');
  static Info = () => I18manager.strings('Info');
  static Closest = () => I18manager.strings('Closest');
  static health_unknown = () => I18manager.strings('health_unknown');
  static health_healthy = () => I18manager.strings('health_healthy');
  static health_unhealthy = () => I18manager.strings('health_unhealthy');
  static cameraPermission = () => I18manager.strings('cameraPermission');
  static cameraPermissionDescription = () =>
    I18manager.strings('cameraPermissionDescription');
  static grantPermission = () => I18manager.strings('grantPermission');
  static locationPermission = () => I18manager.strings('locationPermission');
  static locationPermissionDescription = () =>
    I18manager.strings('locationPermissionDescription');
  static writePermission = () => I18manager.strings('writePermission');
  static writePermissionDescription = () =>
    I18manager.strings('writePermissionDescription');
  static NoInternetBand = () => I18manager.strings('NoInternetBand');

  // needs to add all country phrase
  static product = () => I18manager.strings('product');
  static Health = () => I18manager.strings('Health');
  static Image = () => I18manager.strings('Image');

  static QueryWithNoCallSupportMsg = () =>
    I18manager.strings('QueryWithNoCallSupportMsg');
  static MultipleDiagnosisPopupTitle = () =>
    I18manager.strings('MultipleDiagnosisPopupTitle');
  static MultipleDiagnosisPopupDetail = () =>
    I18manager.strings('MultipleDiagnosisPopupDetail');
  static IncompleteScanTitle = () => I18manager.strings('IncompleteScanTitle');
  static NotNow = () => I18manager.strings('NotNow');
  static IncompleteScanPopupTitle = () =>
    I18manager.strings('IncompleteScanPopupTitle');
  static IncompleteScanPopupMsg = () =>
    I18manager.strings('IncompleteScanPopupMsg');
  static GotIt = () => I18manager.strings('GotIt');
  static CapturedImageOfflineMsg = () =>
    I18manager.strings('CapturedImageOfflineMsg');

  static FailedToLoadVideo = () => I18manager.strings('FailedToLoadVideo');
  static FailedToLoadImage = () => I18manager.strings('FailedToLoadImage');
  static DiagnosisWattsAppSupportMsg = () =>
    I18manager.strings('DiagnosisWattsAppSupportMsg');
  static SupportDescForOrder = () => I18manager.strings('SupportDescForOrder');
  static ChatWithUs = () => I18manager.strings('ChatWithUs');
  static Add = () => I18manager.strings('Add');
  static CropDetectedMsg = () => I18manager.strings('CropDetectedMsg');
  static CropDetectTitle = () => I18manager.strings('CropDetectTitle');
  static MoreResultsText = () => I18manager.strings('MoreResultsText');

  static scan_result = () => I18manager.strings('scan_result');
  static scan_another_product = () =>
    I18manager.strings('scan_another_product');
  static error_message = () => I18manager.strings('error_message');
  static alert = () => I18manager.strings('alert');
  static no_network = () => I18manager.strings('no_network');
  static parameter = () => I18manager.strings('parameter');
  static value = () => I18manager.strings('value');
  static marketedBy = () => I18manager.strings('marketedBy');
  static registrationNumber = () => I18manager.strings('registrationNumber');
  static batchNumber = () => I18manager.strings('batchNumber');
  static manufacturingDate = () => I18manager.strings('manufacturingDate');
  static toxicity = () => I18manager.strings('toxicity');
  static toxicityImage = () => I18manager.strings('toxicityImage');
  static expiryDate = () => I18manager.strings('expiryDate');
  static serialNumber = () => I18manager.strings('serialNumber');
  static productName = () => I18manager.strings('productName');
  static branchName = () => I18manager.strings('branchName');
  static cautionarySymbol = () => I18manager.strings('cautionarySymbol');
  static customerCareNumber = () => I18manager.strings('customerCareNumber');
  static antidoteStatement = () => I18manager.strings('antidoteStatement');
  static manufacturedAt = () => I18manager.strings('manufacturedAt');
  static uniqueIdentifier = () => I18manager.strings('uniqueIdentifier');
  static leaflet = () => I18manager.strings('leaflet');
  static product_aassurance = () => I18manager.strings('product_aassurance');
  static pdf_name = () => I18manager.strings('pdf_name');
  static product_check = () => I18manager.strings('product_check');
  static permission_use_camera_title = () =>
    I18manager.strings('permission_use_camera_title');
  static permission_use_camera_dialog = () =>
    I18manager.strings('permission_use_camera_dialog');
  static camera_error_message = () =>
    I18manager.strings('camera_error_message');
  static scanning_timeout_message = () =>
    I18manager.strings('scanning_timeout_message');
  static camera_permission_denied_message = () =>
    I18manager.strings('camera_permission_denied_message');
  static location_permission_denied_message = () =>
    I18manager.strings('location_permission_denied_message');
  static pa_info_alert = () => I18manager.strings('pa_info_alert');
  static pa_location_message = () => I18manager.strings('pa_location_message');
  static pa_location_ok = () => I18manager.strings('pa_location_ok');
  static pa_cancel = () => I18manager.strings('pa_cancel');
  static Callus = () => I18manager.strings('Callus');
  static CropDownloadInProgress = () =>
    I18manager.strings('CropDownloadInProgress');
  static AgreeToOur = () => I18manager.strings('AgreeToOur');
  static ByContinue = () => I18manager.strings('ByContinue');
  static TermsConditionsLogin = () =>
    I18manager.strings('TermsConditionsLogin');
  // Refer & earn begins
  static ReferEarn = () => I18manager.strings('ReferEarn');
  static Refer = () => I18manager.strings('Refer');
  static ReferContent = () => I18manager.strings('ReferContent');
  static ReferContentBody = () => I18manager.strings('ReferContentBody');
  static ReferNow = () => I18manager.strings('ReferNow');
  static YourReferralCode = () => I18manager.strings('YourReferralCode');
  static Congratulations = () => I18manager.strings('Congratulations');
  static ReferralApplySuccess = () =>
    I18manager.strings('ReferralApplySuccess');
  static EnterReferralCode = () => I18manager.strings('EnterReferralCode');
  static ReferralCodeCopiedSuccessfully = () =>
    I18manager.strings('ReferralCodeCopiedSuccessfully');
  static ReferEarnShareMessage = () =>
    I18manager.strings('ReferEarnShareMessage');
  static InvalidReferralMessage = () =>
    I18manager.strings('InvalidReferralMessage');
  // Refer & earn end
  static exampleImages = () => I18manager.strings('exampleImages');
  static example1 = () => I18manager.strings('example1');
  static example2 = () => I18manager.strings('example2');
  static TeamSyngenta = () => I18manager.strings('TeamSyngenta');
  // ecommerce start
  static orderFromBelowFranchise = () =>
    I18manager.strings('orderFromBelowFranchise');
  static NotServiceable = () => I18manager.strings('NotServiceable');
  static chooseDifferentLocation = () =>
    I18manager.strings('chooseDifferentLocation');
  static tryAnotherDeliveryAddress = () =>
    I18manager.strings('tryAnotherDeliveryAddress');
  static LocationRequired = () => I18manager.strings('LocationRequired');
  static DeliverLocation = () => I18manager.strings('DeliverLocation');
  static isNotServiceable = () => I18manager.strings('isNotServiceable!');
  static NotServiceableLocation = () =>
    I18manager.strings('NotServiceableLocation');
  static enableLocationMsg = () => I18manager.strings('enableLocationMsg');
  static CurrentLocation = () => I18manager.strings('CurrentLocation');
  static orderFromFranchise = () => I18manager.strings('orderFromFranchise');
  static chooseDifferentAddress = () =>
    I18manager.strings('chooseDifferentAddress');
  // ecommerce end
  static LoyalityFeature = () => I18manager.strings('LoyalityFeature');
  static FeatureNotAvailable = () => I18manager.strings('FeatureNotAvailable');
  static ForOtherConcerns = () => I18manager.strings('ForOtherConcerns');
  static ClickBelowToRaiseQuery = () =>
    I18manager.strings('ClickBelowToRaiseQuery');
  static ForCropProtectionProblem = () =>
    I18manager.strings('ForCropProtectionProblem');
  static CallOnBelowNumber = () => I18manager.strings('CallOnBelowNumber');
  static RaiseAQuery = () => I18manager.strings('RaiseAQuery');
  static emplyListCallSupport = () =>
    I18manager.strings('emplyListCallSupport');
  static notificationHeader = () => I18manager.strings('notificationHeader');
  static unknownHealthMsg = () => I18manager.strings('unknownHealthMsg');
  static ForMoreSupport = () => I18manager.strings('ForMoreSupport');
  static NewVersion = () => I18manager.strings('NewVersion');
  static UpdateOlderVersion = () => I18manager.strings('UpdateOlderVersion');
  static Update = () => I18manager.strings('Update');
  static queryIsCloseNow = () => I18manager.strings('queryIsCloseNow');
  static ThanksMsg = () => I18manager.strings('ThanksMsg');
  static FullName = () => I18manager.strings('FullName');
  // seed calculator
  static SelectVariety = () => I18manager.strings('SelectVariety');
  static LandArea = () => I18manager.strings('LandArea');
  static LandSpacing = () => I18manager.strings('LandSpacing');
  static SingleRow = () => I18manager.strings('SingleRow');
  static DoubleRow = () => I18manager.strings('DoubleRow');
  static SeedCalculator = () => I18manager.strings('SeedCalculator');
  static SeedCalculatorNotes = () => I18manager.strings('SeedCalculatorNotes');
  static UseRecommendedSpacing = () =>
    I18manager.strings('UseRecommendedSpacing');
  static UseManualSpacing = () => I18manager.strings('UseManualSpacing');
  static PlanToPlant = () => I18manager.strings('PlanToPlant');
  static RowToRow = () => I18manager.strings('RowToRow');
  static YouWantToBuy = () => I18manager.strings('YouWantToBuy');
  static Seedlings = () => I18manager.strings('Seedlings');
  static DoubleRowNotAvailable = () =>
    I18manager.strings('DoubleRowNotAvailable');
  static LandAreaError = () => I18manager.strings('LandAreaError');
  static SpacingError = () => I18manager.strings('SpacingError');
  static LandSpacingError = () => I18manager.strings('LandSpacingError');
  static PlantToPlantError = () => I18manager.strings('PlantToPlantError');
  static RowToRowError = () => I18manager.strings('RowToRowError');
  static SeedsError = () => I18manager.strings('SeedsError');
  static Detail = () => I18manager.strings('Detail');
  static AmountOf = () => I18manager.strings('AmountOf');
  static needed = () => I18manager.strings('needed');
  static PlantSpacing = () => I18manager.strings('PlantSpacing');
  static SpacingRow = () => I18manager.strings('SpacingRow');
  static PackageSize = () => I18manager.strings('PackageSize');
  static RequiredNoOfPkg = () => I18manager.strings('RequiredNoOfPkg');
  static InputBasedOn = () => I18manager.strings('InputBasedOn');
  static SeedCalculatorDisclaimer = () =>
    I18manager.strings('SeedCalculatorDisclaimer');
  static Packages = () => I18manager.strings('Packages');
  // seed calculator ends
  static NearestRetailer = () => I18manager.strings('NearestRetailer');
  static SavedAddress = () => I18manager.strings('SavedAddress');
  static SelectLocation = () => I18manager.strings('SelectLocation');
  // mpin start
  static mpin = () => I18manager.strings('mpin');
  static mPinDesc = () => I18manager.strings('mPinDesc');
  static ForgotMPIN = () => I18manager.strings('ForgotMPIN');
  static WhatIsMpin = () => I18manager.strings('WhatIsMpin');
  static MpinInfoDesc = () => I18manager.strings('MpinInfoDesc');
  static InvalidMpin = () => I18manager.strings('InvalidMpin');
  static Creatempin = () => I18manager.strings('Creatempin');
  static CreatempinDesc = () => I18manager.strings('CreatempinDesc');
  // mpin end
  static DownloadAppLinkText = () => I18manager.strings('DownloadAppLinkText');
  // App Feedback Begins
  static LovedApp = () => I18manager.strings('LovedApp');
  static FeedbackToImprove = () => I18manager.strings('FeedbackToImprove');
  static Great = () => I18manager.strings('Great');
  static HadIssues = () => I18manager.strings('HadIssues');
  static TellUsWhatWentWrong = () => I18manager.strings('TellUsWhatWentWrong');
  static NoThankYou = () => I18manager.strings('NoThankYou');
  static ThanksForFeedback = () => I18manager.strings('ThanksForFeedback');
  static FeedbackSubmitted = () => I18manager.strings('FeedbackSubmitted');
  // App Feedback Ends
  // Centrigo Begins
  static WelcomeCentrigoText = () => I18manager.strings('WelcomeCentrigoText');
  static ThanksForRegister = () => I18manager.strings('ThanksForRegister');
  static ExploreNow = () => I18manager.strings('ExploreNow');
  static ExploreLater = () => I18manager.strings('ExploreLater');
  static CentrigoCenter = () => I18manager.strings('CentrigoCenter');
  static CentrigoCenterDetails = () =>
    I18manager.strings('CentrigoCenterDetails');
  static AvailableServices = () => I18manager.strings('AvailableServices');
  static OngoingServices = () => I18manager.strings('OngoingServices');
  static ServiceHistory = () => I18manager.strings('ServiceHistory');
  static Years = () => I18manager.strings('Years');
  static Season = () => I18manager.strings('Season');
  static Description = () => I18manager.strings('Description');
  static Benefits = () => I18manager.strings('Benefits');
  static HowCentrigoWillHelpYou = () =>
    I18manager.strings('HowCentrigoWillHelpYou');
  static BookNow = () => I18manager.strings('BookNow');
  static SubmitRequest = () => I18manager.strings('SubmitRequest');
  static RequestSubmittedSuccessfully = () =>
    I18manager.strings('RequestSubmittedSuccessfully');
  static RequestSuccessfullyInfoText = () =>
    I18manager.strings('RequestSuccessfullyInfoText');
  static CurrentStatus = () => I18manager.strings('CurrentStatus');
  static Details = () => I18manager.strings('Details');
  static YourAcceptanceTermsAndConditions = () =>
    I18manager.strings('YourAcceptanceTermsAndConditions');
  static WhatWeDo = () => I18manager.strings('WhatWeDo');
  static Date = () => I18manager.strings('Date');
  static ServiceDetails = () => I18manager.strings('ServiceDetails');
  static EmptyHistoryText = () => I18manager.strings('EmptyHistoryText');
  static RequestedOn = () => I18manager.strings('RequestedOn');
  static ServiceInformation = () => I18manager.strings('ServiceInformation');
  static ServiceCost = () => I18manager.strings('ServiceCost');
  static AreYouSureSubmitRequest = () =>
    I18manager.strings('AreYouSureSubmitRequest');
  static ContactNumber = () => I18manager.strings('ContactNumber');
  static centrigoCallSupportMsg = (
    startTime: string,
    endTime: string,
    startDay: string,
    endDay: string
  ) =>
    I18n.t('centrigoCallSupportMsg', { startTime, endTime, startDay, endDay });
  static changeService = () => I18manager.strings('changeService');
  static changeCrop = () => I18manager.strings('changeCrop');
  static ContactsameServiceWarningMsgNumber = () =>
    I18manager.strings('sameServiceWarningMsg');
  static UpsSorry = () => I18manager.strings('UpsSorry');
  static requestServiceTryAgainMsg = () =>
    I18manager.strings('requestServiceTryAgainMsg');
  static connectionLostDesc = () => I18manager.strings('connectionLostDesc');
  static connectionLostTitle = () => I18manager.strings('connectionLostTitle');
  static seconds = () => I18manager.strings('seconds');
  static Oops = () => I18manager.strings('oops');
  static sameServiceWarningMsg = () =>
    I18manager.strings('sameServiceWarningMsg');
  static internetConnectionLost = () =>
    I18manager.strings('internetConnectionLost');
  static internetLostInfo = () => I18manager.strings('internetLostInfo');
  static duplicateRequest = () => I18manager.strings('duplicateRequest');
  static unableConnectService = () =>
    I18manager.strings('unableConnectService');
  static checkConnectionOrTryAgain = () =>
    I18manager.strings('checkConnectionOrTryAgain');
  // Centrigo Ends
  // Booking tool start
  static BookingTool = () => I18manager.strings('BookingTool');
  static ServiceName = () => I18manager.strings('ServiceName');
  static AdditionalInformation = () =>
    I18manager.strings('AdditionalInformation');
  static Support = () => I18manager.strings('Support');
  static RequestNow = () => I18manager.strings('RequestNow');
  static BookingToolServiceCost = () =>
    I18manager.strings('BookingToolServiceCost');
  static BookingToolDesc = () => I18manager.strings('BookingToolDesc');
  static BookingToolBenefitsDesc = () =>
    I18manager.strings('BookingToolBenefitsDesc');
  static BookingToolAdditionalInfo = () =>
    I18manager.strings('BookingToolAdditionalInfo');
  static BookingToolConfirmation = () =>
    I18manager.strings('BookingToolConfirmation');
  static BookingToolWork = () => I18manager.strings('BookingToolWork');
  static BookingToolWorkDesc = () => I18manager.strings('BookingToolWorkDesc');
  // Booking tool end
  static Exit = () => I18manager.strings('Exit');
  static ContinueShopping = () => I18manager.strings('ContinueShopping');
  static CartValueLessDescription = () =>
    I18manager.strings('CartValueLessDescription');
  static CartValueLessTitle = () => I18manager.strings('CartValueLessTitle');
  static additionalRecommendedProducts = () =>
    I18manager.strings('additionalRecommendedProducts');
  static BookingService = () => I18manager.strings('BookingService');
  static SeedTreatment = () => I18manager.strings('SeedTreatment');
  static BookYourSeedTreatmentService = () =>
    I18manager.strings('BookYourSeedTreatmentService');
  static KnowmoreDetails = () => I18manager.strings('KnowmoreDetails');
  static we = () => I18manager.strings('we');
  static and = () => I18manager.strings('and');
  static DownloadPrivacyPolicy = () =>
    I18manager.strings('DownloadPrivacyPolicy');
  static Download = () => I18manager.strings('Download');
  static AddAddressErrorMessage = () =>
    I18manager.strings('AddAddressErrorMessage');
  // NEW FIGMA constants Starts
  static WelcomeText = () => I18manager.strings('welcomeText');
  static EnterDetail = () => I18manager.strings('enterDetail');
  static EnterFullName = () => I18manager.strings('enterFullName');
  static CallSupportProduct = () => I18manager.strings('CallSupportProduct');
  static CallSupportOther = () => I18manager.strings('CallSupportOther');
  static VerifyWithOtp = () => I18manager.strings('verifyWithOtp');
  static SentViaSms = () => I18manager.strings('sentViaSms');
  static AutofillTry = () => I18manager.strings('AutofillTry');
  static LoginSucesssText = () => I18manager.strings('LoginSucesssText');
  static Iagree = () => I18manager.strings('i_agree');
  static NotRecievedOtp = () => I18manager.strings('not_recieved_otp');
  static Downloadsuccess = () => I18manager.strings('Downloadsuccess');
  static ToolTipText = () => I18manager.strings('toolTipText');
  // NEW FIGMA constants Ends
  // Age Range Popup
  static AgeRangeTitle = () => I18manager.strings('ageRangeTitle');
  static AgeRangeSubTitle = () => I18manager.strings('AgeRangeSubTitle');

  // Product Promotion
  static ProductDetails = () => I18manager.strings('productDetails');

  // NEW UI TRANSLATIONS BEGINS
  // Language Screen
  static SelectPrefferedLang = () => I18manager.strings('SelectPrefferedLang');
  static LanguageSubTitle = () => I18manager.strings('LanguageSubTitle');
  // Onboarding Screen
  static GetStarted = () => I18manager.strings('GetStarted');
  static Skip = () => I18manager.strings('Skip');
  static OurServices = () => I18manager.strings('OurServices');
  static ViewLess = () => I18manager.strings('ViewLess');

  // NEW UI TRANSLATIONS ENDS
}
