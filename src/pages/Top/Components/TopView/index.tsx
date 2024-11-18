import { FC } from 'react';
import styles from './index.module.scss';
import { Logo } from '@/components/Logo';
import { useAutoSlide } from '@/hooks/useAutoSlide';
import { topViewImageList } from '@/pages/Top/const/topViewImageList';
import { ImageList } from '@/pages/Top/Components/TopView/components/ImageList';

export const TopView: FC = () => {
  const activeIndex = useAutoSlide(topViewImageList.length);

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

      <ImageList activeIndex={activeIndex} imageList={topViewImageList} />
    </div>
  );
};
