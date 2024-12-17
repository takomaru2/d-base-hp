import React, { FC } from 'react';
import { useActiveIndex } from '@/hooks/useActiveIndex';
import { useWorksSliderBreakPoints } from '@/pages/top/hooks/useWorksSliderBreakPoints';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import styles from '@/pages/top/components/WorksSlider/index.module.scss';
import { generateSlideStyle } from '@/pages/top/logics/getDynamicSliderStyle';
import Image from 'next/image';
import { WorksHeroImageDescription } from '../WorksHeroImageDescription';
import { isHeroImage } from '@/pages/top/logics/isHeroImage';
import { getLeftIndex } from '@/pages/top/logics/getLeftIndex';

export const WorksSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useActiveIndex();
  const { basicWidth, heroWidth, basicHeight, heroHeight, gap } =
    useWorksSliderBreakPoints();
  const offset = 1;

  useAnimationFrameInterval(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % worksSlideList.length);
  }, 4000);

  return (
    <div className={styles.container}>
      {worksSlideList.map((slideItem, imageIndex) => {
        const isHero = isHeroImage(
          activeIndex,
          offset,
          worksSlideList,
          imageIndex,
        );
        const leftIndex = getLeftIndex(imageIndex, activeIndex, worksSlideList);
        const { style } = generateSlideStyle(
          isHero,
          leftIndex,
          { basicWidth, heroWidth, basicHeight, heroHeight, gap },
          offset,
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
            {isHero ? (
              <WorksHeroImageDescription
                model={slideItem.model}
                craft={slideItem.craft}
                pricing={slideItem.pricing}
              />
            ) : undefined}
          </div>
        );
      })}
    </div>
  );
};
