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

export const sizeOptions = [
  { value: 'SS', label: 'SSサイズ' },
  { value: 'S', label: 'Sサイズ' },
  { value: 'M', label: 'Mサイズ' },
  { value: 'L', label: 'Lサイズ' },
  { value: 'LL', label: 'LLサイズ' },
];

export const initialInput = {
  name: '',
  katakana: '',
  mail: '',
  phone: '',
  size: [],
  period: 'less_than_1_year',
  material: 'liquid_1',
  postContent: '',
};
