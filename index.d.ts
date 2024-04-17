// index.d.ts
import { TouchableOpacityProps } from 'react-native';

declare module "pkg" {
  interface ButtonProps extends TouchableOpacityProps {
    width: number;
    height: number;
    bgColor: string;
    title: string;
    titleColor: string;
    titleSize: number;
    borderRadius: number;
    accessibilityLabel?: string;
    accessible?: boolean;
    extraParam?: string;
    onPress?(): void;
  }

  export const ButtonComponent: React.ComponentType<ButtonProps>;

  export function testRenderSnapshot(): void;
  export function testClickFunction(): void;
  export function testButtonStyles(): void;
  export function testButtonAccessibility(): void;
}