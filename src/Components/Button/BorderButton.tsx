// tslint:disable: no-empty-interface no-string-literal
import { FC } from 'react';
import * as React from 'react';
// import PropTypes from 'prop-types';
import * as PropTypes from 'prop-types';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { styles } from './styles';
import { Images } from '../../Assets/Images';
import { colors, Icon } from '../../Theme/Colors';
import { sizes } from '../../Assets/Font';
import { callOnceInInterval } from '../../Utilities/CallOnceInInterval';
import { Text } from '../Text/Text';
interface BorderButtonProps {
  title?: string;
  onPress: () => void;
  disabled?: boolean;
  color?: string;
  error?: string;
  backgroundColor?: string;
  disableBackgroundColor?: string;
  icon?: string;
  btnStyle?: object;
  fontChange?: boolean;
  textColor?: string;
  testId?: string;
  testTextId?: string;
}

const BorderButton: FC<BorderButtonProps> = (props: BorderButtonProps) => {
  const plusIconColor = props.disabled
    ? colors.gray3_5
    : props.backgroundColor === colors.white
    ? colors.black
    : colors.white;

  const flatternBtnStyle = props?.btnStyle
    ? StyleSheet.flatten(props?.btnStyle)
    : {};

  let autoViewStyle: any = {};
  if (flatternBtnStyle['height'] === undefined) {
    autoViewStyle = styles.autoBtnHeight;
  }
  let autoTextHeightStyle: any = {};
  if (flatternBtnStyle['height'] === undefined) {
    autoTextHeightStyle = styles.autoTextHeight;
  }

  return (
    <>
      <TouchableOpacity
        style={[
          styles.viewStyle,
          {
            backgroundColor: props.disabled
              ? props.disableBackgroundColor
              : props.backgroundColor
          },
          flatternBtnStyle,
          autoViewStyle
        ]}
        disabled={props.disabled}
        onPress={() => {
          if (props.onPress) {
            callOnceInInterval(props.onPress, props.title);
          }
        }}
        testID={props.testId}
      >
        <View style={styles.row}>
          {props.icon && props.icon.length > 0 ? (
            <Icon
              testID="iconId"
              style={styles.iconCenter}
              name={props.icon}
              size={sizes.size14}
              color={plusIconColor}
            />
          ) : null}
          <Text
            style={[
              styles.textStyle,
              { color: props.textColor },
              autoTextHeightStyle
            ]}
            testID={props.testTextId}
          >
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>

      {props.error ? (
        <View style={styles.errorViewStyle}>
          <View style={styles.imagesView}>
            <Image style={styles.image} source={Images.alert} />
          </View>
          <Text style={styles.errorLabelStyle}>{props.error}</Text>
        </View>
      ) : null}
    </>
  );
};

BorderButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
BorderButton.defaultProps = {
  backgroundColor: colors.gray6,
  title: 'BorderButton',
  disabled: false,
  disableBackgroundColor: colors.gray6
};
export default BorderButton;
