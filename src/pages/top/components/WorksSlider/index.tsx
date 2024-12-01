import Image from 'next/image';
import styles from './index.module.scss';
import React, { FC, useState } from 'react';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { useWindowWidth } from '@/hooks/useWindowWidth';

export const WorksSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useAnimationFrameInterval(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % worksSlideList.length);
  }, 4000);
  const windowWidth = useWindowWidth();

  const getDynamicClassName = (imageIndex: number, windowWidth: number) => {
    let basicSize: number;
    let heroSize: number;
    let gap: number;

    // ブレークポイントの設定
    if (windowWidth > 1000) {
      basicSize = 250;
      heroSize = 500;
      gap = 50;
    } else if (windowWidth > 600) {
      basicSize = 140;
      heroSize = 300;
      gap = 25;
    } else {
      basicSize = 78;
      heroSize = 166;
      gap = 10;
    }

    const offset = 1;
    const isLeft = activeIndex === imageIndex;
    const isHero =
      (activeIndex + offset) % worksSlideList.length === imageIndex;
    // activeIndexから何番目の右側なのかを返す
    const rightIndex =
      (imageIndex - activeIndex - offset + worksSlideList.length) %
      worksSlideList.length;

    let className;
    if (isLeft) {
      className = styles.imageLeft;
    } else if (isHero) {
      className = styles.imageCenterLarge;
    } else {
      className = styles[`imageRight${rightIndex}`];
    }

    let left: number;
    if (isLeft) {
      left = 0;
    } else if (isHero) {
      left = basicSize + gap;
    } else {
      const basePosition = basicSize + heroSize + 2 * gap;
      left = basePosition + (rightIndex - 1) * (basicSize + gap);
    }

    const style: React.CSSProperties = {
      position: 'absolute',
      left: `${left}px`,
      zIndex: isHero ? 20 : 10 - rightIndex,
      // transform: isHero ? 'scale(1.2)' : 'scale(0.9)',
    };

    return { style, className };
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {worksSlideList.map((slideItem, imageIndex) => {
          const { style, className } = getDynamicClassName(
            imageIndex,
            windowWidth,
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
