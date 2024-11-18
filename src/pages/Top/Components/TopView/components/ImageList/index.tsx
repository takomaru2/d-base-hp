import { TopViewImage } from '@/pages/Top/const/topViewImageList';
import styles from '@/pages/Top/Components/TopView/components/ImageList/index.module.scss';
import { getZIndex } from '@/pages/Top/logics/getZIndex';
import Image from 'next/image';
import { FC } from 'react';

type ImageList = {
  activeIndex: number;
  imageList: TopViewImage[];
};

export const ImageList: FC<ImageList> = ({ activeIndex, imageList }) => {
  return (
    <>
      {imageList.map((item, index) => (
        <Image
          key={item.id}
          src={item.image}
          alt={'車の画像'}
          className={`${styles.image} ${getZIndex(index, activeIndex, imageList)}`}
        />
      ))}
    </>
  );
};
