import styles from './index.module.scss';
import { FC } from 'react';

type PricingPlanProps = {
  title: string;
  description: string;
  minPrice: string;
};

export const PricingPlan: FC<PricingPlanProps> = ({
  title,
  description,
  minPrice,
}) => {
  return (
    <dl className={styles.container}>
      <dt className={styles.title}>{title}</dt>
      <dd className={styles.description}>{description}</dd>
      <dd className={styles.minPrice}>¥ {minPrice}~</dd>
    </dl>
  );
};
