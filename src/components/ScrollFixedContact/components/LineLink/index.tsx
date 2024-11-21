import styles from './index.module.scss';
import Image from 'next/image';
import line from '@/../public/assets/top/line.png';
import Link from 'next/link';
import { FC } from 'react';

export const LineLink: FC = () => {
  return (
    <Link href="https://line.me/ja/" className={styles.line}>
      <Image className={styles.icon} src={line} alt="LINE" />
      <p className={styles.guide}>
        <span className={styles.green}>LINE</span>で
        <br />
        のお問い合わせはこちらから
      </p>
    </Link>
  );
};
