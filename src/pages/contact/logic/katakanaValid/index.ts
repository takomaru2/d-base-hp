import { ValidResult } from '@/pages/contact/logic/validation';

export const katakanaValid = (value: string): ValidResult => {
  if (!value.trim()) return { ok: false, message: 'これは必須です' };
  if (!/^[ァ-ン　]+$/.test(value)) {
    return { ok: false, message: 'カタカナのみで入力してください' };
  }
  return { ok: true };
};
