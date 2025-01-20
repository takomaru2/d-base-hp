import styles from './index.module.scss';
import { FC } from 'react';

type ReviewerProps = {
  title: string;
  reviewer: string;
  craft: string;
};

export const Reviewer: FC<ReviewerProps> = ({ title, reviewer, craft }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.textWrapper}>
        <div className={styles.reviewer}>{reviewer}</div>
        <div className={styles.craft}>{craft}</div>
      </div>
    </div>
  );
};
