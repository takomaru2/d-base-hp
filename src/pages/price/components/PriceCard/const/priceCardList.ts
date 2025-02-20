import { v4 as uuidv4 } from 'uuid';

export const ns10hNew = [
  {
    id: uuidv4(),
    size: 'SS',
    price: '¥134,100',
  },
  {
    id: uuidv4(),
    size: 'S',
    price: '¥134,100',
  },
  {
    id: uuidv4(),
    size: 'M',
    price: '¥134,100',
  },
  {
    id: uuidv4(),
    size: 'L',
    price: '¥134,100',
  },
  {
    id: uuidv4(),
    size: 'LL',
    price: '¥134,100',
  },
  {
    id: uuidv4(),
    size: '3L',
    price: '¥134,100',
  },
  {
    id: uuidv4(),
    size: '4L',
    price: '¥134,100',
  },
];

export const ns10hUsed = [
  {
    id: uuidv4(),
    size: 'SS',
    price: '¥134,100',
  },
  {
    id: uuidv4(),
    size: 'S',
    price: '¥200,000',
  },
  {
    id: uuidv4(),
    size: 'M',
    price: '¥300,100',
  },
  {
    id: uuidv4(),
    size: 'L',
    price: '¥499,100',
  },
  {
    id: uuidv4(),
    size: 'LL',
    price: '¥599,100',
  },
  {
    id: uuidv4(),
    size: '3L',
    price: '¥699,100',
  },
  {
    id: uuidv4(),
    size: '4L',
    price: '¥799,100',
  },
];

export const ns10hOld = [
  {
    id: uuidv4(),
    size: 'SS',
    price: '¥222,100',
  },
  {
    id: uuidv4(),
    size: 'S',
    price: '¥555,100',
  },
  {
    id: uuidv4(),
    size: 'M',
    price: '¥666,100',
  },
  {
    id: uuidv4(),
    size: 'L',
    price: '¥777,100',
  },
  {
    id: uuidv4(),
    size: 'LL',
    price: '¥888,100',
  },
  {
    id: uuidv4(),
    size: '3L',
    price: '¥999,100',
  },
  {
    id: uuidv4(),
    size: '4L',
    price: '¥1340,100',
  },
];

export const priceCardText = {
  carCondition: 'エントリー',
  advice:
    '推奨: 新車～登録3ヶ月\n低価格でコーティングの効果を重視する方におすすめ。ボディ全面を塗装の負担なく研磨します。',
};

export const nasiolPriceCardText = {
  carCondition: 'エントリー',
  advice:
    '推奨: 新車～登録3ヶ月\n低価格でコーティングの効果を重視する方におすすめ。ボディ全面を塗装の負担なく研磨します。',
};

export const kubeBondPriceCardText = {
  carCondition: 'エントリー',
  advice:
    '推奨: 新車～登録3ヶ月\n低価格でコーティングの効果を重視する方におすすめ。ボディ全面を塗装の負担なく研磨します。',
};

export const priceCardListNs10h = [
  {
    id: '1',
    priceList: ns10hNew,
    priceCardText: priceCardText,
  },
  {
    id: '2',
    priceList: ns10hUsed,
    priceCardText: nasiolPriceCardText,
  },
  {
    id: '3',
    priceList: ns10hOld,
    priceCardText: kubeBondPriceCardText,
  },
];
