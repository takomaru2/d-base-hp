import styles from './index.module.scss';
import { FC } from 'react';

export const ShopSchedule: FC = () => {
  return (
    <ul className={styles.information}>
      <li className={styles.time}>営業時間 : 10:00 ~ 19:00</li>
      <li className={styles.closing}>定休日 : 毎週水曜日</li>
    </ul>
  );
};
