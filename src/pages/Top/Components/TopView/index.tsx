import { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import { getZIndex } from '@/pages/Top/logics/getZIndex';
import { imageList } from '@/pages/Top/const/imageList';
import { Logo } from '@/components/Logo';
import { useAutoSlide } from '@/hooks/useAutoSlide';

export const TopView: FC = () => {
  const activeIndex = useAutoSlide(imageList.length);

  return (
    <div className={styles.container}>
      <div className={styles.titleLogoWrap}>
        <h2 className={styles.title}>
          鳥取唯一の技術
          <br />
          高級感ある仕上がりを
          <br />
          あなたの愛車に
        </h2>
        <Logo />
      </div>

      {imageList.map((item, index) => (
        <Image
          key={item.id}
          src={item.image}
          alt={'車の画像'}
          className={`${styles.image} ${getZIndex(index, activeIndex, imageList)}`}
        />
      ))}
    </div>
  );
};
