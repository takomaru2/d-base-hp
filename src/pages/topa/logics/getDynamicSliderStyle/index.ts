import React from 'react';
import { StaticImageData } from 'next/image';
import { UseWorksSliderBreakPoints } from '@/pages/topa/hooks/useWorksSliderBreakPointsStyle';

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
/**
 * 受け取った引数に対応するスタイルを返す関数
 *
 * @param {boolean} isHero - ヒーロースライドかどうかの判定
 * @param {number} leftIndex - スライドの左端インデックス
 * @param {number} basicWidth - 基本スライドの幅
 * @param {number} heroWidth - ヒーロースライドの幅
 * @param {number} basicHeight - 基本スライドの高さ
 * @param {number} heroHeight - ヒーロースライドの高さ
 * @param {number} gap - スライド間の隙間
 * @param {number} DISTANCE_TO_HERO - ヒーロースライドまでの距離
 * @param {Array<Object>} slideList - スライドリスト（オブジェクトの配列）
 * @returns {{width: string, height: string, left: string, zIndex: string}} style オブジェクト
 */
// todo: reviewスライド作成時に関数統合
export const generateSlideStyle = (
  isHero: boolean,
  leftIndex: number,
  {
    basicWidth,
    heroWidth,
    basicHeight,
    heroHeight,
    gap,
  }: UseWorksSliderBreakPoints,
  DISTANCE_TO_HERO: number,
  slideList: BaseSlideList[],
): DynamicSliderStyleResult => {
  if (0 <= DISTANCE_TO_HERO && DISTANCE_TO_HERO > 3) {
    throw new Error('DISTANCE_TO_HEROがスライド枚数こえちょる');
  }
  const isHeroOrLeft = leftIndex <= DISTANCE_TO_HERO;

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
    zIndex: isFrontier ? frontier : heroZIndex,
  };
  return { style };
};
