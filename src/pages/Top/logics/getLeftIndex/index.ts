import { BaseSlideList } from '@/pages/top/logics/getDynamicSliderStyle';
// 一番左を0としてindex返す
export const getLeftIndex = (
  imageIndex: number,
  activeIndex: number,
  slideList: BaseSlideList[],
) => {
  return (imageIndex - activeIndex + slideList.length) % slideList.length;
};
