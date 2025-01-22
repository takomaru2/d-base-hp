import React from 'react';
import { StaticImageData } from 'next/image';
import { UseWorksSliderBreakPoints } from '@/pages/top/hooks/useWorksSliderBreakPointsStyle';

export type BaseSlideList = {
  id: string;
  image: StaticImageData;
};

type SlideStyle = Pick<
  React.CSSProperties,
  'width' | 'height' | 'right' | 'zIndex'
>;

type GenerateSlideStyleResult = {
  style: SlideStyle;
};
/**
 * 受け取った引数に対応するスタイルを返す関数
 *
 * @param {boolean} isHero - ヒーロースライドかどうかの判定
 * @param {number} rightIndex - スライドの右端インデックス
 * @param {number} basicWidth - 基本スライドの幅
 * @param {number} heroWidth - ヒーロースライドの幅
 * @param {number} basicHeight - 基本スライドの高さ
 * @param {number} heroHeight - ヒーロースライドの高さ
 * @param {number} gap - スライド間の隙間
 * @param {number} DISTANCE_TO_HERO - ヒーロースライドまでの距離
 * @param {Array<Object>} slideList - スライドリスト（オブジェクトの配列）
 * @returns {{width: string, height: string, right: string, zIndex: string}} style オブジェクト
 */
// todo: reviewスライド作成時に関数統合
export const generateSlideStyle = (
  isHero: boolean,
  rightIndex: number,
  {
    basicWidth,
    heroWidth,
    basicHeight,
    heroHeight,
    gap,
  }: UseWorksSliderBreakPoints,
  DISTANCE_TO_HERO: number,
  slideList: BaseSlideList[],
): GenerateSlideStyleResult => {
  if (0 <= DISTANCE_TO_HERO && DISTANCE_TO_HERO > 3) {
    throw new Error('DISTANCE_TO_HEROがスライド枚数こえちょる');
  }
  const isHeroOrLeft = rightIndex <= DISTANCE_TO_HERO;

  let right: number;
  let width = basicWidth;
  let height = basicHeight;

  // rightを渡す
  if (isHeroOrLeft) {
    right = rightIndex * (basicWidth + gap);
  } else {
    const diff = heroWidth - basicWidth;
    right = rightIndex * (basicWidth + gap) + diff;
  }

  // widthとheightを渡す
  if (isHero) {
    width = heroWidth;
    height = heroHeight;
  }

  const isFrontier = rightIndex + 1 === slideList.length;

  // 代入されたright,width,heightとz-indexをreturn
  const heroZIndex = 10;
  const frontier = 0;
  const style: SlideStyle = {
    width: `${width}px`,
    height: `${height}px`,
    right: `${right}px`,
    zIndex: isFrontier ? frontier : heroZIndex,
  };
  return { style };
};
