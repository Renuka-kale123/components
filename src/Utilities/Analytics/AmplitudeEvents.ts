import moment from 'moment';
import { getAgeFromDob } from '../DateTimeUtil';
import Database from './../../ServiceWorkers/DatabaseManager/DatabaseHelper';
import { DATA_BASE_SCHEMA } from './../../ServiceWorkers/DatabaseManager/DBConstant';
import { trackEvent } from './../../Utilities/Analytics';
import { DEEP_LINK_EVENT } from './EventConstant';

export default class AmplitudeEvents {
  static amplitudeEventsInstance = new AmplitudeEvents();

  referEarnEvents(
    eventName: string,
    isAddProperties = true,
    isReferralPage = false,
    additionalProperties = {}
  ) {
    let savedCropData = Database.sharedDb.getData(
      DATA_BASE_SCHEMA.SMALLHOLDERCROPS
    ) as any;

    savedCropData = savedCropData.filter((crop: any) => {
      return crop.isCompletelyDownloaded;
    });
    let cropName = '';
    savedCropData.map((item: any) => {
      cropName += `${item?.nameTranslation ?? ''},`;
    });

    const userInfo = Database.sharedDb.getData(
      DATA_BASE_SCHEMA.SMALLHOLDERUSERPROFILE
    ) as any;
    const talukaName: string = userInfo[0]?.talukaName ?? '';
    const districtName: string = userInfo[0]?.districtName ?? '';
    const stateName: string = userInfo[0]?.stateName ?? '';
    const dob: string = userInfo[0]?.birthDate ?? '';

    const eventProperties: any = {
      CropInfo:
        cropName.length > 0 ? cropName.substring(0, cropName.length - 1) : '',
      State: stateName,
      Taluka: talukaName,
      District: districtName,
      ...(isReferralPage && {
        Age: getAgeFromDob(dob),
        Month: moment().format('MMMM')
      })
    };
    if (isAddProperties) {
      trackEvent(eventName, {
        ...eventProperties,
        ...additionalProperties
      });
    } else {
      trackEvent(eventName);
    }
  }

  seedCalculatorEvent = (
    eventName: string,
    isAddProperties = true,
    additionalProperties = {}
  ) => {
    const userInfo = Database.sharedDb.getData(
      DATA_BASE_SCHEMA.SMALLHOLDERUSERPROFILE
    ) as any;
    const talukaName: string = userInfo[0]?.talukaName ?? '';
    const districtName: string = userInfo[0]?.districtName ?? '';
    const stateName: string = userInfo[0]?.stateName ?? '';

    const eventProperties: any = {
      State: stateName,
      Taluka: talukaName,
      District: districtName
    };
    if (isAddProperties) {
      trackEvent(eventName, {
        ...eventProperties,
        ...additionalProperties
      });
    } else {
      trackEvent(eventName);
    }
  };

  mPinEvent = (
    eventName: string,
    isAddProperties = true,
    additionalProperties = {},
    notForFirebase: boolean = true
  ) => {
    if (isAddProperties) {
      trackEvent(eventName, { ...additionalProperties }, notForFirebase);
    } else {
      trackEvent(eventName, undefined, notForFirebase);
    }
  };

  deepLinkEvent = (additionalProperties = {}) => {
    trackEvent(DEEP_LINK_EVENT, {
      ...additionalProperties
    });
  };
}
