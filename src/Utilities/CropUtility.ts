import moment from 'moment';
import Database from '../ServiceWorkers/DatabaseManager/DatabaseHelper';
import { DATA_BASE_SCHEMA } from '../ServiceWorkers/DatabaseManager/DBConstant';
import {
  calculatePercentage,
  compareCurrentDate,
  comparePerviousDates,
  compareThisWeekDates,
  compareTwoDates
} from './DateTimeUtil';
import 'moment/min/locales.min';
import { I18manager } from './Localization/i18n';
import { find } from 'lodash';

export const truncateCropsData = () => {
  removeFavPlantixCPProducts();
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.SMALLHOLDERCROPS);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.SMALLHOLDERHYBRIDS);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.CROPFILTERS);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.CPPRODUCT);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.CHALLENGES);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.STAGESAPI);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.STAGES);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.MEDIA);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.HYBRIDFILTER);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.HYBRIDFEATURE);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.HYBRIDAGRONOMYPRACTICES);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.HYBRIDPRECAUTIONS);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.HYBRIDGROWERTESTIMONIAL);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.DISEASES);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.KEYFEATURES);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.TECHNICALINFO);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.DOS);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.DONTS);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.INFO);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.OPTIONS);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.CROPENROLLED);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.CROPCALENDARRECOMMENDATION);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.CROPENROLLEDSTAGE);
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.CROPCALENDAR);
};

/**
 * remove fav plantix products
 */
export const removeFavPlantixCPProducts = () => {
  const plantixCpData = Database.sharedDb.getData(
    DATA_BASE_SCHEMA.PLANTIXCPPRODUCT
  ) as any;
  const filterFavProducts = plantixCpData?.filter(
    (item: any) => item.isFavorite === true
  );
  if (filterFavProducts?.length > 0) {
    filterFavProducts.map((fav: any) => {
      Database.sharedDb.deleteRecord(
        DATA_BASE_SCHEMA.PLANTIXCPPRODUCT,
        `id=${fav.id}`
      );
    });
  }
};

export const truncateSelectedCrop = (cropId: number) => {
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.SMALLHOLDERHYBRIDS,
    `cropId=${cropId}`
  );
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.CROPFILTERS,
    `cropId=${cropId}`
  );
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.CPPRODUCT,
    `cropId=${cropId}`
  );
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.CHALLENGES,
    `cropId=${cropId}`
  );
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.STAGESAPI,
    `cropId=${cropId}`
  );
  Database.sharedDb.truncateTable(DATA_BASE_SCHEMA.STAGES, `cropId=${cropId}`);
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.CROPENROLLED,
    `cropId=${cropId}`
  );
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.CROPENROLLEDSTAGE,
    `cropId=${cropId}`
  );
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.CROPCALENDARRECOMMENDATION,
    `cropId=${cropId}`
  );
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.CROPCALENDAR,
    `cropId=${cropId}`
  );
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.SMALLHOLDERCROPS,
    `cropId=${cropId}`
  );
};

export const truncateEnrollDataForCrop = (cropId: number) => {
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.CROPENROLLED,
    `cropId=${cropId}`
  );
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.CROPENROLLEDSTAGE,
    `cropId=${cropId}`
  );
  Database.sharedDb.truncateTable(
    DATA_BASE_SCHEMA.CROPCALENDARRECOMMENDATION,
    `cropId=${cropId}`
  );
};

export const calculateCropDate = (
  cropDateObject: any,
  stageObject: any,
  dayMonth?: boolean,
  startDate?: boolean
) => {
  let selectedDate: any = '';
  let finalDate: string = '';
  if (stageObject?.dateReference.toLowerCase() === 'dos') {
    selectedDate = new Date(cropDateObject?.dateOfSowing);
  } else if (stageObject?.dateReference.toLowerCase() === 'dot') {
    selectedDate = new Date(cropDateObject?.dateOfTransplant);
  }
  if (dayMonth) {
    let days = '';
    if (startDate) {
      days = stageObject.startDay;
    } else {
      days = stageObject.endDay;
    }

    if (selectedDate !== null && selectedDate !== '') {
      finalDate = moment(selectedDate?.setDate(selectedDate?.getDate() + days))
        .locale('en')
        .format('DD-MMM-YYYY');
    } else {
      finalDate = '';
    }
  } else {
    if (selectedDate !== null && selectedDate !== '') {
      finalDate = moment(
        selectedDate?.setDate(selectedDate?.getDate() + stageObject.endDay)
      )
        .locale('en')
        .format('DD-MMM-YYYY');
    } else {
      finalDate = '';
    }
  }

  return finalDate;
};

