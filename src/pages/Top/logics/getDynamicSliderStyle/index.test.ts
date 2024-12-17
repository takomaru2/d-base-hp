import { generateSlideStyle } from '.';
import worksImage01 from '../../../../../public/assets/top/works/worksImage01.jpg';
import worksImage02 from '../../../../../public/assets/top/works/worksImage02.jpg';
import worksImage03 from '../../../../../public/assets/top/works/worksImage03.jpg';
import worksImage04 from '../../../../../public/assets/top/works/worksImage04.jpg';

/**
 * @param isHero: boolean
 * @param leftIndex: number
 * @param basicWidth: number
 * @param heroWidth: number
 * @param basicHeight: number
 * @param heroHeight: number
 * @param gap: number
 * @param offset: number
 * @param slideList: array
 * 画面幅に応じたStyleを返す。
 */
describe('getDynamicSliderStyle', () => {
  test('スライドが4枚で左から2番目が大きい画像(offset=1)のとき、正しいスタイルが返る', () => {
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
  test('offsetが3の時でも適切なstyleが返る', () => {
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
