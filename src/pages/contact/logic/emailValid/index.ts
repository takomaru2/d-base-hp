import { VALIDATION_MESSAGES } from '@/pages/contact/const/message';
import { ValidResult } from '../../types';

export const emailValid = (value: string): ValidResult => {
  if (!value.trim())
    return { ok: false, message: VALIDATION_MESSAGES.REQUIRED };
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
    return { ok: false, message: VALIDATION_MESSAGES.INVALID_EMAIL };
  return { ok: true };
};
