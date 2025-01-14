import { getRightIndex } from '.';
import {
  testSlideList,
  tooManySlideList,
} from '@/pages/top/logics/getLeftIndex/fixtures';

describe('getRightIndex', () => {
  test.each([
    [0, 0, testSlideList, 3],
    [1, 0, testSlideList, 2],
    [2, 0, testSlideList, 1],
    [3, 0, testSlideList, 0],
    [0, 1, testSlideList, 2],
    [1, 1, testSlideList, 1],
    [2, 1, testSlideList, 0],
    [3, 1, testSlideList, 3],
    [0, 2, testSlideList, 1],
    [1, 2, testSlideList, 0],
    [2, 2, testSlideList, 3],
    [3, 2, testSlideList, 2],
    [0, 3, testSlideList, 0],
    [1, 3, testSlideList, 3],
    [2, 3, testSlideList, 2],
    [3, 3, testSlideList, 1],
  ])(
    'imageIndexが最後のindexを0番目として、順番に値を返す',
    (imageIndex, activeIndex, slideList, expected) => {
      expect(getRightIndex(imageIndex, activeIndex, slideList)).toBe(expected);
    },
  );

  test.each([
    [0, 0, tooManySlideList, 5],
    [1, 0, tooManySlideList, 4],
    [2, 0, tooManySlideList, 3],
    [3, 0, tooManySlideList, 2],
    [4, 0, tooManySlideList, 1],
    [5, 0, tooManySlideList, 0],

    [0, 1, tooManySlideList, 4],
    [1, 1, tooManySlideList, 3],
    [2, 1, tooManySlideList, 2],
    [3, 1, tooManySlideList, 1],
    [4, 1, tooManySlideList, 0],
    [5, 1, tooManySlideList, 5],

    [0, 2, tooManySlideList, 3],
    [1, 2, tooManySlideList, 2],
    [2, 2, tooManySlideList, 1],
    [3, 2, tooManySlideList, 0],
    [4, 2, tooManySlideList, 5],
    [5, 2, tooManySlideList, 4],

    [0, 3, tooManySlideList, 2],
    [1, 3, tooManySlideList, 1],
    [2, 3, tooManySlideList, 0],
    [3, 3, tooManySlideList, 5],
    [4, 3, tooManySlideList, 4],
    [5, 3, tooManySlideList, 3],
  ])(
    'imageIndexが最後のindexを0番目として、順番に値を返す（6枚）',
    (imageIndex, activeIndex, slideList, expected) => {
      expect(getRightIndex(imageIndex, activeIndex, slideList)).toBe(expected);
    },
  );
});
