import styles from '@/pages/top/components/TopView/index.module.scss';
import { TopViewImage } from '@/pages/top/const/topViewImageList';

export const getZIndex = (
  index: number,
  activeIndex: number,
  imageList: TopViewImage[],
) => {
  const zIndexIndex = [styles.zIndex30, styles.zIndex20, styles.zIndex10];

  /*
  imageList.length === 3のとき
  activeIndex + index が1,2のときはそのまま1,2を返す
  3の時は、 % 3をして0を返し、ループされる
   */
  const getKey = (activeIndex: number, index: number): number => {
    return (activeIndex + index) % imageList.length;
  };

  const key = getKey(activeIndex, index);
  return zIndexIndex[key];
};
