import React from 'react';
import { StaticImageData } from 'next/image';
import { UseWorksSliderBreakPoints } from '@/pages/top/hooks/useWorksSliderBreakPoints';

type BaseSlideList = {
  id: string;
  image: StaticImageData;
};

type DynamicSliderStyleResult = {
  style: React.CSSProperties;
};
// todo: reviewスライド作成時に関数統合
export const getDynamicSliderStyle = (
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
): DynamicSliderStyleResult => {
  // heroスライドの判定
  const isHero = (activeIndex + offset) % slideList.length === imageIndex;
  // 一番左を0としてindex返す
  const leftIndex =
    (imageIndex - activeIndex + slideList.length) % slideList.length;
  // 一番左からheroまで（hero を含む）の条件
  const isHeroOrLeft = leftIndex <= offset;

  let left: number;
  let width = basicWidth;
  let height = basicHeight;

  // leftを渡す
  if (isHeroOrLeft) {
    left = leftIndex * (basicWidth + gap);
  } else {
    const diff = heroWidth - basicWidth;
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
