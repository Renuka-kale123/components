// tslint:disable: no-var-requires no-shadowed-variable only-arrow-functions
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
const icoMoonConfig = require('../../selection.json');
export const Icon: any = createIconSetFromIcoMoon(icoMoonConfig);
export const colors = {
  lightBlue: '#E5F7FA',
  selectBlue: '#0071CD',
  white: '#FFFFFF',
  whiteOpacity: 'rgba(255,255,255,0.9)',
  whiteOpacity1: 'rgba(255,255,255,0.1)',
  black: '#000000',
  gray1: '#2F3031',
  gray2: '#515253',
  gray3: '#707374',
  gray4: '#C1C5C8',
  gray3_5: '#8E9293',
  gray5: '#E8EAED',
  gray6: '#F2F4F6',
  gray7: '#F5F8FC',
  gray8: '#C4C4C4',
  gray9: '#D7D7D7',
  baseRed: '#D91E3F',
  damageRed: '#F74141',
  yellow: '#F9C43D',
  green: '#AAB400',
  blue: '#00A0BE',
  gray: '#F5F8FC',
  lightGray: '#F1F1F1',
  borderBlue: '#E8EAED',
  borderLightGray: '#E8E8E8',
  darkGray: '#707374',
  btnBackground: '#00B5D8',
  darkBlue: '#1B418E',
  disabledGray: '#707374',
  liteblue: '#E5F9FB',
  gray_1: '#2F3031',
  gray_5: '#E8EAED',
  gray_7: '#F5F8FC',
  blackOpacity2: 'rgba(0,0,0,0.2)',
  blackOpacity3: 'rgba(0,0,0,0.3)',
  blackOpacity6: 'rgba(0,0,0,0.7)',
  errorColor: '#F74141',
  headerBlueColor: '#00B5D8',
  selectedPrimaryArea: '#fc981d',
  selectedSecondaryArea: '#0487c1',
  locationBackGround: '#E5F7FA',
  // darkGreen: '#006B4C',
  polygonBlueLite: 'rgba(0, 181, 216,0.3)',
  liteRed: '#FFECEC',
  ajustes: '#747D8C',
  lightMGreen: '#71D876',
  // lightGreen: '#73DC78',
  paleOrange: '#F1A911',
  cornGreen: '#A3BC10',
  graph1: '#EB8205',
  graph2: '#F9C43D',
  graph3: '#00A0BE',
  bgGreen: '#2FB966',
  yellowOrange: '#FFCA28',
  shadedGray: '#8D8D8D',
  guidetooltipGrey: '#4D5165',
  chartBGGrey: 'rgba(232, 234, 237, 0.22)',
  areaChartOneColor: 'rgba(240, 189, 74, 0.22)',
  areaChartTwoColor: 'rgba(0, 160, 190, 0.24)',
  areaChartOrangePoint: '#FFCA28',
  grayShadow: 'rgba(0, 0, 0, 0.25)',
  neutral: '#696F88',
  blueShade: '#00A3C2',
  grayShade: '#DEE0E3',
  // darkGreen1: '#14803C',
  darkNavyBlue: '#00004B',
  plannedTask: '#F0BD4A',
  progressTask: '#fdf3e6',
  taskDelay: '#feecec',
  taskExe: '#eaf8f0',
  borderGray: '#C4C4C4',
  buttonGray: '#ACACAC',
  growerGreen: '#E5E5E5',
  growerButtonColor: '#14803C',
  growerButtonColor4: '#14803C40',
  // basicBackground: '#E5E5E5',
  darkGreen: '#14803C',
  lightGreen: '#DFFBE8',
  basicGray: '#232630',
  selectedOpt: '#0092E4',
  lightGreenBorder: '#73DC78',
  lightTextGray: '#696F88',
  errorRedColor: '#CF3537',
  golden: '#E99921',
  growerTabBackground: '#363948',
  disabledTabColor: '#A3A9B9',
  textColor: '#14151C',
  bgGray: '#F3F4F6',
  bgGrayGallery: '#616161',
  borderColor: '#C2C7D0',
  progressGray: '#DFE2E7',
  topPickBlue: '#EAF6FF',
  RetailerTextColor: '#005693',
  RetailerBGColor: '#C6E6FF',
  NurseryTextColor: '#0C612C',
  NurseryBGColor: '#C3EAD1',
  productBorderColor: '#DDDDDD',
  agroBackgroundColor: '#009933',
  warningColor: '#C17E19',
  dontsRed: '#BB485D',
  lightRedColor: '#FFF1F1',
  redColor: '#FFB3B3',
  blueBorder: '#82CFFF',
  farmBgColor: '#F2F8FD',
  flamingo: '#EE5B3A',
  creamcan: '#F0C355',
  borderGreen: '#90D6AA',
  regentGrey: '#868CA2',
  mintcream: ' #F3F8F5',
  mountainMedow: '#19A04B',
  lightOrangeColor: '#fff3dd',
  blueColor: '#31B4F2',
  lightYellow: '#fff3dd',
  green80: '#06431C',
  green60: '#14803C',
  green40: '#89A954',
  green20: '#C3EAD1',
  blue10: '#EAF6FF',
  green20_50: '#C3EAD180',
  red60: '#CF3537',
  orange60: '#C1462B',
  blueTimer: '#0468FF',
  Gunmetal: '#292B38',
  NurseryTextColorOpacity: '#0C612C4D',
  iguanaGreen: '#70B687',
  whiteIce: '#E0F9F7',
  charade: '#292B38',
  toottipGray: '#636874'
};

