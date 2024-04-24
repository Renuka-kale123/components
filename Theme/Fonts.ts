import { COUNTRY_ID } from '../Constants/AppConfig';
import { normalize } from '../Utilities/ResponsiveDimension';
import { I18nManager, Platform } from 'react-native';

export const fonts = {
  rubik_normal: 'Rubik-Regular',
  rubik_bold_700: 'Rubik-Bold',
  rubik_medium_500: 'Rubik-Medium',
  rubik_black_900: 'Rubik-Black',
  rubik_light_300: 'Rubik-Light',
  noto_sans_normal:
    COUNTRY_ID === 'PK' && I18nManager.isRTL
      ? Platform.OS === 'ios'
        ? 'Janna LT'
        : 'JannaLTRegular'
      : Platform.OS === 'ios'
      ? 'NotoSans'
      : 'NotoSans-Regular', // 400
  noto_sans_semibold:
    COUNTRY_ID === 'PK' && I18nManager.isRTL
      ? Platform.OS === 'ios'
        ? 'Janna LT'
        : 'JannaLTBold'
      : 'NotoSans-SemiBold', // 600
  noto_sans_bold:
    COUNTRY_ID === 'PK' && I18nManager.isRTL
      ? Platform.OS === 'ios'
        ? 'Janna LT'
        : 'JannaLTBold'
      : 'NotoSans-Bold', // 700
  noto_sans_bold_italic:
    COUNTRY_ID === 'PK' && I18nManager.isRTL
      ? Platform.OS === 'ios'
        ? 'Janna LT'
        : 'JannaLTBold'
      : 'NotoSans-BoldItalic',
  dmsans_bold: 'DMSans-Bold',
  dmsans_bold_italic: 'DMSans-BoldItalic',
  dmsans_italic: 'DMSans-Italic',
  dmsans_medium: 'DMSans-Medium',
  dmsans_medium_italic: 'DMSans-MediumItalic',
  dmsans_regular: 'DMSans-Regular'
};
export const sizes = {
  size1: normalize(1),
  size2: normalize(2),
  size3: normalize(3),
  size4: normalize(4),
  size5: normalize(5),
  size6: normalize(6),
  size7: normalize(7),
  size8: normalize(8),
  size9: normalize(9),
  size10: normalize(10),
  size11: normalize(11),
  size12: normalize(12),
  size13: normalize(13),
  size14: normalize(14),
  size15: normalize(15),
  size16: normalize(16),
  size17: normalize(17),
  size18: normalize(18),
  size19: normalize(19),
  size21: normalize(21),
  size22: normalize(22),
  size23: normalize(23),
  size24: normalize(24),
  size26: normalize(26),
  size20: normalize(20),
  size28: normalize(28),
  size29: normalize(29),
  size30: normalize(30),
  size32: normalize(32),
  size34: normalize(34),
  size35: normalize(35),
  size36: normalize(36),
  size37: normalize(37),
  size38: normalize(38),
  size40: normalize(40),
  size41: normalize(41),
  size42: normalize(42),
  size44: normalize(44),
  size45: normalize(45),
  size47: normalize(47),
  size48: normalize(48),
  size50: normalize(50),
  size52: normalize(52),
  size54: normalize(54),
  size55: normalize(55),
  size60: normalize(60),
  size65: normalize(65),
  size66: normalize(66),
  size68: normalize(68),
  size90: normalize(90),
  size95: normalize(95),
  size70: normalize(70),
  size75: normalize(75),
  size25: normalize(25),
  size82: normalize(82),
  size84: normalize(84),
  size85: normalize(85),
  size88: normalize(88),
  size93: normalize(93),
  size94: normalize(94),
  size105: normalize(105),
  size108: normalize(108),
  size110: normalize(110),
  size115: normalize(115),
  size119: normalize(119),
  size137: normalize(137),
  size356: normalize(356),
  headerSize: normalize(90),
  size80: normalize(80),
  size46: normalize(46),
  size510: normalize(510),
  size580: normalize(580),
  size150: normalize(150),
  size130: normalize(130),
  size170: normalize(170),
  size185: normalize(185),
  size240: normalize(240),
  size260: normalize(260),
  size350: normalize(350),
  size300: normalize(300),
  size480: normalize(480),
  size600: normalize(600),
  size632: normalize(632),
  size100: normalize(100),
  size103: normalize(103),
  size400: normalize(400),
  size500: normalize(500),
  size250: normalize(250),
  size288: normalize(288),
  size520: normalize(520),
  size455: normalize(455),
  size338: normalize(338),
  size235: normalize(235),
  size280: normalize(280),
  size700: normalize(700),
  size255: normalize(255),
  size200: normalize(200),
  size210: normalize(210),
  size160: normalize(160),
  size304: normalize(304),
  size330: normalize(330),
  size382: normalize(382),
  size125: normalize(125),
  size333: normalize(333),
  size190: normalize(190),
  size205: normalize(205),
  size164: normalize(164),
  size390: normalize(390),
  size420: normalize(420),
  size144: normalize(144),
  size157: normalize(157),
  size371: normalize(371),
  size180: normalize(180),
  size341: normalize(341),
  size270: normalize(270),
  size295: normalize(295),
  size83: normalize(83),
  size56: normalize(56),
  size343: normalize(343),
  size139: normalize(139),
  size76: normalize(76),
  size77: normalize(77)
};

export const SIZES = (value: any) => {
  return normalize(value);
};
