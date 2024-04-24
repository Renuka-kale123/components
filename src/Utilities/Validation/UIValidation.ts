import {
  COUNTRY_ID,
  PHONE_NUMBER_LENGTH,
  COUNTRY_CODE
} from '../../Constants/AppConfig';
import {
  APP_REGEX,
  VALIDATIONS,
  INPUT_FIELD_ERROR_TYPE
} from '../../Constants/Constants';
import LocalizedStrings from '../Localization/LocalizedStrings';
import ObjectValidation from './ObjectValidation';

const { EMPTY } = INPUT_FIELD_ERROR_TYPE;

export default class UIValidation {
  objectValidation = new ObjectValidation();
  /* To handle name validation - only Alphabets*/
  validateName(nameValue: string) {
    nameValue = nameValue.trim();
    if (this.objectValidation.isStringEmpty(nameValue)) {
      return false;
    } else if (nameValue.length > VALIDATIONS.NAME_MAX_LENGTH) {
      return false;
    } else {
      return true;
    }
  }

  /* To handle email validation */
  validateEmail(emailAddress: string) {
    if (this.objectValidation.isStringEmpty(emailAddress)) {
      return false;
    } else if (!APP_REGEX.REGEX_EMAIL.test(emailAddress)) {
      return false;
    } else {
      return true;
    }
  }

  /* To validate password */
  validatePassword(passwordValue: string) {
    if (this.objectValidation.isStringEmpty(passwordValue)) {
      return true;
    } else if (this.validateSpace(passwordValue)) {
      return true;
    } else {
      return false;
    }
  }

  validateLimit(text: any) {
    if (text.length > VALIDATIONS.EMAIL_MAX_LENGTH) {
      return false;
    } else {
      return true;
    }
  }
  validateFieldsLimit(text: any, limit: any) {
    if (text.length > limit) {
      return true;
    } else {
      return false;
    }
  }
  /*To Validate number*/

  validateSpace = (text: any) => {
    const reg = APP_REGEX.REGEX_SPACE;
    if (reg.test(text) === true) {
      return true;
    } else {
      return false;
    }
  };
  validatePhoneNumber(phoneNumber: string) {
    phoneNumber = phoneNumber.trim();
    if (this.objectValidation.isStringEmpty(phoneNumber)) {
      return false;
    } else if (phoneNumber.length < 10) {
      return false;
    } else if (!APP_REGEX.PHONE_NUMBER.test(phoneNumber)) {
      return false;
    } else {
      return true;
    }
  }

  validateCoordinates(text: any) {
    const reg = APP_REGEX.REGEX_COORDINATES;
    if (reg.test(text) === true) {
      return true;
    } else {
      return false;
    }
  }
  validateSize(text: any) {
    const reg = APP_REGEX.REGEX_ADJUSTED_SIZE;
    if (reg.test(text) === true) {
      return true;
    } else {
      return false;
    }
  }
  validateInputField(text: any) {
    const isEmpty = this.objectValidation.isStringEmpty(text);
    if (isEmpty) {
      return EMPTY;
    } else return '';
  }
  validateCountry = (text: string) => {
    const valid = this.validateInputField(text);
    if (valid === EMPTY) {
      return LocalizedStrings.enterCountry();
    } else {
      return '';
    }
  };
  validateCity = (text: string) => {
    const valid = this.validateInputField(text);
    if (valid === EMPTY) {
      return LocalizedStrings.enterCity();
    } else {
      return '';
    }
  };

  validateState = (text: string) => {
    const valid = this.validateInputField(text);
    if (valid === EMPTY) {
      return LocalizedStrings.enterState();
    } else {
      return '';
    }
  };
  validateZipCode = (zipCode: string) => {
    if (!this.objectValidation.isStringEmpty(zipCode)) {
      if (APP_REGEX.REGEX_TEXT_NUMBER.test(zipCode) === false) {
        return LocalizedStrings.invalidZipCode();
      } else return '';
    } else return '';
  };

  removeWhiteSpaceRegex = (text: string) => {
    return text.replace(APP_REGEX.REMOVE_WHITE_SPACE, '');
  };

  static mobileNumberLength = (textLength: number) => {
    switch (COUNTRY_ID) {
      // INDONESIA, Vietnam & Malaysia
      case 'VN':
      case 'MY':
      case 'ID': // NOSONAR Check for Multiple Countries
        switch (textLength) {
          case 9:
            return PHONE_NUMBER_LENGTH - 6;
          case 10:
            return PHONE_NUMBER_LENGTH - 5;
          case 11:
            return PHONE_NUMBER_LENGTH - 4;
          case 12:
            return PHONE_NUMBER_LENGTH - 3;
          case 13:
            return PHONE_NUMBER_LENGTH - 2;
        }
      case 'TH': // NOSONAR Check for Multiple Countries
        switch (textLength) {
          case 9:
            return PHONE_NUMBER_LENGTH - 3;
          case 10:
            return PHONE_NUMBER_LENGTH - 2;
        }
      case 'PH': // NOSONAR Check for Multiple Countries
        switch (textLength) {
          case 10:
            return PHONE_NUMBER_LENGTH - 4;
          case 11:
            return PHONE_NUMBER_LENGTH - 3;
          case 12:
            return PHONE_NUMBER_LENGTH - 2;
        }
      default:
        return 10;
    }
  };

  static formatNumber = (phoneNumber: string) => {
    let match;
    let formattedNumber = phoneNumber;

    switch (COUNTRY_ID) {
      // INDONESIA, Vietnam & Malaysia
      case 'PH':
      case 'VN':
      case 'MY':
      case 'ID':
        if (phoneNumber.length === 11) {
          match = phoneNumber.match(APP_REGEX.INDONESIA_PHONE_NUMBER);
        } else {
          match = phoneNumber.match(APP_REGEX.INDONESIA_PHONE_NUMBER_13);
        }
        if (match) {
          formattedNumber = [match[1], ' ', match[2], ' ', match[3]].join('');
        }
        return formattedNumber;
      case 'TH':
        if (phoneNumber.length === 9) {
          match = phoneNumber.match(APP_REGEX.THAILAND_PHONE_NUMBER_9);
        } else {
          match = phoneNumber.match(APP_REGEX.THAILAND_PHONE_NUMBER_10);
        }
        if (match) {
          formattedNumber = [match[1], ' ', match[2], ' ', match[3]].join('');
        }
        return formattedNumber;
      default:
        if (typeof phoneNumber === 'string') {
          match = phoneNumber.match(APP_REGEX.PHONE_NUMBER);
        }
        if (match) {
          formattedNumber = [match[1], ' ', match[2], ' ', match[3]].join('');
        }
        return formattedNumber;
    }
  };

  static sliceAutoPickerNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/[\s\(\)-]/g, '').slice(COUNTRY_CODE.length);
  };
}
