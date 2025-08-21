import { ErrorState, UserInput } from '@/pages/contact/type';
import { requiredValid, ValidResult } from '@/pages/contact/logic/validation';
import { katakanaValid } from '@/pages/contact/logic/katakanaValid';
import { emailValid } from '@/pages/contact/logic/emailValid';
import { phoneValid } from '@/pages/contact/logic/phoneValid';

export const judgmentErrorState = (input: UserInput): ErrorState => {
  const newErrors: ErrorState = {};

  const validators: Partial<
    Record<keyof UserInput, (value: string) => ValidResult>
  > = {
    name: requiredValid,
    katakana: katakanaValid,
    mail: emailValid,
    phone: phoneValid,
    postContent: requiredValid,
  };

  for (const [key, value] of Object.entries(input) as [
    keyof UserInput,
    string,
  ][]) {
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
