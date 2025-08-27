import { VALIDATION_MESSAGES } from '@/pages/contact/const/message';
import { ValidResult } from '../../types';

export const katakanaValid = (value: string): ValidResult => {
  if (!value.trim())
    return { ok: false, message: VALIDATION_MESSAGES.REQUIRED };
  if (!/^[ァ-ン　]+$/.test(value)) {
    return { ok: false, message: VALIDATION_MESSAGES.INVALID_KATAKANA };
  }
  return { ok: true };
};
