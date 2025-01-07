import { isHeroImage } from '.';
import {
  testSlideList,
  tooManySlideList,
} from '@/pages/topa/logics/isHeroImage/fixtures';

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
    [0, 1, tooManySlideList, 0, false],
    [0, 1, tooManySlideList, 1, true],
    [0, 1, tooManySlideList, 2, false],
    [0, 1, tooManySlideList, 3, false],
    [0, 1, tooManySlideList, 4, false],
    [0, 1, tooManySlideList, 5, false],

    [3, 1, tooManySlideList, 0, false],
    [3, 1, tooManySlideList, 1, false],
    [3, 1, tooManySlideList, 2, false],
    [3, 1, tooManySlideList, 3, false],
    [3, 1, tooManySlideList, 4, true],
    [3, 1, tooManySlideList, 5, false],

    [5, 1, tooManySlideList, 0, true],
    [5, 1, tooManySlideList, 1, false],
    [5, 1, tooManySlideList, 2, false],
    [5, 1, tooManySlideList, 3, false],
    [5, 1, tooManySlideList, 4, false],
    [5, 1, tooManySlideList, 5, false],
  ])(
    'imageListが増えても、activeIndexが0,3,5の時、imageListがhero画像かどうか判断する',
    (activeIndex, DISTANCE_TO_HERO, slideList, imageIndex, expected) => {
      expect(
        isHeroImage(activeIndex, DISTANCE_TO_HERO, slideList, imageIndex),
      ).toBe(expected);
    },
  );
});
