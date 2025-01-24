import styles from './index.module.scss';
import Image from 'next/image';
import { useActiveIndex } from '@/hooks/useActiveIndex';
import { useReviewSliderBreakPointsStyle } from '@/pages/top/hooks/useReviewSliderBreakPointStyle';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { reviewSlideList } from '@/pages/top/components/ReviewSlider/const/reviewSlideList';
import { getRightIndex } from '@/pages/top/logics/getRightIndex';
import { generateReviewSlideStyle } from '@/pages/top/logics/generateReviewSlideStyle';
import { isHeroReviewSlide } from '@/pages/top/logics/isHeroReviewSlide';
import { FC } from 'react';
import { Reviewer } from '@/pages/top/components/Reviewer';
import { ReviewComment } from '@/pages/top/components/ReviewComment';

// todo: workSliderとの統合時に命名変更
const DISTANCE_TO_HERO = 0;

export const ReviewSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useActiveIndex();
  const { basicWidth, heroWidth, basicHeight, heroHeight, gap } =
    useReviewSliderBreakPointsStyle();

  const infinityIncrement = (prevIndex: number) =>
    (prevIndex + 1) % reviewSlideList.length;

  useAnimationFrameInterval(() => {
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
        const isHero = isHeroReviewSlide(
          DISTANCE_TO_HERO,
          rightIndex,
          reviewSlideList,
        );
        const { style } = generateReviewSlideStyle(
          isHero,
          rightIndex,
          { basicWidth, heroWidth, basicHeight, heroHeight, gap },
          DISTANCE_TO_HERO,
          reviewSlideList,
        );

        return (
          <>
            {isHero && <Reviewer slideItem={slideItem} />}
            <div className={styles.slider}>
              <Image
                src={slideItem.image}
                alt={slideItem.alt}
                className={styles.image}
                style={style}
              />
            </div>
            {isHero && <ReviewComment slideItem={slideItem} />}
          </>
        );
      })}
    </div>
  );
};
