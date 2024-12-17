import { isHeroImage } from '.';
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
 * どのimageIndexがhero画像か判定するロジック。
 * heroImageはDISTANCE_TO_HERO(worksだと左から2番目なので、1としている)分、足されたimageIndexとしている。
 * slideListの枚数が増えても、DISTANCE_TO_HEROに対応するimageIndexをheroImageとする
 */
describe('isHeroImage', () => {
  test.each([
    [0, 1, testSlideList, 0, false],
    [0, 1, testSlideList, 1, true],
    [0, 1, testSlideList, 2, false],
    [0, 1, testSlideList, 3, false],
    [1, 1, testSlideList, 0, false],
    [1, 1, testSlideList, 1, false],
    [1, 1, testSlideList, 2, true],
    [1, 1, testSlideList, 3, false],
    [2, 1, testSlideList, 0, false],
    [2, 1, testSlideList, 1, false],
    [2, 1, testSlideList, 2, false],
    [2, 1, testSlideList, 3, true],
    [3, 1, testSlideList, 0, true],
    [3, 1, testSlideList, 1, false],
    [3, 1, testSlideList, 2, false],
    [3, 1, testSlideList, 3, false],
  ])(
    'activeIndexが0~3の時、imageListがhero画像かどうか判断する',
    (activeIndex, DISTANCE_TO_HERO, slideList, imageIndex, expected) => {
      expect(
        isHeroImage(activeIndex, DISTANCE_TO_HERO, slideList, imageIndex),
      ).toBe(expected);
    },
  );
  test.each([
    [0, 1, testSlideList2, 0, false],
    [0, 1, testSlideList2, 1, true],
    [0, 1, testSlideList2, 2, false],
    [0, 1, testSlideList2, 3, false],
    [0, 1, testSlideList2, 4, false],
    [0, 1, testSlideList2, 5, false],

    [3, 1, testSlideList2, 0, false],
    [3, 1, testSlideList2, 1, false],
    [3, 1, testSlideList2, 2, false],
    [3, 1, testSlideList2, 3, false],
    [3, 1, testSlideList2, 4, true],
    [3, 1, testSlideList2, 5, false],

    [5, 1, testSlideList2, 0, true],
    [5, 1, testSlideList2, 1, false],
    [5, 1, testSlideList2, 2, false],
    [5, 1, testSlideList2, 3, false],
    [5, 1, testSlideList2, 4, false],
    [5, 1, testSlideList2, 5, false],
  ])(
    'imageListが増えても、activeIndexが0,3,5の時、imageListがhero画像かどうか判断する',
    (activeIndex, DISTANCE_TO_HERO, slideList, imageIndex, expected) => {
      expect(
        isHeroImage(activeIndex, DISTANCE_TO_HERO, slideList, imageIndex),
      ).toBe(expected);
    },
  );
});
