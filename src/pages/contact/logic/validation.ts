import { VALIDATION_MESSAGES } from '@/pages/contact/const/message';

export type ValidResult = {
  ok: boolean;
  message?: string;
};

export const requiredValid = (value: string): ValidResult => {
  return value.trim()
    ? { ok: true }
    : { ok: false, message: VALIDATION_MESSAGES.REQUIRED };
};
