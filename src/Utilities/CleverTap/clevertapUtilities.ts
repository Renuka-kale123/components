import CleverTap from 'clevertap-react-native';
import { I18manager } from '../Localization/i18n';

const getUserData = (userData: any) => {
  let phone = userData?.mobileNo;
  if (phone.trim().length > 10) {
    phone = phone.substring(2, phone.length);
  }
  return {
    Name: userData?.firstName + ' ' + userData?.lastName,
    Phone: '+91' + phone,
    Identity: userData?.id,
    Language: I18manager.getAppLanguage(),
    DistrictName: userData?.enDistrictName,
    StateName: userData?.enStateName,
    TalukaName: userData?.enTalukaName,
    Pincode: userData?.pinCode,
    Latitude: userData?.latitude,
    Longitude: userData?.longitude,
    Acreage: userData?.acreage
  };
};

export const setProfileToCleverTap = (profileData: any) => {
  const profile = getUserData(profileData);
  CleverTap.onUserLogin(profile);
  if (profileData?.longitude && profileData?.latitude) {
    CleverTap.setLocation(profileData?.latitude, profileData?.longitude);
  }
};

export const updateProfileToCleverTap = (userData: any) => {
  const profile = getUserData(userData);
  CleverTap.profileSet(profile);
  if (userData?.longitude && userData?.latitude) {
    CleverTap.setLocation(userData?.latitude, userData?.longitude);
  }
};

export const updateClevertapWithMultipleValues = (
  multipleArr: any[],
  propertyName: string
) => {
  // To set a multi-value property
  CleverTap.profileSetMultiValuesForKey(multipleArr, propertyName);
};

export const removeClevertapWithMultipleValues = (propertyName: string) => {
  // To set a multi-value property
  CleverTap.profileRemoveValueForKey(propertyName);
};

export const addClevertapWithMultipleValues = (
  multipleArr: any[],
  propertyName: string
) => {
  // To set a multi-value property
  CleverTap.profileAddMultiValuesForKey(multipleArr, propertyName);
};

export const updateUserProfileAttributes = (userAttributes: any) => {
  CleverTap.profileSet(userAttributes);
};
