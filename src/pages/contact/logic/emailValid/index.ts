import { ValidResult } from '@/pages/contact/logic/validation';

export const emailValid = (value: string): ValidResult => {
  if (!value.trim()) return { ok: false, message: 'これは必須です' };
  if (!(/^[a-zA-Z0-9@.,]+$/.test(value) && /@/.test(value)))
    return { ok: false, message: '英数字のみで入力して必ず@を使ってください' };
  return { ok: true };
};
