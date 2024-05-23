import { FunctionComponent } from 'react';
import * as React from 'react';
import {
  StyleProp,
  Text as TextView,
  TextProps,
  TextStyle
} from 'react-native';
import { textComponentStyle } from './TextStyles';

interface TextComponentProps extends TextProps {
  disableRTL?: boolean;
  style?: StyleProp<TextStyle>;
}

export const Text: FunctionComponent<TextComponentProps> = ({
  disableRTL = false,
  children,
  ...props
}) => {
  return (
    <TextView
      {...props}
      style={[props.style, !disableRTL && textComponentStyle.rtl]}
    >
      {children}
    </TextView>
  );
};
