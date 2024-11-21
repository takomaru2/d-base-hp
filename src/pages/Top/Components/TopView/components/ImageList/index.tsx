import { TopViewImage } from '@/pages/top/const/topViewImageList';
import styles from './index.module.scss';
import { getImageStateIndex } from '@/pages/top/logics/getImageStateIndex';
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
          className={`${styles.image} ${getImageStateIndex(index, activeIndex, topViewImageList)}`}
        />
      ))}
    </>
  );
};
