// tslint:disable:no-var-requires
import _ from 'lodash';
import moment from 'moment';
import { DATE_FORMATS } from '../Constants/Constants';
import { I18manager } from './Localization/i18n';
import { COUNTRY_ID } from './../Constants/AppConfig';
import 'moment/min/locales.min';
import { getCalendar } from 'react-native-localize';

export const BUDDIST_FORWARD_YEAR: number = 543;

export const setLocalLang = (lang: any) => {
  moment.locale(lang);
};

export const subtractYears = (value: any) => {
  return moment().subtract(value, 'years');
};

export const addYears = (value: any) => {
  return moment().add(value, 'years');
};

export const addDays = (value: any) => {
  return moment().add(value, 'days');
};

export const subtractMonths = (date: any, value: any) => {
  return moment(date).subtract(value, 'months');
};

export const addMonthsToDate = (date: any, value: any) => {
  return moment(date).add(value, 'months');
};

export const convertToDate = (value: any) => {
  return moment(value).toDate();
};

export const formatDate = (
  value: any,
  format: any = DATE_FORMATS.YYYY_DASH_MM_DASH_DD
) => {
  return _.capitalize(moment(value).locale('en').format(format));
};

export const formatDateWithTime = (
  value: any,
  format: any = DATE_FORMATS.YYYY_DASH_MM_DASH_DD
) => {
  const formattedDate = moment(value).format(format);
  return formattedDate + formatTime();
};

export const formatTime = () => {
  return moment().format('THH:mm:ssZ');
};

export const formatMonthDateYear = (value: any) => {
  return moment(value).format(DATE_FORMATS.MMM_SPACE_DD_COMMA_YYYY);
};

export const formatYear = (value: any) => {
  return moment(value).format('yyyy');
};

export const dateFormat = (value: any, format: any) => {
  return moment(value, 'DD/MM/YYYY').format(format);
};
export const formattedDateLabel = (
  value: any,
  valueFormat: any,
  format: any
) => {
  return moment(value, valueFormat).format(format);
};

export const getDateFromMoment = (value: any, valueFormat: any) => {
  return moment(value, valueFormat).toDate();
};

export const getTwelveHourTime = (value: any) => {
  return moment(value).format(DATE_FORMATS.hh_mm);
};

export const getFirstDateOfMonth = (value: any) => {
  return moment(value).format(DATE_FORMATS.YYYY_DASH_MM_DASH_01);
};

export const getTwentyfourHourTime = (value: any) => {
  return moment(value).format(DATE_FORMATS.HH_mm);
};

export const formatDateForGraphs = (value: any) => {
  return moment(value)
    .locale(I18manager.getAppLanguage())
    .format(DATE_FORMATS.dddd_Do_MMMM);
};

export const getPastMonthDateRange = (
  totalMonthBack = 1,
  format = DATE_FORMATS.DD_DASH_MM_DASH_YYYY
) => {
  const to = moment().subtract(totalMonthBack, 'months').format(format);
  const from = moment()
    .subtract(totalMonthBack - 1, 'months')
    .format(format);
  return { from, to };
};

export const compareDates = (a: any, b: any) => {
  const first: any = new Date(a.assetDate);
  const second: any = new Date(b.assetDate);
  return first - second;
};

export const compareTwoDates = (firstDate: string, secondDate: string) => {
  const difference = moment
    .duration(moment(firstDate).diff(moment(secondDate)))
    .asDays();
  if (difference <= 0) {
    return false;
  } else {
    return true;
  }
};

export const formatDateAndTime = (
  value: any,
  format: any = DATE_FORMATS.YYYY_DASH_MM_DASH_DD00_COLON_00_COLON_00
) => {
  return moment(value).locale('en').format(format);
};

