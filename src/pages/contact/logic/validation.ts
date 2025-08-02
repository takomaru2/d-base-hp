import { InitialInput } from '@/pages/contact/index.page';

export type Valid = (
  value: string,
  fieldName: keyof InitialInput,
) => string | false;

export const requiredValid: Valid = (value) => {
  return value.trim() ? false : 'これは必須です';
};

export const katakanaValid: Valid = (value, fieldName) => {
  if (!value.trim()) return 'これは必須です';
  if (fieldName === 'katakana' && !/^[ァ-ン　]+$/.test(value)) {
    return 'カタカナのみで入力してください';
  }
  return false;
};

export const emailValid: Valid = (value) => {
  if (!value.trim()) return 'これは必須です';
  if (!(/^[a-zA-Z0-9@.,]+$/.test(value) && /@/.test(value)))
    return '英数字のみで入力して必ず@を使ってください';
  return false;
};

export const phoneValid: Valid = (value) => {
  const isNumber = !/^[0-9]+$/.test(value);
  const isUnderTwenty = value.length >= 20;
  if (!value.trim()) return 'これは必須です';
  if (isNumber) return '半角数字のみで入力してください';
  if (isUnderTwenty) return '入力されている数字が多いです。';
  return false;
};
