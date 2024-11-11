import styles from '@/components/SectionTitle/index.module.scss';
import { FC } from 'react';

type SectionTitleType = {
  sectionJpTitle: string;
  sectionEnTitle: string;
};

export const SectionTitle: FC<SectionTitleType> = ({
  sectionJpTitle,
  sectionEnTitle,
}) => {
  return (
    <div className={styles.sectionTitle}>
      <h3 className={styles.sectionJpTitle}>{sectionJpTitle}</h3>
      <div className={styles.sectionBorder}></div>
      <p className={styles.sectionEnTitle}>{sectionEnTitle}</p>
    </div>
  );
};