export const formatOnlyMonth = (
  value: any,
  format: any = DATE_FORMATS.MMM_SPACE_YEAR
) => {
  const formatStandard = moment(value)
    .locale(I18manager.getAppLanguage())
    .format('DD/MM/YYYY');
  if (COUNTRY_ID === 'TH') {
    return moment(
      getFormattedBuddistDate(formatStandard, /\/|-/g, true, '/'),
      'DD/MM/YYYY'
    )
      .locale(I18manager.getAppLanguage())
      .format(format);
  }
  return moment(value).locale(I18manager.getAppLanguage()).format(format);
};

export const formatOnlyDay = (value: any, format: any = DATE_FORMATS.DDDD) => {
  return moment(value).locale(I18manager.getAppLanguage()).format(format);
};
// need to check
export const formatOnlyHour = (value: any, format: any = DATE_FORMATS.H) => {
  return moment(value).locale('en').format(format);
};

export const formatDateAndMonth = (
  value: any,
  format: any = DATE_FORMATS.DD_SPACE_MMMMM
) => {
  return moment(value).locale(I18manager.getAppLanguage()).format(format);
};

export const formatDatewithSubscript = (
  value: any,
  format: any = DATE_FORMATS.MMM_SPACE_DO_SPACE_YYYY
) => {
  const formatStandard = moment(value)
    .locale(I18manager.getAppLanguage())
    .format('DD/MM/YYYY');
  if (COUNTRY_ID === 'TH') {
    return moment(
      getFormattedBuddistDate(formatStandard, /\/|-/g, true, '/'),
      'DD/MM/YYYY'
    )
      .locale(I18manager.getAppLanguage())
      .format(format);
  }
  return moment(value).locale(I18manager.getAppLanguage()).format(format);
};
// need to check
export const formatYearMonth = (
  value: any,
  format: any = DATE_FORMATS.YYYY_DASH_MM
) => {
  return moment(value).locale('en').format(format);
};

export const formatonlyDate = (value: any, format: any = DATE_FORMATS.DD) => {
  return moment(value).locale(I18manager.getAppLanguage()).format(format);
};

export const formatDateAndDay = (
  value: any,
  format: any = DATE_FORMATS.DDD_SPACE_D
) => {
  return moment(value).locale(I18manager.getAppLanguage()).format(format);
};

// need to check
export const formatFullHour = (value: any, format: any = DATE_FORMATS.HH) => {
  return moment(value).locale(I18manager.getAppLanguage()).format(format);
};

export const formatDateMonthSubscript = (
  value: any,
  format: any = DATE_FORMATS.MMM_SPACE_DO
) => {
  return moment(value).locale(I18manager.getAppLanguage()).format(format);
};

export const getNoOfDays = (startDate: any, endDate: any) => {
  const date1 = moment(startDate, 'DD/MM/YYYY').format('MM/DD/YYYY');
  const date2 = moment(endDate, 'DD/MM/YYYY').format('MM/DD/YYYY');

  const diff = new Date(date2).getTime() - new Date(date1).getTime();
  const diffInDays = diff / (1000 * 3600 * 24);
  return diffInDays;
};

export const getCurrentDate = (format: any) => {
  return moment().locale('en').format(format);
};

export const getWeekDate = (format: any) => {
  return moment().subtract(7, 'd').locale('en').format(format);
};

export const getSixMonthDate = (format: any) => {
  const currentDate = moment().locale('en');
  let lastSixMonthDate = moment(currentDate).locale('en').add(-6, 'M');
  const lastSixMonthEnd = moment(lastSixMonthDate).locale('en').endOf('month');

  if (
    currentDate.date() !== lastSixMonthDate.date() &&
    lastSixMonthDate.isSame(lastSixMonthEnd.format(format))
  ) {
    lastSixMonthDate = lastSixMonthDate.add(1, 'd');
  }
  return lastSixMonthDate.format(format);
};

export const getlastYearDate = (format: any) => {
  const currentDate = moment().locale('en');
  let lastYearDate = moment(currentDate).locale('en').add(-1, 'y');
  const lastYearEnd = moment(lastYearDate).locale('en').endOf('year');

  if (
    currentDate.date() !== lastYearDate.date() &&
    lastYearDate.isSame(lastYearEnd.format(format))
  ) {
    lastYearDate = lastYearDate.add(1, 'd');
  }
  return lastYearDate.format(format);
};

