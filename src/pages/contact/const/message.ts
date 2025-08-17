export const VALIDATION_MESSAGES = {
  REQUIRED: 'これは必須です',
  INVALID_EMAIL: '英数字のみで入力して必ず@を使ってください',
  INVALID_PHONE: '半角数字のみで入力してください',
  INVALID_CHARACTER: '入力されている文字数が多いです',
  INVALID_KATAKANA: 'カタカナのみで入力してください',
} as const;

export const TOAST_MESSAGES = {
  SAVE_ERROR: '保存に失敗しました。やり直してください',
  LOAD_ERROR: '通信障害が発生しました。再度やり直してください',
  NETWORK_ERROR: '通信に失敗しました。もう一度お試しください',
  TOO_MANY_REQUESTS: 'リクエストが多すぎます。しばらくしてからお試しください。',
  SERVER_ERROR:
    'サーバーでエラーが発生しました。時間をおいて再度お試しください。',
  INPUT_ERROR: '入力に問題がありました。時間をおいて再度お試しください',
  PARSE_ERROR: 'データの解析に失敗しました。再度お試しください',
} as const;

export const API_MESSAGES = {
  BAD_REQUEST: 'リクエストデータが不正です',
  RESEND_ERROR: '送信エラー(Resend)',
  SEND_SUCCESS: '送信完了',
  SEND_FAILURE: '送信失敗',
} as const;
