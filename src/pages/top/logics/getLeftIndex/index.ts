import { BaseSlideList } from '@/pages/top/logics/getDynamicSliderStyle';

/**
 * 一番左にあるimageIndexを返す関数
 * activeIndexは4秒おきに更新され、slideList.lengthと同じになると0に戻る。
 * 初期値は、imageIndex-0,activeIndex-0,leftIndex-0となる。
 * つまり、imageIndex-0の画像がleftIndex0となり、一番左に配置される。
 * 4秒後にactiveIndexが更新して、次に該当するimageIndexにleftIndexが付与されて、一番左に配置される。
 * これが4秒おきに繰り返される。slideListの枚数が増えても同様に対応される。
 */
export const getLeftIndex = (
  imageIndex: number,
  activeIndex: number,
  slideList: BaseSlideList[],
) => {
  return (imageIndex - activeIndex + slideList.length) % slideList.length;
};
