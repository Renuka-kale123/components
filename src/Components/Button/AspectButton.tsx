// tslint:disable: no-empty-interface
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../Theme/Colors';
import { sizes, fontFamily, SIZES } from '../../Assets/Font';
import { isTablet } from 'react-native-device-info';
import { Text } from '../../Components';

interface AspectButtonProps {
  onPress: any;
  buttonTitle: any;
  bgColor: any;
  textColor: any;
}

interface AspectButtonState {}

class AspectButton extends Component<AspectButtonProps, AspectButtonState> {
  constructor(props: AspectButtonProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          AspectButtonStyles.aspectButton,
          { backgroundColor: this.props.bgColor }
        ]}
      >
        <Text
          style={[
            AspectButtonStyles.aspectButtonText,
            { color: this.props.textColor }
          ]}
        >
          {this.props.buttonTitle}
        </Text>
      </TouchableOpacity>
    );
  }
}

const AspectButtonStyles = StyleSheet.create({
  aspectButton: {
    height: '100%',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: isTablet() ? SIZES(50) : SIZES(15),
    paddingVertical: isTablet() ? SIZES(20) : SIZES(1),
    marginRight: SIZES(5),
    elevation: 7,
    shadowOffset: { width: SIZES(1), height: SIZES(2) },
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  aspectButtonText: {
    height: SIZES(20),
    fontSize: isTablet() ? sizes.size16 : sizes.size14,
    lineHeight: sizes.size19,
    fontFamily: fontFamily.noto_sans_normal
  }
});

export default AspectButton;
