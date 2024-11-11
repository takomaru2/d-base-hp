import styles from '@/components/SectionTitle/index.module.scss';
import { FC } from 'react';

type SectionTitleType = {
  jpTitle: string;
  enTitle: string;
};

export const SectionTitle: FC<SectionTitleType> = ({ jpTitle, enTitle }) => {
  return (
    <div className={styles.Title}>
      <h3 className={styles.JpTitle}>{jpTitle}</h3>
      <div className={styles.Border}></div>
      <p className={styles.EnTitle}>{enTitle}</p>
    </div>
  );
};
