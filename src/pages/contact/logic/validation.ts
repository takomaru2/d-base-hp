export type ValidResult = {
  ok: boolean;
  message?: string;
};

export const requiredValid = (value: string): ValidResult => {
  return value.trim() ? { ok: true } : { ok: false, message: 'これは必須です' };
};

export const katakanaValid = (value: string): ValidResult => {
  if (!value.trim()) return { ok: false, message: 'これは必須です' };
  if (!/^[ァ-ン　]+$/.test(value)) {
    return { ok: false, message: 'カタカナのみで入力してください' };
  }
  return { ok: true };
};

export const emailValid = (value: string): ValidResult => {
  if (!value.trim()) return { ok: false, message: 'これは必須です' };
  if (!(/^[a-zA-Z0-9@.,]+$/.test(value) && /@/.test(value)))
    return { ok: false, message: '英数字のみで入力して必ず@を使ってください' };
  return { ok: true };
};

export const phoneValid = (value: string): ValidResult => {
  const isNumber = !/^[0-9]+$/.test(value);
  const isUnderTwenty = value.length >= 20;
  if (!value.trim()) return { ok: false, message: 'これは必須です' };
  if (isNumber) return { ok: false, message: '半角数字のみで入力してください' };
  if (isUnderTwenty)
    return { ok: false, message: '入力されている数字が多いです。' };
  return { ok: true };
};
