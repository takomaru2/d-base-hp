import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import line from '@/../public/assets/top/line.png';
import styles from './index.module.scss';

export const FixedBottomContact: FC = () => {
  return (
    <div className={styles.container}>
      <address className={styles.tel}>
        <a href="tel:0859-00-0000">TEL: 0859-00-0000</a>
      </address>
      <Link href="https://line.me/ja/" className={styles.link}>
        <Image className={styles.icon} src={line} alt="LINE" />
        <div className={styles.guide}>
          <span className={styles.green}>LINE</span>でのお問い合わせはこちら
        </div>
      </Link>
      <ul className={styles.scheduleList}>
        <li className={styles.openingHours}>営業時間 : 10:00 ~ 19:00</li>
        <li className={styles.closing}>定休日 : 毎週水曜日</li>
      </ul>
    </div>
  );
};
