import React from 'react';
import { StaticImageData } from 'next/image';
import { UseWorksSliderBreakPoints } from '@/pages/top/hooks/useWorksSliderBreakPoints';

export type BaseSlideList = {
  id: string;
  image: StaticImageData;
};

type SlideStyle = Pick<
  React.CSSProperties,
  'width' | 'height' | 'left' | 'zIndex'
>;

type DynamicSliderStyleResult = {
  style: SlideStyle;
};

// todo: reviewスライド作成時に関数統合
export const generateSlideStyle = (
  isHero: boolean,
  leftIndex: number,
  {
    basicWidth,
    heroWidth,
    basicHeight,
    heroHeight,
    gap
  }: UseWorksSliderBreakPoints,
  offset: number,
  slideList: BaseSlideList[]
): DynamicSliderStyleResult => {
  if (0 <= offset && offset > 3) {
    throw new Error('offsetがスライド枚数こえちょる');
  }
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

  const isFrontier = leftIndex + 1 === slideList.length;

  // 代入されたleft,width,heightとz-indexをreturn
  const heroZIndex = 10;
  const frontier = 0;
  const style: SlideStyle = {
    width: `${width}px`,
    height: `${height}px`,
    left: `${left}px`,
    zIndex: isFrontier ? frontier : heroZIndex
  };
  return { style };
};
