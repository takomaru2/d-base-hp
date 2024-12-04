import styles from '@/pages/top/components/WorksSlider/index.module.scss';
import React from 'react';
import { StaticImageData } from 'next/image';
import { UseWorksSliderBreakPoints } from '@/pages/top/hooks/useWorksSliderBreakPoints';

type BaseSlideList = {
  id: string;
  image: StaticImageData;
};

type DynamicStyleAndClassWorksSlideResult = {
  style: React.CSSProperties;
  className: string;
};
// todo: reviewスライド作成時に関数整理
export const getDynamicStyleAndClassWorksSlide = (
  imageIndex: number,
  activeIndex: number,
  slideList: BaseSlideList[],
  { basicSize, heroSize, gap }: UseWorksSliderBreakPoints,
): DynamicStyleAndClassWorksSlideResult => {
  // leftとheroの差分
  const offset = 1;
  const isLeft = activeIndex === imageIndex;
  const isHero = (activeIndex + offset) % slideList.length === imageIndex;
  // activeIndexから何番目の右側なのかを返す
  const rightIndex =
    (imageIndex - activeIndex - offset + slideList.length) % slideList.length;

  let className: string = '';
  if (isHero) {
    className = styles.hero;
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

  const heroZIndex = 20;
  const lestZIndex = 10;
  const style: React.CSSProperties = {
    position: 'absolute',
    left: `${left}px`,
    zIndex: isHero ? heroZIndex : lestZIndex - rightIndex,
  };

  return { style, className };
};