export const getListOfEnrollmentCompletedCropIds = () => {
  let cropData = Database.sharedDb.getData(
    DATA_BASE_SCHEMA.SMALLHOLDERCROPS
  ) as any;
  if (cropData.length > 0) {
    cropData = cropData.filter((crop: any) => crop.isEnrolled);
    const enrollmentCompletedCropIds = cropData.reduce(
      (cropIdList: any, crop: any) => {
        const tempCropEnrolledDB = Database.sharedDb.getData(
          DATA_BASE_SCHEMA.CROPENROLLED,
          `cropId=${crop?.cropId}`
        ) as any;
        if (tempCropEnrolledDB.length > 0) {
          const cropsEnrolledDB = JSON.parse(
            JSON.stringify(tempCropEnrolledDB[0])
          );

          const enrolledCropDates = {
            dateOfSowing: cropsEnrolledDB?.dateOfSowing,
            dateOfTransplant: cropsEnrolledDB?.dateOfTransplant
          };
          const cropEnrolledStages = cropsEnrolledDB?.cropEnrolledStage.sort(
            (s1: any, s2: any) => {
              return s1?.displayOrder - s2?.displayOrder;
            }
          );

          const lastDateOfCrop = calculateCropDate(
            enrolledCropDates,
            cropEnrolledStages[cropEnrolledStages?.length - 1]
          );

          const res = compareTwoDates(
            moment(new Date()).locale('en').format('DD-MMM-YYYY'),
            lastDateOfCrop
          );
          if (res) {
            cropIdList.push(crop?.cropId);
          }
        }

        return cropIdList;
      },
      []
    );
    return enrollmentCompletedCropIds;
  }
  return [];
};

