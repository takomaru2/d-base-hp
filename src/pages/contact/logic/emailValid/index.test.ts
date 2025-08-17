import { emailValid } from '@/pages/contact/logic/emailValid/index';
import { VALIDATION_MESSAGES } from '@/pages/contact/const/message';

describe('emailValid', () => {
  it.each([
    ['', { ok: false, message: VALIDATION_MESSAGES.REQUIRED }],
    ['   ', { ok: false, message: VALIDATION_MESSAGES.REQUIRED }],
  ])('空文字やスペース "%s" の場合はエラー', (input, expected) => {
    expect(emailValid(input)).toEqual(expected);
  });

  it.each([
    [
      'test-example.com',
      { ok: false, message: VALIDATION_MESSAGES.INVALID_EMAIL },
    ],
  ])('@を含まない場合 "%s" はエラー', (input, expected) => {
    expect(emailValid(input)).toEqual(expected);
  });

  it.each([['test@@example.com', { ok: true }]])(
    '@が2つ以上ある "%s" はOK（仕様上）',
    (input, expected) => {
      expect(emailValid(input)).toEqual(expected);
    },
  );

  it.each([
    [
      'test@exam!ple.com',
      { ok: false, message: VALIDATION_MESSAGES.INVALID_EMAIL },
    ],
    [
      'てすと@メール.com',
      { ok: false, message: VALIDATION_MESSAGES.INVALID_EMAIL },
    ],
    [
      'test@メール.com',
      { ok: false, message: VALIDATION_MESSAGES.INVALID_EMAIL },
    ],
  ])('不正な文字を含む "%s" はエラー', (input, expected) => {
    expect(emailValid(input)).toEqual(expected);
  });

  it.each([
    ['test@example.com', { ok: true }],
    ['user.name123@abc.co', { ok: true }],
    ['A1.B2@domain.jp', { ok: true }],
  ])('正しい形式 "%s" はOK', (input, expected) => {
    expect(emailValid(input)).toEqual(expected);
  });
});
