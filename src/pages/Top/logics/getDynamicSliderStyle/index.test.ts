import { generateSlideStyle } from '.';
import { testSlideList } from '@/pages/top/logics/getDynamicSliderStyle/fixtures';

/**
 * @param isHero: boolean
 * @param leftIndex: number
 * @param basicWidth: number
 * @param heroWidth: number
 * @param basicHeight: number
 * @param heroHeight: number
 * @param gap: number
 * @param DISTANCE_TO_HERO: number
 * @param slideList: array
 * 画面幅に応じたStyleを返す。
 */
describe('getDynamicSliderStyle', () => {
  test('スライドが4枚で左から2番目が大きい画像(DISTANCE_TO_HERO=1)のとき、正しいスタイルが返る', () => {
    expect(
      generateSlideStyle(
        true,
        1,
        {
          basicWidth: 250,
          heroWidth: 500,
          basicHeight: 355,
          heroHeight: 710,
          gap: 50,
        },
        2,
        testSlideList,
      ),
    ).toStrictEqual({
      style: {
        width: '500px',
        height: '710px',
        left: '300px',
        zIndex: 10,
      },
    });
  });
  test('DISTANCE_TO_HEROが3の時でも適切なstyleが返る', () => {
    expect(
      generateSlideStyle(
        true,
        3,
        {
          basicWidth: 250,
          heroWidth: 500,
          basicHeight: 355,
          heroHeight: 710,
          gap: 50,
        },
        3,
        testSlideList,
      ),
    ).toStrictEqual({
      style: {
        width: '500px',
        height: '710px',
        left: '900px',
        zIndex: 0,
      },
    });
  });
  test('取得された画面幅に応じて適切なstyleが返る', () => {
    expect(
      generateSlideStyle(
        true,
        1,
        {
          basicWidth: 78,
          heroWidth: 166,
          basicHeight: 122,
          heroHeight: 259,
          gap: 10,
        },
        1,
        testSlideList,
      ),
    ).toStrictEqual({
      style: {
        width: '166px',
        height: '259px',
        left: '88px',
        zIndex: 10,
      },
    });
  });
});
