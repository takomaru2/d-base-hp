import styles from './index.module.scss';
import { FC } from 'react';

export const TelLink: FC = () => {
  return (
    <address className={styles.tel}>
      <a href="tel:0859-00-0000">TEL: 0859-00-0000</a>
    </address>
  );
};
