import { UserInput } from '@/pages/contact/types';

export type Option = {
  value: string;
  label: string;
};

export const periodOptions: Option[] = [
  {
    value: 'less_than_1_year',
    label: '1年未満',
  },
  {
    value: '1_to_3_years',
    label: '1年から3年',
  },
  {
    value: '3_to_5_years',
    label: '3年から5年',
  },
  {
    value: 'over_5_years',
    label: '5年以上',
  },
];

export const materialOptions: Option[] = [
  { value: 'liquid_1', label: '液剤１' },
  { value: 'liquid_2', label: '液剤２' },
  { value: 'liquid_3', label: '液剤３' },
];

export const sizeOptions: Option[] = [
  { value: 'SS', label: 'SSサイズ' },
  { value: 'S', label: 'Sサイズ' },
  { value: 'M', label: 'Mサイズ' },
  { value: 'L', label: 'Lサイズ' },
  { value: 'LL', label: 'LLサイズ' },
];

export const initialInput: UserInput = {
  name: '',
  katakana: '',
  mail: '',
  phone: '',
  size: [],
  period: 'less_than_1_year',
  material: 'liquid_1',
  postContent: '',
};

export const inputLabel: Record<keyof UserInput, string> = {
  name: 'お名前',
  katakana: 'フリガナ',
  mail: 'メールアドレス',
  phone: 'ご連絡先',
  size: '所有しているお車のサイズ',
  period: '所有している車の経過年数',
  material: 'ご希望の液剤',
  postContent: 'お問い合わせ内容',
};