export const formatCustomDate = (value: any, format: any) => {
  return moment(value).locale('en').format(format);
};

export const getDateList = (tab: number, fromDate: any, toDate: any) => {
  const dates = [];
  const currentDate = moment();
  let totalDays;
  let dayInterval;
  let intervalDate1;
  let intervalDate2;
  switch (tab) {
    case 0:
      const lastWeekDate = moment().subtract(7, 'd');

      dates.push(dateFormat(lastWeekDate, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));
      totalDays = getNoOfDays(lastWeekDate, currentDate);

      dayInterval = Math.round(totalDays / 3);

      intervalDate1 = getIntervalDate(lastWeekDate, dayInterval);
      dates.push(dateFormat(intervalDate1, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));
      intervalDate2 = getIntervalDate(intervalDate1, dayInterval);
      dates.push(dateFormat(intervalDate2, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));
      dates.push(dateFormat(currentDate, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));
      break;

    case 1:
      const lastMonthDate = moment(currentDate).locale('en').add(-6, 'M');
      dates.push(dateFormat(lastMonthDate, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));
      totalDays = getNoOfDays(lastMonthDate, currentDate);

      dayInterval = Math.round(totalDays / 3);
      intervalDate1 = getIntervalDate(lastMonthDate, dayInterval);
      dates.push(dateFormat(intervalDate1, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));

      intervalDate2 = getIntervalDate(intervalDate1, dayInterval);
      dates.push(dateFormat(intervalDate2, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));
      dates.push(dateFormat(currentDate, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));
      break;
    case 2:
      const lastYearDate = moment(currentDate).locale('en').add(-12, 'M');
      dates.push(dateFormat(lastYearDate, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));
      totalDays = getNoOfDays(lastYearDate, currentDate);

      dayInterval = Math.round(totalDays / 3);
      intervalDate1 = getIntervalDate(lastYearDate, dayInterval);
      dates.push(dateFormat(intervalDate1, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));

      intervalDate2 = getIntervalDate(intervalDate1, dayInterval);
      dates.push(dateFormat(intervalDate2, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));
      dates.push(dateFormat(currentDate, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));

      break;
    case 3:
      if (fromDate !== 'DD/MM/YYYY' && toDate !== 'DD/MM/YYYY') {
        dates.push(dateFormat(fromDate, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));
        totalDays = getNoOfDays(fromDate, toDate);

        dayInterval = Math.round(totalDays / 3);

        intervalDate1 = getIntervalDate(fromDate, dayInterval);
        dates.push(
          dateFormat(intervalDate1, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY)
        );

        intervalDate2 = getIntervalDate(intervalDate1, dayInterval);
        dates.push(
          dateFormat(intervalDate2, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY)
        );
        dates.push(dateFormat(toDate, DATE_FORMATS.MMM_SPACE_DD_COMMA_YY));
      }

      break;
  }

  return dates;
};

export const getIntervalDate = (fromDate: any, interval: number) => {
  const date = moment(fromDate, 'DD/MM/YYYY').add(interval, 'days');
  return moment(date).format('DD/MM/YYYY');
};

export const epochDateFormat = (value: any, format: string = 'DD/MM/YY') => {
  return moment.unix(value).locale('en').format(format);
};

export const getBuddistCurrentYear = (
  current = new Date(),
  forwardYear = true
): number => {
  const currentYear: number = current.getFullYear();
  let totalYear;
  if (getCalendar() !== 'buddhist') {
    totalYear = forwardYear
      ? currentYear + BUDDIST_FORWARD_YEAR
      : currentYear - BUDDIST_FORWARD_YEAR;
    current.setFullYear(totalYear, current.getMonth(), current.getDate());
  }
  return current.getFullYear();
};

