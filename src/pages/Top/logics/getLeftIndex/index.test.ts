import { getLeftIndex } from '.';
import worksImage01 from '../../../../../public/assets/top/works/worksImage01.jpg';
import worksImage02 from '../../../../../public/assets/top/works/worksImage02.jpg';
import worksImage03 from '../../../../../public/assets/top/works/worksImage03.jpg';
import worksImage04 from '../../../../../public/assets/top/works/worksImage04.jpg';

const testSlideList = [
  {
    id: '1',
    image: worksImage01,
    model: 'SUZUKI Jimny1',
    alt: '車の前部分',
    craft: 'NS-10H1',
    pricing: '¥100,000',
  },
  {
    id: '2',
    image: worksImage02,
    model: 'TOYOTA Jimny2',
    alt: '車の前部分',
    craft: 'NS-10H2',
    pricing: '¥120,000',
  },
  {
    id: '3',
    image: worksImage03,
    model: 'LEXUS Jimny3',
    alt: '車の前部分',
    craft: 'NS-10H3',
    pricing: '¥240,000',
  },
  {
    id: '4',
    image: worksImage04,
    model: 'HONDA Jimny4',
    alt: '車の前部分',
    craft: 'NS-10H4',
    pricing: '¥460,000',
  },
];
const testSlideList2 = [
  {
    id: '1',
    image: worksImage01,
    model: 'SUZUKI Jimny1',
    alt: '車の前部分',
    craft: 'NS-10H1',
    pricing: '¥100,000',
  },
  {
    id: '2',
    image: worksImage02,
    model: 'TOYOTA Jimny2',
    alt: '車の前部分',
    craft: 'NS-10H2',
    pricing: '¥120,000',
  },
  {
    id: '3',
    image: worksImage03,
    model: 'LEXUS Jimny3',
    alt: '車の前部分',
    craft: 'NS-10H3',
    pricing: '¥240,000',
  },
  {
    id: '4',
    image: worksImage04,
    model: 'HONDA Jimny4',
    alt: '車の前部分',
    craft: 'NS-10H4',
    pricing: '¥460,000',
  },
  {
    id: '5',
    image: worksImage04,
    model: 'HONDA Jimny4',
    alt: '車の前部分',
    craft: 'NS-10H4',
    pricing: '¥460,000',
  },
  {
    id: '6',
    image: worksImage04,
    model: 'HONDA Jimny4',
    alt: '車の前部分',
    craft: 'NS-10H4',
    pricing: '¥460,000',
  },
];

/**
 * 仕様は以下の通り
 * activeIndexは4秒おきに更新され、slideList.lengthと同じになると0に戻る。
 * 初期値は、imageIndex-0,activeIndex-0,leftIndex-0となる。
 * つまり、imageIndex-0の画像がleftIndex0となり、一番左に配置される。
 * 4秒後にactiveIndexが更新して、次に該当するimageIndexにleftIndexが付与されて、一番左に配置される。
 * これが4秒おきに繰り返される。slideListの枚数が増えても同様に対応される。
 */
describe('getLeftIndex', () => {
  test.each([
    [0, 0, testSlideList, 0],
    [1, 1, testSlideList, 0],
    [2, 2, testSlideList, 0],
    [3, 3, testSlideList, 0],
  ])(
    'imageIndexとactiveIndexが同じものをleft(0)として返す',
    (imageIndex, activeIndex, slideList, expected) => {
      expect(getLeftIndex(imageIndex, activeIndex, slideList)).toBe(expected);
    },
  );
  test.each([
    [1, 0, testSlideList, 1],
    [2, 0, testSlideList, 2],
    [3, 0, testSlideList, 3],
    [0, 1, testSlideList, 3],
    [2, 1, testSlideList, 1],
    [3, 1, testSlideList, 2],
    [0, 2, testSlideList, 2],
    [1, 2, testSlideList, 3],
    [3, 2, testSlideList, 1],
    [0, 3, testSlideList, 1],
    [1, 3, testSlideList, 2],
    [2, 3, testSlideList, 3],
  ])(
    'imageIndexとactiveIndexが異なるときはそれに対応するleftIndexをつけて返す',
    (imageIndex, activeIndex, slideList, expected) => {
      expect(getLeftIndex(imageIndex, activeIndex, slideList)).toBe(expected);
    },
  );
  test.each([
    [0, 0, testSlideList2, 0],
    [1, 1, testSlideList2, 0],
    [2, 2, testSlideList2, 0],
    [3, 3, testSlideList2, 0],
    [4, 4, testSlideList2, 0],
    [5, 5, testSlideList2, 0],
  ])(
    'slideListの枚数が増えても、imageIndexとactiveIndexが同じときはそれに対応するleftIndexをつけて返す',
    (imageIndex, activeIndex, slideList, expected) => {
      expect(getLeftIndex(imageIndex, activeIndex, slideList)).toBe(expected);
    },
  );
  test.each([
    [1, 0, testSlideList2, 1],
    [2, 0, testSlideList2, 2],
    [3, 0, testSlideList2, 3],
    [4, 0, testSlideList2, 4],
    [5, 0, testSlideList2, 5],
  ])(
    'slideListの枚数が増えてもimageIndexとactiveIndexが異なるときはそれに対応するleftIndexをつけて返す',
    (imageIndex, activeIndex, slideList, expected) => {
      expect(getLeftIndex(imageIndex, activeIndex, slideList)).toBe(expected);
    },
  );
});
