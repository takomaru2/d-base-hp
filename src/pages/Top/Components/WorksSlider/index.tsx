import React, { FC } from 'react';
import { useActiveIndex } from '@/hooks/useActiveIndex';
import { useWorksSliderBreakPoints } from '@/pages/top/hooks/useWorksSliderBreakPoints';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import styles from '@/pages/top/components/WorksSlider/index.module.scss';
import { getDynamicStyleAndClassWorksSlide } from '@/pages/top/logics/getDynamicStyleAndClassWorksSlide';
import Image from 'next/image';
import { HeroModelDescription } from '@/pages/top/components/HeroModelDescription';

export const WorksSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useActiveIndex();
  const { basicSize, heroSize, gap } = useWorksSliderBreakPoints();

  useAnimationFrameInterval(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % worksSlideList.length);
  }, 4000);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {worksSlideList.map((slideItem, imageIndex) => {
          const { style, className } = getDynamicStyleAndClassWorksSlide(
            imageIndex,
            activeIndex,
            worksSlideList,
            { basicSize, heroSize, gap },
          );
          return (
            <div key={slideItem.id}>
              <Image
                src={slideItem.image}
                alt={slideItem.alt}
                style={style}
                // クラスを動的に変更
                className={`${styles.image} ${className}`}
              />
              {className === styles.hero ? (
                <HeroModelDescription
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
