import { FC } from 'react';
import styles from './index.module.scss';

type PriceCardTextProps = {
  title: string;
  text: string;
};

export const PriceCardText: FC<PriceCardTextProps> = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
