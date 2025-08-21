import { VALIDATION_MESSAGES } from '@/pages/contact/const/message';
import { requiredValid } from '@/pages/contact/logic/requiredValid/index';

describe('requiredValid', () => {
  test.each([
    {
      input: '',
      expected: { ok: false, message: VALIDATION_MESSAGES.REQUIRED },
    },
    {
      input: '   ',
      expected: { ok: false, message: VALIDATION_MESSAGES.REQUIRED },
    },
    {
      input: '　',
      expected: { ok: false, message: VALIDATION_MESSAGES.REQUIRED },
    },
    { input: 'Hello', expected: { ok: true } },
    { input: '   React   ', expected: { ok: true } },
  ])('input: "$input"', ({ input, expected }) => {
    expect(requiredValid(input)).toEqual(expected);
  });
});
