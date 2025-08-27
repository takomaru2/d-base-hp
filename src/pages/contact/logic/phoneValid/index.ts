import { VALIDATION_MESSAGES } from '@/pages/contact/const/message';
import { ValidResult } from '../../types';

export const phoneValid = (value: string): ValidResult => {
  const isNumber = !/^[0-9]+$/.test(value);
  const isUnderTwenty = value.length >= 20;
  if (!value.trim())
    return { ok: false, message: VALIDATION_MESSAGES.REQUIRED };
  if (isNumber)
    return { ok: false, message: VALIDATION_MESSAGES.INVALID_PHONE };
  if (isUnderTwenty)
    return { ok: false, message: VALIDATION_MESSAGES.INVALID_CHARACTER };
  return { ok: true };
};
