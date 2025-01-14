import styles from './index.module.scss';
import Image from 'next/image';
import { useActiveIndex } from '@/hooks/useActiveIndex';
import { useReviewSliderBreakPointsStyle } from '@/pages/top/hooks/useReviewSliderBreakPointStyle';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { reviewSlideList } from '@/pages/top/components/ReviewSlider/const/reviewSlideList';
import { isHeroImage } from '@/pages/top/logics/isHeroImage';
import { getRightIndex } from '@/pages/top/logics/getRightIndex';
import { generateReviewSlideStyle } from '@/pages/top/logics/generateReviewSlideStyle';
import { isHeroReviewSlide } from '@/pages/top/logics/isHeroReviewSlide';

const DISTANCE_TO_HERO = 0;

export const ReviewSlider = () => {
  const [activeIndex, setActiveIndex] = useActiveIndex();
  const {
    basicWidth,
    heroWidth,
    basicHeight,
    heroHeight,
    gap,
    leftMinusPosition,
  } = useReviewSliderBreakPointsStyle();

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
            {isHero && (
              <div className={styles.reviewerWrapper}>
                <h2 className={styles.title}>{slideItem.title}</h2>
                <div className={styles.textWrapper}>
                  <div className={styles.reviewer}>{slideItem.reviewer}</div>
                  <div className={styles.craft}>{slideItem.craft}</div>
                </div>
              </div>
            )}
            <div
              className={styles.slider}
              style={{ left: `${leftMinusPosition}px` }}
            >
              <Image
                src={slideItem.image}
                alt={slideItem.alt}
                className={styles.image}
                style={style}
              />
            </div>
            {isHero && (
              <>
                <div className={styles.model}>{slideItem.model}</div>
                <div className={styles.comment}>{slideItem.comment}</div>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};
