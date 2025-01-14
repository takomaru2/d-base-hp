// import { BaseSlideList } from '../generateSlideStyle';

/**
 * imageIndexとDISTANCE_TO_HEROを受け取って、
 * imageIndexとDISTANCE_TO_HEROがイコールであれば、HeroImageとなる
 */
export const isHeroReviewSlide = (
  DISTANCE_TO_HERO: number,
  rightIndex: number,
) => {
  // if (isMinusActiveIndex || slideOverActiveIndex) {
  //   throw new Error(
  //     'activeIndexがスライド枚数より多くなっちょるか、マイナスの値になっちょるで',
  //   );
  // }

  const isHero = DISTANCE_TO_HERO === rightIndex;

  return isHero;
};
