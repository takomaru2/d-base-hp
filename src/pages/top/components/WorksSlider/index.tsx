import React, { FC } from 'react';
import { useActiveIndex } from '@/hooks/useActiveIndex';
import { useWorksSliderBreakPointsStyle } from '@/pages/top/hooks/useWorksSliderBreakPointsStyle';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import styles from '@/pages/top/components/WorksSlider/index.module.scss';
import { generateSlideStyle } from '@/pages/top/logics/getDynamicSliderStyle';
import Image from 'next/image';
import { WorksHeroImageDescription } from '../WorksHeroImageDescription';
import { isHeroImage } from '@/pages/top/logics/isHeroImage';
import { getLeftIndex } from '@/pages/top/logics/getLeftIndex';
import { DISTANCE_TO_HERO } from '@/pages/top/components/WorksSlider/const/distanceToHero';

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
        const isHero = isHeroImage(
          activeIndex,
          DISTANCE_TO_HERO,
          worksSlideList,
          imageIndex,
        );
        const leftIndex = getLeftIndex(imageIndex, activeIndex, worksSlideList);
        const { style } = generateSlideStyle(
          isHero,
          leftIndex,
          { basicWidth, heroWidth, basicHeight, heroHeight, gap },
          DISTANCE_TO_HERO,
          worksSlideList,
        );
        return (
          <div key={slideItem.id}>
            <Image
              src={slideItem.image}
              alt={slideItem.alt}
              style={style}
              className={styles.image}
            />
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
