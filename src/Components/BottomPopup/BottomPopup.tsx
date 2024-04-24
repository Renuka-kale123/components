import React, { FunctionComponent } from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType
} from 'react-native';
import { bottomPopupStyles } from './BottomPopupStyles';
import { cropwiseStyle } from '../../../Theme/index';
import BorderButton from '../../Components/Button/BorderButton';
const { colors, images } = cropwiseStyle;

export interface BottomPopupProps {
  title: string;
  subtitle: string;
  imageName: ImageSourcePropType;
  buttonTitle?: string;
  callbackModal?: () => void;
  buttonPress: () => void;
  testID?: string;
}

export const BottomPopup: FunctionComponent<BottomPopupProps> = ({
  title,
  subtitle,
  imageName,
  buttonTitle,
  callbackModal,
  buttonPress,
  testID
}) => {
  const closeIcon = () => {
    return (
      <TouchableOpacity
        style={bottomPopupStyles.closeCircle}
        onPress={callbackModal}
        testID={testID}
      >
        <Image source={images.crossIcon} testID="popupImage" />
      </TouchableOpacity>
    );
  };

  const renderBottomButton = () => {
    return (
      <BorderButton
        title={buttonTitle}
        onPress={buttonPress}
        backgroundColor={colors.growerButtonColor}
        color={colors.white}
        btnStyle={bottomPopupStyles.buttonStyle}
        textColor={colors.white}
      />
    );
  };

  return (
    <View style={bottomPopupStyles.container}>
      {closeIcon()}
      <View style={bottomPopupStyles.titleAndIconContainer}>
        <Image source={imageName} />
        <Text style={bottomPopupStyles.title}>{title}</Text>
        <Text style={bottomPopupStyles.subTitle}>{subtitle}</Text>
        {renderBottomButton()}
      </View>
    </View>
  );
};