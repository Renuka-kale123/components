import ObjectValidation from './ObjectValidation';
import UIValidation from './UIValidation';

export default class ValidationManager {
  static objectShared = new ObjectValidation();
  static uiShared = new UIValidation();
}
