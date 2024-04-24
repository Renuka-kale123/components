import { StyleSheet } from 'react-native';
import { sizes } from '../Assets/Font';
import { normalize } from '../Utilities/ResponsiveDimension';
import { colors } from './Colors';

const AppStyles = StyleSheet.create({
  keyboardAvoiding: { flex: 1, alignContent: 'center' },
  safeAreaStyleBlue: {
    flex: 1,
    paddingBottom: 0
  },
  whiteBgContainer: { flex: 1, backgroundColor: colors.white },
  downloadButton: {
    width: sizes.size50,
    height: sizes.size50,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: sizes.size20,
    right: sizes.size15,
    borderRadius: sizes.size25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchIconView: {
    height: sizes.size50,
    aspectRatio: 1,
    borderRadius: sizes.size28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray6
  },
  addRow: {
    flex: 1,
    flexDirection: 'row'
  },
  flex1: {
    flex: 1
  },
  checkboxContainer: {
    margin: '2%',
    marginLeft: 0,
    padding: sizes.size5,
    borderRadius: sizes.size8
  },
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    marginTop: sizes.size150
  },
  noSearchDataImg: {
    width: normalize(100),
    height: normalize(100)
  },
  CenterAlign: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  NoMatchContainer: {
    paddingVertical: sizes.size50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AppStyles;
