export default class ObjectValidation {
  static isStringEmpty() {
    throw new Error('Method not implemented.');
  }
  // Check object is null, undefined
  public isValid(objectValue: null) {
    return objectValue !== null && typeof objectValue !== 'undefined';
  }

  // Check array is not empty
  public isArrayNonEmpty(objectValue: any) {
    return this.isValid(objectValue) && objectValue.length > 0;
  }

  // Check valid string and type
  public isStringValid(objectValue: any) {
    return this.isValid(objectValue) && typeof objectValue === 'string';
  }

  // Check valid string and empty
  public isStringEmpty(stringValue: string) {
    return this.isStringValid(stringValue) && stringValue.trim() === '';
  }

  public isValidValue(value: any, defaultVal = '' as any) {
    return value === undefined || value === null ? defaultVal : value;
  }

  public isEmptyObject(obj: any) {
    return this.isValid(obj) && Object.keys(obj).length === 0;
  }
}
