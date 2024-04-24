import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

  export const ButtonComponent = ({
    width,
    height,
    bgColor,
    title,
    titleColor,
    titleSize,
    borderRadius,
    accessibilityLabel,
    accessible,
    onPress,
  }) => {
    return (
  <TouchableOpacity
        style={{
          width,
          height,
          backgroundColor: bgColor,
          borderRadius,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        accessibilityLabel={accessibilityLabel}
        accessible={accessible}
        onPress={onPress}
  >
  <Text style={{ color: titleColor, fontSize: titleSize }}>{title}</Text>
  </TouchableOpacity>
    );
  };