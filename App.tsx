import React from 'react';
import { Text, View, ViewStyle, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  width: number ;
  height: number ;
  bgColor: string;
  title: string;
  titleColor: string;
  titleSize: number;
  borderRadius: number;
  accessibiltyLabel?:string;
  accesible?:boolean;
  extraParam?:string;
  onPress?():void;
}
 
const App = ({
  width,
  height,
  bgColor,
  title,
  titleColor,
  titleSize,
  borderRadius,
  onPress,
  accessibilityLabel,
  accessible,
  extraParam,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
     onPress={onPress}  
     accessibilityLabel={accessibilityLabel}
    accessible={accessible}
    {...rest}>
<View style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: borderRadius,
        // margin:margin,
        // padding:padding
    }}>
<Text style={{ color: titleColor, fontSize: titleSize }}>{title}</Text>
</View>
</TouchableOpacity>
  );
};
 
export default App;