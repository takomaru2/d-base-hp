import styles from './index.module.scss';
import Image from 'next/image';
import { useActiveIndex } from '@/hooks/useActiveIndex';
import { useReviewSliderBreakPointsStyle } from '@/pages/top/hooks/useReviewSliderBreakPointStyle';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { reviewSlideList } from '@/pages/top/components/ReviewSlider/const/reviewSlideList';
import { isHeroImage } from '@/pages/top/logics/isHeroImage';
import { getLeftIndex } from '@/pages/top/logics/getLeftIndex';
import { generateSlideStyle } from '@/pages/top/logics/generateSlideStyle';

const DISTANCE_TO_HERO = 3;

export const ReviewSlider = () => {
  const [activeIndex, setActiveIndex] = useActiveIndex();
  const { basicWidth, heroWidth, basicHeight, heroHeight, gap } =
    useReviewSliderBreakPointsStyle();

  useAnimationFrameInterval(() => {
    const infinityIncrement = (prevIndex: number) =>
      (prevIndex + 1) % reviewSlideList.length;
    setActiveIndex(infinityIncrement);
  }, 4000);

  const leftPosition: number = -(basicWidth / 2);

  return (
    <div className={styles.container}>
      {reviewSlideList.map((slideItem, imageIndex) => {
        const isHero = isHeroImage(
          activeIndex,
          DISTANCE_TO_HERO,
          reviewSlideList,
          imageIndex,
        );
        const leftIndex = getLeftIndex(
          imageIndex,
          activeIndex,
          reviewSlideList,
        );
        const { style } = generateSlideStyle(
          isHero,
          leftIndex,
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
              style={{ left: `${leftPosition}px` }}
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
