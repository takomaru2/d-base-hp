import { FC } from 'react';
import styles from './index.module.scss';
import { TopViewAutoImageSlide } from '@/pages/top/components/TopViewAutoImageSlide';
import { topViewImageList } from '@/pages/works/components/TopView/const/worksTopViewImageList';
import { SectionTitle } from '@/components/SectionTitle';

export const TopView: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <TopViewAutoImageSlide topViewImageList={topViewImageList} />
      </div>
      <div className={styles.title}>
        <SectionTitle jpTitle={'施工実績'} enTitle={'works'} color={'white'} />
      </div>
    </div>
  );
};
