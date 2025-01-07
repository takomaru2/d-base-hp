import { getLeftIndex } from '.';
import {
  testSlideList,
  tooManySlideList,
} from '@/pages/topa/logics/getLeftIndex/fixtures';

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
    [0, 0, tooManySlideList, 0],
    [1, 1, tooManySlideList, 0],
    [2, 2, tooManySlideList, 0],
    [3, 3, tooManySlideList, 0],
    [4, 4, tooManySlideList, 0],
    [5, 5, tooManySlideList, 0],
  ])(
    'slideListの枚数が増えても、imageIndexとactiveIndexが同じときはそれに対応するleftIndexをつけて返す',
    (imageIndex, activeIndex, slideList, expected) => {
      expect(getLeftIndex(imageIndex, activeIndex, slideList)).toBe(expected);
    },
  );
  test.each([
    [1, 0, tooManySlideList, 1],
    [2, 0, tooManySlideList, 2],
    [3, 0, tooManySlideList, 3],
    [4, 0, tooManySlideList, 4],
    [5, 0, tooManySlideList, 5],
  ])(
    'slideListの枚数が増えてもimageIndexとactiveIndexが異なるときはそれに対応するleftIndexをつけて返す',
    (imageIndex, activeIndex, slideList, expected) => {
      expect(getLeftIndex(imageIndex, activeIndex, slideList)).toBe(expected);
    },
  );
});
