import { FC } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

type LogoProps = {
  color?: 'black' | 'white';
};

export const Logo: FC<LogoProps> = ({ color = 'white' }) => {
  const colorStyle = color === 'white' ? styles.colorWhite : styles.colorBlack;
  return (
    <Link href={'/'} className={styles.logoLink}>
      <h1 className={`${styles.heading} ${colorStyle}`}>D-base</h1>
    </Link>
  );
};
