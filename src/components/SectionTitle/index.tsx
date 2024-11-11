import styles from './index.module.scss';
import { FC } from 'react';

type SectionTitleProps = {
  jpTitle: string;
  enTitle: string;
  color: string;
};

export const SectionTitle: FC<SectionTitleProps> = ({
  jpTitle,
  enTitle,
  color,
}) => {
  const sectionColor = color === 'white' ? styles.white : styles.black;

  return (
    <div className={`${styles.wrapper} ${sectionColor}`}>
      <h2 className={styles.jpTitle}>{jpTitle}</h2>
      <div className={`${styles.border} ${sectionColor}`}></div>
      <div className={styles.enTitle}>{enTitle}</div>
    </div>
  );
};