export const getFormattedBuddistDate = (
  value: any,
  format = /\//g,
  addThaiYear = false,
  separator = '-',
  isFromPicker = false
): string => {
  const splitDates: string[] = String(value).split(format);
  let thaiYear: number = Number(splitDates[2]);
  if (addThaiYear && isFromPicker === false) {
    thaiYear += BUDDIST_FORWARD_YEAR;
  }

  return `${splitDates[0]}${separator}${splitDates[1]}${separator}${thaiYear}`;
};

export const getFormattedNonBuddistDate = (
  value: any,
  format = /\//g,
  changeFormat = false,
  isBuddist = true,
  isFromPicker = false
): string => {
  const splitDates: string[] = String(value).split(format);
  let subtractThaiYear = Number(splitDates[2]);
  if (isBuddist && isFromPicker === false) {
    subtractThaiYear -= BUDDIST_FORWARD_YEAR;
  }
  if (changeFormat) {
    return `${subtractThaiYear}-${splitDates[1]}-${splitDates[0]}`;
  }
  const date = `${splitDates[0]}/${splitDates[1]}/${subtractThaiYear}`;
  return date;
};

export const getBuddistRangeDate = (value: string, addThaiYear = false) => {
  const splitsDateRange: any = value.split('-');
  const valueAtPos: any =
    splitsDateRange[splitsDateRange.length - 1].split(/\s/g);
  const lastPosValue: any = valueAtPos[valueAtPos.length - 1];
  let thaiYear = Number(lastPosValue);
  if (addThaiYear) {
    thaiYear += BUDDIST_FORWARD_YEAR;
  }
  return value.replace(`${lastPosValue}`, `${thaiYear}`);
};

/**
 * get Age from DOB
 * @param birthDate
 * @returns
 */
export const getAgeFromDob = (birthDate: string) => {
  let age = 0;
  let dob = birthDate;
  if (dob.includes('-')) {
    dob = moment(birthDate).locale('en').format('DD/MM/YYYY');
  }
  const standardFormatDob =
    dob.length > 0
      ? moment(dob, 'DD/MM/YYYY')
          .locale(I18manager.getAppLanguage())
          .format('DD/MM/YYYY')
      : '';
  if (standardFormatDob?.length > 0) {
    const splitDob = standardFormatDob.split(/\//g);
    age = moment().diff(
      `${splitDob[2]}-${splitDob[1]}-${splitDob[0]}`,
      'years'
    );
  }
  return isNaN(age) ? 0 : age;
};

/**
 * get day name from day number
 */
export const getDayNameFromNumber = (day: number) => {
  if (day !== undefined) {
    return moment().day(day).locale(I18manager.getAppLanguage()).format('dddd');
  } else {
    return '';
  }
};

export const calculatePercentage = (
  startDate: any,
  endDay: number,
  startDay: number
) => {
  const start = moment(startDate);
  const currentDate = moment(new Date());
  const percentage =
    (currentDate.diff(start, 'days') / (endDay - startDay)) * 100;
  return percentage;
};

export const compareCurrentDate = (selectedDate: string, currentRem: any) => {
  const currentDate = moment(new Date()).format('DD-MMM-YYYY').toString();
  if (currentDate === selectedDate) {
    return currentRem;
  }
};

export const compareThisWeekDates = (
  selectedDate: string,
  currentRem?: any
) => {
  const currentDate = new Date();
  const difference = moment
    .duration(moment(currentDate).diff(moment(selectedDate)))
    .asDays();
  if (difference < 0) {
    return currentRem;
  }
};

export const comparePerviousDates = (
  selectedDate: string,
  currentRem?: any
) => {
  const currentDate = new Date();
  const difference = moment
    .duration(moment(currentDate).diff(moment(selectedDate)))
    .asDays();
  if (difference > 1) {
    return currentRem;
  }
};

export const formatDateAMorPM = (date: string) => {
  return moment(date).locale('en').format('h A');
};

export const getdata = (data: any) => {
  const today = moment().startOf('day'); // Get the start of today
  return data?.filter((item) => moment(item?.date).isSame(today, 'day'));
};

export const formatDateAMPMTwelveHour = (date: string) => {
  return moment(date).locale('en').format('hh:mm A');
};
