import { StyleSheet } from 'react-native';
import { SIZES } from '../../Assets/Font';
import { textStyles } from '../../Theme/TextStyles';
import { cropwiseStyle } from '../../Theme';
const { colors, sizes } = cropwiseStyle;

export const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    borderRadius: sizes.size40,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  viewStylePh: {
    width: '100%',
    borderRadius: sizes.size40,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: SIZES(8)
  },

  disabledBtnView: {
    backgroundColor: colors.gray6
  },
  textStyle: {
    ...textStyles.dmsansRegular1422,
    textAlign: 'center'
  },
  newTextStyle: {
    paddingLeft: sizes.size8,
    ...textStyles.jannaLTRegular1420,
    textAlign: 'center'
  },
  btnDisabledTxt: {
    color: colors.gray_1
  },
  btnTxtColor: {
    color: colors.white
  },
  errorViewStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  errorLabelStyle: {
    alignSelf: 'flex-end',
    fontSize: sizes.size12,
    color: colors.damageRed
  },
  image: {
    height: sizes.size16,
    width: sizes.size16
  },
  imagesView: { paddingRight: sizes.size4, paddingTop: sizes.size4 },
  autoBtnHeight: {
    flex: 1,
    height: '100%'
  },
  autoTextHeight: {
    paddingVertical: sizes.size12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  iconCenter: {
    alignSelf: 'center'
  }
});
