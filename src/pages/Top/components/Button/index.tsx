import styles from '@/pages/Top/components/Button/index.module.scss';
import Link from 'next/link';
import { FC } from 'react';

type ButtonProps = {
  label: string;
};

export const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <Link href="/about" className={styles.button}>
      {label}
    </Link>
  );
};
