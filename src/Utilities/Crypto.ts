import CryptoJS from 'crypto-js';
import { SECRET_ASYNC_KEY } from '../Constants/Constants';

export function encryptString(message: string) {
  const cipherText = CryptoJS.AES.encrypt(message, SECRET_ASYNC_KEY);
  return cipherText?.toString();
}

export function decryptString(encryptedMessage: string) {
  const bytes = CryptoJS.AES.decrypt(
    encryptedMessage.toString(),
    SECRET_ASYNC_KEY
  );
  const plaintext = bytes?.toString(CryptoJS.enc.Utf8);
  return plaintext;
}
