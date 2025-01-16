import styles from './index.module.scss';
import { FC } from 'react';

type ReviewerProps = {
  slideItem: SlideItem;
};

type SlideItem = {
  title: string;
  reviewer: string;
  craft: string;
};

export const Reviewer: FC<ReviewerProps> = ({ slideItem }) => {
  const { title, reviewer, craft } = slideItem;
  return (
    <div className={styles.reviewerWrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.textWrapper}>
        <div className={styles.reviewer}>{reviewer}</div>
        <div className={styles.craft}>{craft}</div>
      </div>
    </div>
  );
};
