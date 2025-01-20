import styles from './index.module.scss';
import { FC } from 'react';

type ReviewCommentProps = {
  slideItem: SlideItem;
};

type SlideItem = {
  model: string;
  comment: string;
};

export const ReviewComment: FC<ReviewCommentProps> = ({ slideItem }) => {
  const { model, comment } = slideItem;
  return (
    <>
      <div className={styles.model}>{model}</div>
      <div className={styles.comment}>{comment}</div>
    </>
  );
};
