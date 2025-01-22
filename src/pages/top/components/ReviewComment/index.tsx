import styles from './index.module.scss';
import { FC } from 'react';

type ReviewCommentProps = {
  model: string;
  comment: string;
};

export const ReviewComment: FC<ReviewCommentProps> = ({ model, comment }) => {
  return (
    <>
      <div className={styles.model}>{model}</div>
      <div className={styles.comment}>{comment}</div>
    </>
  );
};
