import {
  getDefaultLanguage,
  getDefaultLanguagePreference
} from '../../Constants/Constants';

export const LOCALE_CONSTANT = {
  // Application supported languages
  SUPPORTED_LANGUAGE_REGEX: /^(en|hi)$/,
  DEFAULT_SUPPORTED_LANGUAGE: getDefaultLanguage(),
  DEFAULT_LANGUAGE_PREFERENCE: getDefaultLanguagePreference()
};
