import { TouchableOpacityProps } from 'react-native';
export function testButtonAccessibility(): any;
interface ButtonProps extends TouchableOpacityProps {
    width: number;
    height: number;
    bgColor: string;
    title: string;
    titleColor: string;
    titleSize: number;
    borderRadius: number;
    accessibilityLabel?: string; // Corrected spelling
    accessible?: boolean;
    extraParam?: string;
    onPress?(): void;
  }

export const ButtonComponent: React.ComponentType<ButtonProps>; 
export function testClickFunction(): void;
export function testButtonStyles(): void;