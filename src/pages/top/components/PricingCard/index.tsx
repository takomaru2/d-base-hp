import styles from './index.module.scss';
import { FC } from 'react';

type PricingCardProps = {
  title: string;
  text: string;
  price: string;
};

export const PricingCard: FC<PricingCardProps> = ({ title, text, price }) => {
  return (
    <dl className={styles.container}>
      <dt className={styles.title}>{title}</dt>
      <dd className={styles.text}>{text}</dd>
      <dd className={styles.price}>¥ {price}~</dd>
    </dl>
  );
};
