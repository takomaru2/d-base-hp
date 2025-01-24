import React, { FC } from 'react';
import { useActiveIndex } from '@/hooks/useActiveIndex';
import { useWorksSliderBreakPointsStyle } from '@/pages/top/hooks/useWorksSliderBreakPointsStyle';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import styles from '@/pages/top/components/WorksSlider/index.module.scss';
import Image from 'next/image';
import { WorksHeroImageDescription } from '../WorksHeroImageDescription';
import { WORKS_DISTANCE_TO_HERO } from '@/pages/top/components/WorksSlider/const/distanceToHero';
import { isHeroImage } from '../../logics/isHeroImage';
import { getRightIndex } from '@/pages/top/logics/getRightIndex';
import { generateSlideStyle } from '../../logics/generateSlideStyle';

const infinityIncrement = (prevIndex: number) =>
  (prevIndex + 1) % worksSlideList.length;

export const WorksSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useActiveIndex();

  const { basicWidth, heroWidth, basicHeight, heroHeight, gap } =
    useWorksSliderBreakPointsStyle();

  useAnimationFrameInterval(() => {
    setActiveIndex(infinityIncrement);
  }, 4000);

  return (
    <div className={styles.container}>
      {worksSlideList.map((slideItem, imageIndex) => {
        const rightIndex = getRightIndex(
          imageIndex,
          activeIndex,
          worksSlideList,
        );
        const isHero = isHeroImage(
          WORKS_DISTANCE_TO_HERO,
          rightIndex,
          worksSlideList,
        );
        const { style } = generateSlideStyle(
          isHero,
          rightIndex,
          { basicWidth, heroWidth, basicHeight, heroHeight, gap },
          WORKS_DISTANCE_TO_HERO,
          worksSlideList,
        );
        return (
          <div key={slideItem.id}>
            <div className={styles.imageWrapper}>
              <Image
                src={slideItem.image}
                alt={slideItem.alt}
                style={style}
                className={styles.image}
              />
            </div>
            {isHero && (
              <WorksHeroImageDescription
                model={slideItem.model}
                craft={slideItem.craft}
                pricing={slideItem.pricing}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
