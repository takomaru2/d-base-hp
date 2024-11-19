import { TopViewImage } from '@/pages/top/const/topViewImageList';
import styles from '@/pages/top/components/TopView/components/ImageList/index.module.scss';
import { getZIndex } from '@/pages/top/logics/getZIndex';
import Image from 'next/image';
import { FC } from 'react';
import { useAutoSlide } from '@/hooks/useAutoSlide';

type AutoImageSlideProps = {
  topViewImageList: TopViewImage[];
};

export const AutoImageSlide: FC<AutoImageSlideProps> = ({
  topViewImageList,
}) => {
  const activeIndex = useAutoSlide(topViewImageList.length);
  return (
    <>
      {topViewImageList.map((item, index) => (
        <Image
          key={item.id}
          src={item.image}
          alt={'車の画像'}
          className={`${styles.image} ${getZIndex(index, activeIndex, topViewImageList)}`}
        />
      ))}
    </>
  );
};
