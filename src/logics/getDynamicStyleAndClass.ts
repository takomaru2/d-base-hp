import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import styles from '@/pages/top/components/WorksSlider/index.module.scss';
import React from 'react';

export const getDynamicStyleAndClass = (
  imageIndex: number,
  windowWidth: number,
  activeIndex: number,
) => {
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
  const isHero = (activeIndex + offset) % worksSlideList.length === imageIndex;
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
