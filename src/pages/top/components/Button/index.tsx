import styles from '@/pages/top/components/Button/index.module.scss';
import Link from 'next/link';
import { FC } from 'react';

type ButtonProps = {
  label: string;
  link: string;
};

export const Button: FC<ButtonProps> = ({ label, link }) => {
  return (
    <Link href={link} className={styles.button}>
      {label}
    </Link>
  );
};
