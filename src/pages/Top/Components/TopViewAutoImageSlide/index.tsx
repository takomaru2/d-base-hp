import { TopViewImage } from '@/pages/top/const/topViewImageList';
import styles from './index.module.scss';
import { getImageStateIndex } from '@/pages/top/logics/getImageStateIndex';
import Image from 'next/image';
import { FC } from 'react';
import { useAutoSlide } from '@/hooks/useAutoSlide';

type TopViewAutoImageSlideProps = {
  topViewImageList: TopViewImage[];
};

export const TopViewAutoImageSlide: FC<TopViewAutoImageSlideProps> = ({
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
