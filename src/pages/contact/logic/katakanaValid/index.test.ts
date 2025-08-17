import { katakanaValid } from '@/pages/contact/logic/katakanaValid/index';
import { VALIDATION_MESSAGES } from '../../const/message';

describe('katakanaValid', () => {
  it.each(['', '　', '   '])(
    '空文字やスペースのみ ("%s") はエラーを返す',
    (input) => {
      expect(katakanaValid(input)).toEqual({
        ok: false,
        message: VALIDATION_MESSAGES.REQUIRED,
      });
    },
  );

  it.each([['ドイガキ みくる'], ['123'], ['アイウA'], ['ドイガキ ミクル😊']])(
    'カタカナ以外 ("%s") はエラーを返す',
    (input) => {
      expect(katakanaValid(input)).toEqual({
        ok: false,
        message: VALIDATION_MESSAGES.INVALID_KATAKANA,
      });
    },
  );

  it.each([['ドイガキ　ミクル'], ['アイウエオ']])(
    '正しいカタカナ ("%s") はOKを返す',
    (input) => {
      expect(katakanaValid(input)).toEqual({ ok: true });
    },
  );
});
