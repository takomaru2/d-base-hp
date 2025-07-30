import { ErrorState, InitialInput } from '@/pages/contact/index.page';

export const judgmentErrorState = (input: InitialInput) => {
  const newErrors: ErrorState = {};

  // 必須項目チェック（空文字チェック）
  for (const [key, value] of Object.entries(input)) {
    if (!value.trim()) {
      newErrors[key as keyof InitialInput] = 'これは必須項目でやんすねぇ';
    }

    // カタカナだけ特別なチェック（空でなくても）
    if (key === 'katakana' && value && !/^[ァ-ン　]+$/.test(value)) {
      newErrors.katakana = 'カタカナのみで入力してください';
    }

    // メール形式チェック
    if (
      key === 'mail' &&
      value &&
      !(/^[a-zA-Z0-9@.,]+$/.test(value) && /@/.test(value))
    ) {
      newErrors.mail = '英数字のみで入力して必ず@を使ってください';
    }

    // 電話番号チェック
    if (key === 'phone' && value) {
      if (!/^[0-9]+$/.test(value)) {
        newErrors.phone = '半角数字のみで入力してください';
      } else if (value.length >= 20) {
        newErrors.phone =
          '入力されている数字が多い可能性があります。いや、多いです。';
      }
    }
  }

  return newErrors;
};
