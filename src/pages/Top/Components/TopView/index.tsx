import { FC } from 'react';
import styles from './index.module.scss';
import { Logo } from '@/components/Logo';
import { topViewImageList } from '@/pages/top/const/topViewImageList';
import { AutoImageSlide } from '@/pages/top/components/TopView/components/ImageList';

export const TopView: FC = () => {
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
      <AutoImageSlide topViewImageList={topViewImageList} />
    </div>
  );
};
