import Image from 'next/image';
import styles from './index.module.scss';
import React, { FC } from 'react';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { getDynamicStyleAndClassWorksSlide } from '@/logics/getDynamicStyleAndClassWorksSlide';
import { useActiveIndex } from '@/hooks/useActiveIndex';

export const WorksSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useActiveIndex();

  useAnimationFrameInterval(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % worksSlideList.length);
  }, 4000);

  const windowWidth = useWindowWidth();
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {worksSlideList.map((slideItem, imageIndex) => {
          const { style, className } = getDynamicStyleAndClassWorksSlide(
            imageIndex,
            windowWidth,
            activeIndex,
            worksSlideList,
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
              {className === styles.imageCenterLarge ? (
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
