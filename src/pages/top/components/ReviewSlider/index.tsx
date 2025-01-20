import styles from './index.module.scss';
import { useActiveIndex } from '@/hooks/useActiveIndex';
import { useReviewSliderBreakPointsStyle } from '@/pages/top/hooks/useReviewSliderBreakPointStyle';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { reviewSlideList } from '@/pages/top/components/ReviewSlider/const/reviewSlideList';
import { getRightIndex } from '@/pages/top/logics/getRightIndex';
import { generateSlideStyle } from '../../logics/generateSlideStyle';
import { isHeroImage } from '../../logics/isHeroImage';
import { FC, Fragment } from 'react';
import { Reviewer } from '@/pages/top/components/Reviewer';
import { ReviewComment } from '@/pages/top/components/ReviewComment';
import { REVIEW_DISTANCE_TO_HERO } from '@/pages/top/components/ReviewSlider/const/distanceToHero';
import { ReviewSlideImage } from '@/pages/top/components/ReviewSlideImage';

export const ReviewSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useActiveIndex();
  const { basicWidth, heroWidth, basicHeight, heroHeight, gap } =
    useReviewSliderBreakPointsStyle();

  useAnimationFrameInterval(() => {
    const infinityIncrement = (prevIndex: number) =>
      (prevIndex + 1) % reviewSlideList.length;
    setActiveIndex(infinityIncrement);
  }, 4000);

  return (
    <div className={styles.container}>
      {reviewSlideList.map((slideItem, imageIndex) => {
        const rightIndex = getRightIndex(
          imageIndex,
          activeIndex,
          reviewSlideList,
        );
        const isHero = isHeroImage(
          REVIEW_DISTANCE_TO_HERO,
          rightIndex,
          reviewSlideList,
        );
        const { style } = generateSlideStyle(
          isHero,
          rightIndex,
          { basicWidth, heroWidth, basicHeight, heroHeight, gap },
          REVIEW_DISTANCE_TO_HERO,
          reviewSlideList,
        );

        return (
          <Fragment key={slideItem.id}>
            {isHero && <Reviewer slideItem={slideItem} />}
            <ReviewSlideImage slideItem={slideItem} style={style} />
            {isHero && <ReviewComment slideItem={slideItem} />}
          </Fragment>
        );
      })}
    </div>
  );
};