export const getEnrollCropData = (selectedCrop: any, callback: any): any => {
  const tempCropEnrolledDB = Database.sharedDb.getData(
    DATA_BASE_SCHEMA.CROPENROLLED,
    `cropId=${selectedCrop?.cropId}`
  ) as any;

  const cropEnrolledDB = JSON.parse(JSON.stringify(tempCropEnrolledDB));
  const stageDataDB = Database.sharedDb.getData(
    DATA_BASE_SCHEMA.STAGESAPI
  ) as any;
  if (
    cropEnrolledDB &&
    cropEnrolledDB.length > 0 &&
    stageDataDB &&
    stageDataDB.length > 0 &&
    selectedCrop.isEnrolled
  ) {
    const {
      cropEnrolledStage,
      enrollmentId,
      dateOfSowing,
      dateOfTransplant,
      fieldArea
    } = cropEnrolledDB[0];
    const finalObj = {
      enrollmentId,
      dateOfSowing,
      dateOfTransplant,
      fieldArea,
      ...selectedCrop
    };
    const modifiedCropCalendarRecommendations: any = [];
    let enrolledCropDates = {};
    if (finalObj && cropEnrolledStage && cropEnrolledStage.length > 0) {
      const lastStage = cropEnrolledStage[cropEnrolledStage.length - 1];
      const firstStage = cropEnrolledStage[0];
      enrolledCropDates = {
        dateOfSowing: finalObj.dateOfSowing,
        dateOfTransplant: finalObj.dateOfTransplant
      };
      const lastDateOfTimeLine = calculateCropDate(
        enrolledCropDates,
        lastStage
      );
      const startDateOfTimeLine = calculateCropDate(
        enrolledCropDates,
        firstStage,
        true,
        true
      );
      finalObj.endDate = moment(lastDateOfTimeLine)
        .locale('en')
        .format('DD-MMM-YYYY');
      finalObj.startEndDate = `${moment(startDateOfTimeLine)
        .locale(I18manager.getAppLanguage())
        .format('DD MMM')} - ${moment(lastDateOfTimeLine)
        .locale(I18manager.getAppLanguage())
        .format('DD MMM YYYY')}`;

      finalObj.currentDate = moment(new Date())
        .locale('en')
        .format('DD-MMM-YYYY');
      const modifiedCropEnrolledStage = cropEnrolledStage.map((value: any) => {
        const startDate = calculateCropDate(
          enrolledCropDates,
          value,
          true,
          true
        );
        const endDate = calculateCropDate(enrolledCropDates, value);
        value.startDate = startDate;
        value.endDate = endDate;
        value.percentage = calculatePercentage(
          startDate,
          value.endDay,
          value.startDay
        );
        const currentStageData = find(
          stageDataDB,
          (stageValue: any) => stageValue?.id === value?.stageId
        );
        const updatedValue = value.cropCalendarRecommendations.map(
          (cropCalendarRecommendationsvalue: any) => {
            cropCalendarRecommendationsvalue.dateReference =
              value?.dateReference;
            return cropCalendarRecommendationsvalue;
          }
        );
        modifiedCropCalendarRecommendations.push(...updatedValue);
        if (currentStageData) {
          value.imagePath = currentStageData?.imagePath;
          value.title = currentStageData?.title;
        }
        return value;
      });
      modifiedCropEnrolledStage.sort(
        (currentValue: any, previousValue: any) => {
          return currentValue.displayOrder - previousValue.displayOrder;
        }
      );
      finalObj.cropEnrolledStage = modifiedCropEnrolledStage;
    }
    callback(true, {
      finalObj,
      modifiedCropCalendarRecommendations,
      enrolledCropDates
    });
  } else {
    callback(false, {});
  }
};

export const getCropsRemainderDates = (
  reminderData: any,
  basedDateOfReference: any
) => {
  let selectedDate: any;
  let finalReminderDate: any;
  let remainderDate: any;
  const todayDatesMessage: any = [];
  const perviousDatesMessage: any = [];
  const thisWeekDatesMessage: any = [];
  reminderData.map((value: any) => {
    if (value.dateReference?.toLowerCase() === 'dos') {
      selectedDate = new Date(basedDateOfReference.dateOfSowing);
    } else if (value.dateReference?.toLowerCase() === 'dot') {
      selectedDate = new Date(basedDateOfReference.dateOfTransplant);
    }
    finalReminderDate = moment(
      selectedDate?.setDate(selectedDate?.getDate() + value.whenToUse)
    )
      .locale('en')
      .format('DD-MMM-YYYY');
    value.finalReminderDate = finalReminderDate;
    const todayReminderObject: any = compareCurrentDate(
      finalReminderDate,
      value
    );
    const perviuosReminderObject: any = comparePerviousDates(
      finalReminderDate,
      value
    );
    const thisWeekReminderObject: any = compareThisWeekDates(
      finalReminderDate,
      value
    );
    if (todayReminderObject) {
      todayDatesMessage.push(todayReminderObject);
    }
    if (perviuosReminderObject) {
      perviousDatesMessage.push(perviuosReminderObject);
    }
    if (thisWeekReminderObject) {
      thisWeekDatesMessage.push(thisWeekReminderObject);
    }
    return value;
  });
  if (thisWeekDatesMessage.length > 0) {
    const currentDate = new Date();
    const difference = moment
      .duration(
        moment(currentDate).diff(
          moment(new Date(thisWeekDatesMessage[0].finalReminderDate))
        )
      )
      .asDays();
    remainderDate = Math.abs(Math.floor(difference));
  }
  return {
    perviousDatesMessage,
    todayDatesMessage,
    thisWeekDatesMessage,
    remainderDate
  };
};
