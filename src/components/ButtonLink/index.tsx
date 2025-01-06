import styles from '@/components/ButtonLink/index.module.scss';
import Link from 'next/link';
import { FC } from 'react';

type ButtonProps = {
  link: string;
  children: string;
};

export const ButtonLink: FC<ButtonProps> = ({ link, children }) => {
  return (
    <Link href={link} className={styles.button}>
      {children}
    </Link>
  );
};
