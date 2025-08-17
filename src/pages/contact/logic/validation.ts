import { emailValid } from './emailValid';
import { katakanaValid } from './katakanaValid';
import { phoneValid } from './phoneValid';
import { UserInput } from '../types';
import { requiredValid } from './requiredValid';

export type ValidResult = {
  ok: boolean;
  message?: string;
};

const validators: Partial<
  Record<keyof UserInput, (value: string) => ValidResult>
> = {
  name: requiredValid,
  mail: emailValid,
  katakana: katakanaValid,
  phone: phoneValid,
};

export function validateField<K extends keyof UserInput>(
  name: K,
  value: UserInput[K],
): ValidResult {
  const result = validators[name];
  if (!result) {
    return { ok: true };
  }
  return result(typeof value === 'string' ? value : '');
}
