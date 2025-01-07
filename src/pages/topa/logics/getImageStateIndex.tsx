import styles from '@/pages/topa/components/TopView/index.module.scss';
import { TopViewImage } from '@/pages/topa/const/topViewImageList';

export const getImageStateIndex = (
  index: number,
  activeIndex: number,
  imageList: TopViewImage[],
) => {
  const imageStateIndex = [
    styles.imageVisible,
    styles.imageSecondary,
    styles.imageHidden,
  ];

  /*
  imageList.length === 3のとき
  activeIndex + index が1,2のときはそのまま1,2を返す
  3の時は、 % 3をして0を返し、ループされる
   */
  const getKey = (activeIndex: number, index: number): number => {
    return (activeIndex + index) % imageList.length;
  };

  const key = getKey(activeIndex, index);
  return imageStateIndex[key];
};
