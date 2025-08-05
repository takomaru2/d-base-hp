export type Option = {
  value: string;
  label: string;
};

export const periodOption: Option[] = [
  {
    value: '1',
    label: '1年未満',
  },
  {
    value: '2',
    label: '1年から3年',
  },
  {
    value: '3',
    label: '3年から5年',
  },
  {
    value: '4',
    label: '5年以上',
  },
];

export const materialOptions: Option[] = [
  { value: '1', label: '液剤１' },
  { value: '2', label: '液剤２' },
  { value: '3', label: '液剤３' },
];

export const sizeOptions = [
  { value: 'SS', label: 'SSサイズ' },
  { value: 'S', label: 'Sサイズ' },
  { value: 'M', label: 'Mサイズ' },
  { value: 'L', label: 'Lサイズ' },
  { value: 'LL', label: 'LLサイズ' },
];
