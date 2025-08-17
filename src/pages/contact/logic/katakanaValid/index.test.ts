import { katakanaValid } from '@/pages/contact/logic/katakanaValid/index';
import { VALIDATION_MESSAGES } from '../../const/message';

describe('katakanaValid', () => {
  it('空文字列やスペースのみはエラーを返す', () => {
    expect(katakanaValid('')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.REQUIRED,
    });
    expect(katakanaValid('　')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.REQUIRED,
    });
    expect(katakanaValid('   ')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.REQUIRED,
    });
  });

  it('カタカナ以外の文字列はエラーを返す', () => {
    expect(katakanaValid('ドイガキ みくる')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_KATAKANA,
    });
    expect(katakanaValid('123')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_KATAKANA,
    });
    expect(katakanaValid('アイウA')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_KATAKANA,
    });
    expect(katakanaValid('ドイガキ ミクル😊')).toEqual({
      ok: false,
      message: VALIDATION_MESSAGES.INVALID_KATAKANA,
    });
  });

  it('全角スペースを含む正しいカタカナはOKを返す', () => {
    expect(katakanaValid('ドイガキ　ミクル')).toEqual({ ok: true });
    expect(katakanaValid('アイウエオ')).toEqual({ ok: true });
  });
});
