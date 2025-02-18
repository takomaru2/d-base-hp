import { FC } from 'react';
import styles from './index.module.scss';
import { craftRating } from '@/pages/price/logics/craftRating';

type RatingProps = {
  title: string;
  starLevel: number;
};

export const Rating: FC<RatingProps> = ({ title, starLevel }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div>:</div>
      <div>{craftRating(starLevel)}</div>
    </div>
  );
};
