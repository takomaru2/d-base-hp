import React from 'react';
import { StaticImageData } from 'next/image';
import { UseWorksSliderBreakPoints } from '@/pages/top/hooks/useWorksSliderBreakPoints';

type BaseSlideList = {
  id: string;
  image: StaticImageData;
};

type WorksSlideStyleAndClassResult = {
  style: React.CSSProperties;
};
// todo: reviewスライド作成時に関数統合
export const getDynamicStyleAndClassWorksSlide = (
  imageIndex: number,
  activeIndex: number,
  slideList: BaseSlideList[],
  {
    basicWidth,
    heroWidth,
    basicHeight,
    heroHeight,
    gap,
  }: UseWorksSliderBreakPoints,
  offset: number,
): WorksSlideStyleAndClassResult => {
  // leftとheroの差分
  const isHero = (activeIndex + offset) % slideList.length === imageIndex;
  // 左から hero までを判定するための leftIndex を計算
  const leftIndex =
    (imageIndex - activeIndex + slideList.length) % slideList.length;
  // hero から左（hero を含む）条件
  const isHeroOrLeft = leftIndex <= offset;

  let left: number;
  let width = basicWidth;
  let height = basicHeight;

  // leftを渡すもの
  if (isHeroOrLeft) {
    left = leftIndex * (basicWidth + gap);
  } else {
    // const basePosition = basicWidth + heroWidth + 2 * gap;
    // left = basePosition + (rightIndex - 1) * (basicWidth + gap);
    const diff = 250;
    left = leftIndex * (basicWidth + gap) + diff;
  }

  // widthとheightを渡す
  if (isHero) {
    width = heroWidth;
    height = heroHeight;
  }

  // 代入されたleft,width,heightとz-indexをreturn
  const heroZIndex = 20;
  const lestZIndex = 10;
  const style: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    left: `${left}px`,
    zIndex: isHero ? heroZIndex : lestZIndex - leftIndex,
  };

  return { style };
};
