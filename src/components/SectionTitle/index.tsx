import styles from '@/components/SectionTitle/index.module.scss';
import { FC } from 'react';

type SectionTitleProps = {
  jpTitle: string;
  enTitle: string;
};

export const SectionTitle: FC<SectionTitleProps> = ({ jpTitle, enTitle }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.jpTitle}>{jpTitle}</h2>
      <div className={styles.border}></div>
      <div className={styles.enTitle}>{enTitle}</div>
    </div>
  );
};
