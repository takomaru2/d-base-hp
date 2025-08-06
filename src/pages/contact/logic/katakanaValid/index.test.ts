import { katakanaValid } from '@/pages/contact/logic/katakanaValid/index';

describe('katakanaValid', () => {
  it('空文字列やスペースのみはエラーを返す', () => {
    expect(katakanaValid('')).toEqual({
      ok: false,
      message: 'これは必須です',
    });
    expect(katakanaValid('　')).toEqual({
      ok: false,
      message: 'これは必須です',
    });
    expect(katakanaValid('   ')).toEqual({
      ok: false,
      message: 'これは必須です',
    });
  });

  it('カタカナ以外の文字列はエラーを返す', () => {
    expect(katakanaValid('ドイガキ みくる')).toEqual({
      ok: false,
      message: 'カタカナのみで入力してください',
    });
    expect(katakanaValid('123')).toEqual({
      ok: false,
      message: 'カタカナのみで入力してください',
    });
    expect(katakanaValid('アイウA')).toEqual({
      ok: false,
      message: 'カタカナのみで入力してください',
    });
    expect(katakanaValid('ドイガキ ミクル😊')).toEqual({
      ok: false,
      message: 'カタカナのみで入力してください',
    });
  });

  it('全角スペースを含む正しいカタカナはOKを返す', () => {
    expect(katakanaValid('ドイガキ　ミクル')).toEqual({ ok: true });
    expect(katakanaValid('アイウエオ')).toEqual({ ok: true });
  });
});
