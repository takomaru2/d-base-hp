import { phoneValid } from '@/pages/contact/logic/phoneValid/index';
import { VALIDATION_MESSAGES } from '../../const/message';

describe('phoneValid', () => {
  it.each([
    ['   ', { ok: false, message: VALIDATION_MESSAGES.REQUIRED }],
    ['', { ok: false, message: VALIDATION_MESSAGES.REQUIRED }],
    [
      '０９０１２３４５６７８',
      { ok: false, message: VALIDATION_MESSAGES.INVALID_PHONE },
    ],
    [
      '01234567890123456789',
      { ok: false, message: VALIDATION_MESSAGES.INVALID_CHARACTER },
    ],
    [
      '090-1234-5678',
      { ok: false, message: VALIDATION_MESSAGES.INVALID_PHONE },
    ],
    ['090abcdefg', { ok: false, message: VALIDATION_MESSAGES.INVALID_PHONE }],
    ['09012345678', { ok: true }],
    ['0123456789012345678', { ok: true }],
  ])('%s の場合', (input, expected) => {
    expect(phoneValid(input)).toEqual(expected);
  });
});
