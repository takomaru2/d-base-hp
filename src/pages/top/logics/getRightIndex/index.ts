import { BaseSlideList } from '../generateSlideStyle';

/**
 * 一番右にあるrightIndexを返す関数
 * activeIndexは4秒おきに更新され、slideList.lengthと同じになると0に戻る。
 * 初期値は、imageIndex-0,activeIndex-0,rightIndex-3となる。つまりimageIndex0は右から4番目配置される
 * このとき、imageIndex-3の画像がrightIndex0となる。
 * 4秒後にactiveIndexが更新して、次に該当するimageIndexにrightIndexが付与されて、一番右に配置される。
 * これが4秒おきに繰り返される。slideListの枚数が増えても同様に対応される。
 */
export const getRightIndex = (
  imageIndex: number,
  activeIndex: number,
  slideList: BaseSlideList[],
) => {
  const length = slideList.length;

  // 「最後のindex (length - 1)」から「imageIndex」「activeIndex」を引き、
  // マイナスになる可能性を考慮してモジュロ演算(剰余)で正の値を返すようにする
  const rightIndex = (length - 1 - imageIndex - activeIndex) % length;

  // JavaScript の % は負の数を返す場合があるので、さらに +length して再度 % length すると安全
  return (rightIndex + length) % length;
};
