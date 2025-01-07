import { TopViewImage } from '@/pages/topa/const/topViewImageList';
import styles from './index.module.scss';
import { getImageStateIndex } from '@/pages/topa/logics/getImageStateIndex';
import Image from 'next/image';
import { FC } from 'react';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';
import { useActiveIndex } from '@/hooks/useActiveIndex';

type TopViewAutoImageSlideProps = {
  topViewImageList: TopViewImage[];
};

export const TopViewAutoImageSlide: FC<TopViewAutoImageSlideProps> = ({
  topViewImageList,
}) => {
  const [activeIndex, setActiveIndex] = useActiveIndex();

  const length = topViewImageList.length;
  useAnimationFrameInterval(() => {
    setActiveIndex((previousIndex) => (previousIndex + 1) % length);
  }, 4000);

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
