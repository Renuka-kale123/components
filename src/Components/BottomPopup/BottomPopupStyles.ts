import { StyleSheet } from 'react-native';
import { cropwiseStyle } from '../../Theme';
import { SCREEN_WIDTH } from '../../Utilities/ResponsiveDimension';
const { colors, sizes, textStyles } = cropwiseStyle;

export const bottomPopupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: SCREEN_WIDTH,
    borderTopLeftRadius: sizes.size16,
    borderTopRightRadius: sizes.size16,
    paddingHorizontal: sizes.size12,
    paddingVertical: sizes.size16
  },
  closeCircle: {
    backgroundColor: colors.white,
    height: sizes.size36,
    width: sizes.size36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.size18,
    position: 'absolute',
    left: SCREEN_WIDTH / 2 - 25,
    top: -sizes.size60
  },
  buttonStyle: {
    ...textStyles.dmsansRegular2224,
    height: sizes.size52,
    width: '100%',
    fontSize: sizes.size14,
    fontStyle: 'normal',
    backgroundColor: colors.NurseryTextColor
  },
  titleAndIconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    ...textStyles.dmsansBold2224,
    fontSize: sizes.size24,
    marginTop: sizes.size30,
    color: colors.black,
    textAlign: 'center'
  },
  subTitle: {
    ...textStyles.dmsansRegular2224,
    fontSize: sizes.size14,
    marginVertical: sizes.size20,
    color: colors.black,
    textAlign: 'center'
  }
});