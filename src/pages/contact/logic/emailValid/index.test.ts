import { emailValid } from '@/pages/contact/logic/emailValid/index';
import { VALIDATION_MESSAGES } from '@/pages/contact/const/message';

describe('emailValid', () => {
  it('空文字やスペースだけの場合はエラー', () => {
    expect(emailValid('')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.REQUIRED,
    });
    expect(emailValid('   ')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.REQUIRED,
    });
  });

  it('@を含まない場合はエラー', () => {
    expect(emailValid('test-example.com')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_EMAIL,
    });
  });

  it('@が2つ以上ある場合はOK（仕様上）', () => {
    expect(emailValid('test@@example.com')).toEqual({
      ok: true,
    });
  });

  it('英数字と@以外の文字が含まれる場合はエラー', () => {
    expect(emailValid('test@exam!ple.com')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_EMAIL,
    });
    expect(emailValid('てすと@メール.com')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_EMAIL,
    });
    expect(emailValid('test@メール.com')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_EMAIL,
    });
  });

  it('正しいメールアドレス形式はOK', () => {
    expect(emailValid('test@example.com')).toEqual({ ok: true });
    expect(emailValid('user.name123@abc.co')).toEqual({ ok: true });
    expect(emailValid('A1.B2@domain.jp')).toEqual({ ok: true });
  });
});
