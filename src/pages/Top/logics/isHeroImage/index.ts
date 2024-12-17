import { BaseSlideList } from '@/pages/top/logics/getDynamicSliderStyle';

// heroスライドの判定
export const isHeroImage = (
  activeIndex: number,
  offset: number,
  slideList: BaseSlideList[],
  imageIndex: number,
) => {
  const minusActiveIndex = 0 > activeIndex;
  const slideOverActiveIndex = activeIndex >= slideList.length;
  if (slideOverActiveIndex && minusActiveIndex) {
    throw new Error(
      'activeIndexがスライド枚数より多くなっちょるか、マイナスの値になっちょるで',
    );
  }
  return (activeIndex + offset) % slideList.length === imageIndex;
};