// Usage : cropColors('banana')
export const cropColors = (name: any = '') => {
  const colors: Record<string, string> = {
    acerolacherry: '#FFC2B2',
    castor: '#FE7BA3',
    dragon: '#F42D69',
    oats: '#FFD26D',
    pepper: '#34CC1B',
    tangerine: '#FFB388',
    alfalfa: '#0FA97B',
    'coffee-bean': '#BE8818',
    eucalyptus: '#3C8FA1',
    onion: '#93A90F',
    plum: '#2680E1',
    tobacco: '#9D731D',
    apple: '#F1552F',
    cherry: '#F84A7F',
    grape: '#882D8E',
    orange: '#FD833F',
    potato: '#F1A911',
    tomato: '#DF4C29',
    atemoya: '#3F9EB2',
    chia: '#474747',
    garlic: '#B521BF',
    palmTree: '#1FD29D',
    rice: '#969696',
    turnip: '#F998FF',
    avocado: '#1ABD8C',
    chickpaeas: '#48B0C6',
    lychee: '#FFDE93',
    papaya: '#FB9C67',
    rubberTree: '#606060',
    vicia: '#D10EDE',
    banana: '#FCC74F',
    citrus: '#9BFC8C',
    lettuce: '#2DBC15',
    passionFruit: '#FC6190',
    soybeans: '#F1A911',
    watermelon: '#F56E4D',
    barley: '#808080',
    colza: '#156ECD',
    mango: '#FFCE60',
    pasture: '#59F240',
    sorghum: '#FFC5A4',
    wheat: '#F9C65C',
    bean: '#D29619',
    corn: '#A3BC10',
    millet: '#FFD7C0',
    peanut: '#87641E',
    strawberry: '#D81F57',
    blueberry: '#0E59AA',
    cotton: '#A8A8A8',
    macadamia: '#FFD8CE',
    peach: '#F99981',
    sugarcane: '#25A90F',
    brachiaria: '#29E3AC',
    crotalaria: '#3DEFBA',
    melon: '#DAFA20',
    pear: '#E9FF69',
    sunflower: '#F5BD3C',
    lemon: '#9BFC8C',
    oilseed_rape: '#DFC400',
    aspargo: '#61B49C',
    '': '#C1C5C8'
  };
  return iff(
    Object.keys(colors).indexOf(name) !== -1,
    colors[name],
    colors['']
  );
};

export const iff = function (condition: any, trueRe: any, falseRet: any) {
  if (condition === true) {
    if (typeof trueRe === 'function') {
      return trueRe();
    }
    return trueRe;
  } else {
    if (typeof falseRet === 'function') {
      return falseRet();
    }
    return falseRet;
  }
};

export const centrigoServiceStatusColor = (name: string = ''): string => {
  const colors: Record<string, string> = {
    requested: '#0071CD',
    completed: '#14803C',
    cancelled: '#CF3537',
    '': '#C1C5C8'
  };
  return iff(
    Object.keys(colors).indexOf(name) !== -1,
    colors[name],
    colors['']
  );
};

export const centrigoServiceStatusBGColor = (name: string = ''): string => {
  const colors: Record<string, string> = {
    requested: '#EAF6FF',
    completed: '#DFFBE8',
    cancelled: '#FFF1F1',
    '': '#C1C5C8'
  };
  return iff(
    Object.keys(colors).indexOf(name) !== -1,
    colors[name],
    colors['']
  );
};
