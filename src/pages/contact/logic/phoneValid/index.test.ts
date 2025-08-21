import { phoneValid } from '@/pages/contact/logic/phoneValid/index';

describe('phoneValid', () => {
  it('スペースだけの場合はエラー', () => {
    expect(phoneValid('   ')).toEqual({
      ok: false,
      message: 'これは必須です',
    });
  });

  it('空文字の場合もエラー', () => {
    expect(phoneValid('')).toEqual({
      ok: false,
      message: 'これは必須です',
    });
  });

  it('全角数字はエラー', () => {
    expect(phoneValid('０９０１２３４５６７８')).toEqual({
      ok: false,
      message: '半角数字のみで入力してください',
    });
  });

  it('半角数字でも20文字以上はエラー', () => {
    const longPhone = '01234567890123456789'; // 20桁
    expect(phoneValid(longPhone)).toEqual({
      ok: false,
      message: '入力されている数字が多いです。',
    });
  });

  it('英字や記号を含むとエラー', () => {
    expect(phoneValid('090-1234-5678')).toEqual({
      ok: false,
      message: '半角数字のみで入力してください',
    });
    expect(phoneValid('090abcdefg')).toEqual({
      ok: false,
      message: '半角数字のみで入力してください',
    });
  });

  it('19文字以内の半角数字はOK', () => {
    expect(phoneValid('09012345678')).toEqual({ ok: true });
    expect(phoneValid('0123456789012345678')).toEqual({ ok: true });
  });
});
