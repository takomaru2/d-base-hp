import { phoneValid } from '@/pages/contact/logic/phoneValid/index';
import { VALIDATION_MESSAGES } from '../../const/message';

describe('phoneValid', () => {
  it('スペースだけの場合はエラー', () => {
    expect(phoneValid('   ')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.REQUIRED,
    });
  });

  it('空文字の場合もエラー', () => {
    expect(phoneValid('')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.REQUIRED,
    });
  });

  it('全角数字はエラー', () => {
    expect(phoneValid('０９０１２３４５６７８')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_PHONE,
    });
  });

  it('半角数字でも20文字以上はエラー', () => {
    const longPhone = '01234567890123456789';
    expect(phoneValid(longPhone)).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_CHARACTER,
    });
  });

  it('英字や記号を含むとエラー', () => {
    expect(phoneValid('090-1234-5678')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_PHONE,
    });
    expect(phoneValid('090abcdefg')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_PHONE,
    });
  });

  it('19文字以内の半角数字はOK', () => {
    expect(phoneValid('09012345678')).toEqual({ ok: true });
    expect(phoneValid('0123456789012345678')).toEqual({ ok: true });
  });
});
