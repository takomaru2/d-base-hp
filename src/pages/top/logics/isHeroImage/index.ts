import { BaseSlideList } from '../generateSlideStyle';

/**
 * imageIndexとDISTANCE_TO_HEROを受け取って、
 * imageIndexとDISTANCE_TO_HEROがイコールであれば、HeroImageとなる
 */
export const isHeroImage = (
  DISTANCE_TO_HERO: number,
  rightIndex: number,
  slideList: BaseSlideList[],
) => {
  const isMinusNumber = 0 > DISTANCE_TO_HERO;
  const isSlideOver = slideList.length < DISTANCE_TO_HERO;
  if (isMinusNumber || isSlideOver) {
    throw new Error(
      'activeIndexがスライド枚数より多くなっちょるか、マイナスの値になっちょるで',
    );
  }

  const isHero = DISTANCE_TO_HERO === rightIndex;

  return isHero;
};
