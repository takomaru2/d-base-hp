import { ValidResult } from '@/pages/contact/logic/validation';

export const phoneValid = (value: string): ValidResult => {
  const isNumber = !/^[0-9]+$/.test(value);
  const isUnderTwenty = value.length >= 20;
  if (!value.trim()) return { ok: false, message: 'これは必須です' };
  if (isNumber) return { ok: false, message: '半角数字のみで入力してください' };
  if (isUnderTwenty)
    return { ok: false, message: '入力されている数字が多いです。' };
  return { ok: true };
};
