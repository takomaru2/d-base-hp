import { BaseSlideList } from '@/pages/topa/logics/getDynamicSliderStyle';

/**
 * どのimageIndexがhero画像(一番大きい画像がhero)か判定するロジック。
 * heroImageはDISTANCE_TO_HERO(一番左からhero画像までの枚数。左から2番目なら1)分、足されたimageIndexとしている。
 * slideListの枚数が増えても、DISTANCE_TO_HEROに対応するimageIndexをheroImageとする
 */
export const isHeroImage = (
  activeIndex: number,
  DISTANCE_TO_HERO: number,
  slideList: BaseSlideList[],
  imageIndex: number,
) => {
  const isMinusActiveIndex = 0 > activeIndex;
  const slideOverActiveIndex = activeIndex >= slideList.length;
  if (isMinusActiveIndex || slideOverActiveIndex) {
    throw new Error(
      'activeIndexがスライド枚数より多くなっちょるか、マイナスの値になっちょるで',
    );
  }

  const isHero =
    (activeIndex + DISTANCE_TO_HERO) % slideList.length === imageIndex;

  return isHero;
};
