import { I18nManager, StyleSheet } from 'react-native';

export const textComponentStyle = StyleSheet.create({
  rtl: {
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'
  }
});
