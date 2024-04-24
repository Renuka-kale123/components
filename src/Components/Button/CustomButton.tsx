// tslint:disable: no-empty-interface no-string-literal
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { styles } from './styles';
import { Images } from '../../Assets/Images';
import { colors, Icon } from '../../Theme/Colors';
import { sizes } from '../../Assets/Font';
import { callOnceInInterval } from '../../Utilities/CallOnceInInterval';
import { Text } from '../../Components';
interface Props {
  title?: string;
  onPress: any;
  disabled?: boolean;
  color?: string;
  error?: string;
  backgroundColor?: string;
  icon?: any;
  customColor?: string;
  borderColor?: string;
  btnStyle?: object;
  iconColor?: string;
  testId?: string;
  textStyle?: object;
}
interface State {}

class CustomButton extends Component<Props, State> {
  static propTypes: {
    title: PropTypes.Validator<string>;
    onPress: PropTypes.Validator<(...args: any[]) => any>;
  };
  static defaultProps: {
    color: string;
    title: string;
    disabled: boolean;
    backgroundColor: string;
  };

  render() {
    const {
      title,
      onPress,
      iconColor,
      btnStyle,
      disabled,
      error,
      backgroundColor,
      icon,
      customColor,
      borderColor,
      testId,
      textStyle
    } = this.props;
    const flatternBtnStyle = btnStyle ? StyleSheet.flatten(btnStyle) : {};

    let autoViewStyle: any = {};
    if (flatternBtnStyle['height'] === undefined) {
      autoViewStyle = styles.autoBtnHeight;
    }
    let autoTextStyle: any = {};
    if (flatternBtnStyle['height'] === undefined) {
      autoTextStyle = styles.autoTextHeight;
    }

    return (
      <>
        <TouchableOpacity
          testID={testId}
          style={
            disabled
              ? [
                  styles.viewStyle,
                  styles.disabledBtnView,
                  flatternBtnStyle,
                  autoViewStyle
                ]
              : [
                  styles.viewStyle,
                  { borderWidth: 1, backgroundColor, borderColor },
                  flatternBtnStyle,
                  autoViewStyle
                ]
          }
          disabled={disabled}
          onPress={() => {
            callOnceInInterval(onPress, title);
          }}
        >
          <View style={styles.row}>
            {icon && icon.length > 0 ? (
              <Icon
                style={styles.iconCenter}
                name={icon}
                size={sizes.size15}
                color={iconColor || colors.white}
              />
            ) : null}
            <Text
              style={
                disabled
                  ? [
                      textStyle ? textStyle : styles.textStyle,
                      styles.btnDisabledTxt,
                      autoTextStyle
                    ]
                  : backgroundColor === colors.gray6
                  ? [
                      textStyle ? textStyle : styles.textStyle,
                      styles.btnDisabledTxt,
                      autoTextStyle
                    ]
                  : [
                      textStyle ? textStyle : styles.textStyle,
                      { color: customColor },
                      autoTextStyle
                    ]
              }
            >
              {title}
            </Text>
          </View>
        </TouchableOpacity>

        {error ? (
          <View style={styles.errorViewStyle}>
            <View style={styles.imagesView}>
              <Image style={styles.image} source={Images.alert} />
            </View>
            <Text style={styles.errorLabelStyle}>{error}</Text>
          </View>
        ) : null}
      </>
    );
  }
}

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
CustomButton.defaultProps = {
  backgroundColor: colors.gray6,
  color: colors.gray_1,
  title: 'BorderButton',
  disabled: false
};
export default CustomButton;
