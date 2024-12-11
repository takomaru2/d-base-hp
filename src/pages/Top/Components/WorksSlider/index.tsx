import React, { FC } from 'react';
import { useActiveIndex } from '@/hooks/useActiveIndex';
import { useWorksSliderBreakPoints } from '@/pages/top/hooks/useWorksSliderBreakPoints';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import styles from '@/pages/top/components/WorksSlider/index.module.scss';
import { getDynamicSliderStyle } from '@/pages/top/logics/getDynamicSliderStyle';
import Image from 'next/image';
import { WorksHeroImageDescription } from '../WorksHeroImageDescription';

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
      <div className={styles.imageWrapper}>
        {worksSlideList.map((slideItem, imageIndex) => {
          const { style } = getDynamicSliderStyle(
            imageIndex,
            activeIndex,
            worksSlideList,
            { basicWidth, heroWidth, basicHeight, heroHeight, gap },
            offset,
          );
          const isHero =
            (activeIndex + offset) % worksSlideList.length === imageIndex;
          return (
            <div key={slideItem.id}>
              <Image
                src={slideItem.image}
                alt={slideItem.alt}
                style={style}
                // クラスを動的に変更
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
    </div>
  );
};
