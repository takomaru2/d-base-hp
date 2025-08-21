import { VALIDATION_MESSAGES } from '@/pages/contact/const/message';
import { validateField } from '@/pages/contact/logic/validation/index';

describe('validateField', () => {
  test.each([
    ['name', '', { ok: false, message: VALIDATION_MESSAGES.REQUIRED }],
    ['name', '  ', { ok: false, message: VALIDATION_MESSAGES.REQUIRED }],
    ['name', '山田太郎', { ok: true }],

    ['mail', '', { ok: false, message: VALIDATION_MESSAGES.REQUIRED }],
    [
      'mail',
      'john.doe@',
      { ok: false, message: VALIDATION_MESSAGES.INVALID_EMAIL },
    ],
    ['mail', 'john.doe@example.com', { ok: true }],

    ['katakana', '', { ok: false, message: VALIDATION_MESSAGES.REQUIRED }],
    ['katakana', 'ヤマダ　タロウ', { ok: true }],
    [
      'katakana',
      'ﾔﾏﾀﾞ ﾀﾛｳ',
      { ok: false, message: VALIDATION_MESSAGES.INVALID_KATAKANA },
    ],
    [
      'katakana',
      '山田 太郎',
      { ok: false, message: VALIDATION_MESSAGES.INVALID_KATAKANA },
    ],

    ['phone', '', { ok: false, message: VALIDATION_MESSAGES.REQUIRED }],
    ['phone', 'abc', { ok: false, message: VALIDATION_MESSAGES.INVALID_PHONE }],
    ['phone', '09012345678', { ok: true }],
    ['phone', '1'.repeat(19), { ok: true }],
    [
      'phone',
      '1'.repeat(20),
      { ok: false, message: VALIDATION_MESSAGES.INVALID_CHARACTER },
    ],

    ['postContent', '', { ok: false, message: VALIDATION_MESSAGES.REQUIRED }],
    ['postContent', 'お問い合わせ本文', { ok: true }],
  ] as const)('field=%s, value="%s"', (field, value, expected) => {
    const result = validateField(field, value);
    expect(result).toEqual(expected);
  });
});
