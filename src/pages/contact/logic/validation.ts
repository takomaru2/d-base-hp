export type ValidResult = {
  ok: boolean;
  message?: string;
};

export const requiredValid = (value: string): ValidResult => {
  return value.trim() ? { ok: true } : { ok: false, message: 'これは必須です' };
};
