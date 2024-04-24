// tslint:disable: no-empty-interface
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
}
interface State {}

class DottedButton extends Component<Props, State> {
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
      borderColor
    } = this.props;
    const flatternBtnStyle = btnStyle ? StyleSheet.flatten(btnStyle) : {};
    const autoViewStyle =
      flatternBtnStyle && flatternBtnStyle?.height === undefined
        ? styles.autoBtnHeight
        : {};
    const autoTextStyle =
      flatternBtnStyle && flatternBtnStyle?.height === undefined
        ? styles.autoTextHeight
        : {};
    return (
      <>
        <TouchableOpacity
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
                  {
                    borderWidth: 1,
                    borderStyle: 'dashed',
                    backgroundColor,
                    borderColor
                  },
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
                  ? [styles.textStyle, styles.btnDisabledTxt, autoTextStyle]
                  : backgroundColor === colors.gray6
                  ? [styles.textStyle, styles.btnDisabledTxt, autoTextStyle]
                  : [
                      styles.textStyle,
                      {
                        color: customColor,
                        textDecorationLine: 'underline',
                        fontSize: sizes.size13
                      },
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

DottedButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
DottedButton.defaultProps = {
  backgroundColor: colors.gray6,
  color: colors.gray_1,
  title: 'BorderButton',
  disabled: false
};
export default DottedButton;
