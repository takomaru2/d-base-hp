import { VALIDATION_MESSAGES } from '@/pages/contact/const/message';
import { ValidResult } from '../../types';

export const requiredValid = (value: string): ValidResult => {
  return value.trim()
    ? { ok: true }
    : { ok: false, message: VALIDATION_MESSAGES.REQUIRED };
};
