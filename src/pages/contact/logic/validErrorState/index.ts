import { ErrorState, UserInput, ValidResult } from '../../types';
import { katakanaValid } from '@/pages/contact/logic/katakanaValid';
import { emailValid } from '@/pages/contact/logic/emailValid';
import { phoneValid } from '@/pages/contact/logic/phoneValid';
import { requiredValid } from '../requiredValid';

const validators: Partial<
  Record<keyof UserInput, (value: string) => ValidResult>
> = {
  name: requiredValid,
  katakana: katakanaValid,
  mail: emailValid,
  phone: phoneValid,
  postContent: requiredValid,
};

export const validErrorState = (input: UserInput): ErrorState => {
  const newErrors: ErrorState = {};

  const inputEntries = Object.entries(input) as [keyof UserInput, string][];

  for (const [key, value] of inputEntries) {
    const validator = validators[key];
    if (validator) {
      const result = validator(value);
      if (!result.ok) {
        newErrors[key] = result.message ?? '不明なエラーです';
      }
    }
  }

  return newErrors;
};
