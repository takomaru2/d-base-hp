import Image from 'next/image';
import styles from './index.module.scss';
import React, { FC } from 'react';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { getDynamicStyleAndClassWorksSlide } from '@/pages/top/logics/getDynamicStyleAndClassWorksSlide';
import { useActiveIndex } from '@/hooks/useActiveIndex';
import { useWorksSliderBreakPoints } from '@/pages/top/hooks/useWorksSliderBreakPoints';

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
                <div className={styles.modelDetail}>
                  <div className={styles.model}>{slideItem.model}</div>
                  <div className={styles.priceWrapper}>
                    <div>{slideItem.craft}</div>
                    <div>{slideItem.pricing}</div>
                  </div>
                </div>
              ) : undefined}
            </div>
          );
        })}
      </div>
    </div>
  );
};
