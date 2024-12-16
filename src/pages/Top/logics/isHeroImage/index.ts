import { BaseSlideList } from '@/pages/top/logics/getDynamicSliderStyle';

// heroスライドの判定
export const isHeroImage = (
  activeIndex: number,
  offset: number,
  slideList: BaseSlideList[],
  imageIndex: number,
) => {
  return (activeIndex + offset) % slideList.length === imageIndex;
};
