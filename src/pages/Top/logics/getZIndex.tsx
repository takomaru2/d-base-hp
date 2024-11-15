import styles from '@/pages/Top/Components/TopView/index.module.scss';

import { Image } from '@/pages/Top/const/imageList';

export const getZIndex = (
  index: number,
  activeIndex: number,
  imageList: Image[],
) => {
  const zIndexIndex = [styles.zIndex30, styles.zIndex20, styles.zIndex10];

  const getKey = (activeIndex: number, index: number): number => {
    const plusIndex = activeIndex + index;
    if (plusIndex >= imageList.length) {
      return plusIndex - imageList.length;
    }
    return plusIndex;
  };
  const key = getKey(activeIndex, index);
  return zIndexIndex[key];
};
