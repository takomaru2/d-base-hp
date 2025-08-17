import { UserInput } from '../../../types';
import {
  materialOptions,
  periodOptions,
} from '@/pages/contact/const/contactOptions';

export const formatConfirmField = (userInput: UserInput) => {
  return [
    { id: 'name', label: 'お名前', value: userInput.name },
    { id: 'katakana', label: 'フリガナ', value: userInput.katakana },
    { id: 'mail', label: 'メールアドレス', value: userInput.mail },
    { id: 'phone', label: 'ご連絡先', value: userInput.phone },
    {
      id: 'size',
      label: '車種・サイズ',
      value:
        userInput['size'].length > 0 ? userInput['size'].join(', ') : '未選択',
    },
    {
      id: 'period',
      label: '車の年数',
      value:
        periodOptions.find((option) => option.value === userInput.period)
          ?.label ?? '未選択',
    },
    {
      id: 'material',
      label: '希望の液剤',
      value:
        materialOptions.find((option) => option.value === userInput.material)
          ?.label ?? materialOptions[0].label,
    },
    {
      id: 'postContent',
      label: 'お問い合わせ内容',
      value: userInput.postContent,
    },
  ];
};
