import { FC } from 'react';
import styles from './index.module.scss';

type PriceCardTextProps = {
  carCondition: string;
  advice: string;
};

export const PriceCardText: FC<PriceCardTextProps> = ({
  carCondition,
  advice,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{carCondition}</div>
      <div className={styles.text}>{advice}</div>
    </div>
  );
};
