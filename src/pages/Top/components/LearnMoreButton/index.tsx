import styles from '@/pages/Top/components/LearnMoreButton/index.module.scss';
import Link from 'next/link';
import { FC } from 'react';

type LearnMoreButtonProps = {
  label: string;
};

export const LearnMoreButton: FC<LearnMoreButtonProps> = ({ label }) => {
  return (
    <Link href="/about" className={styles.button}>
      {label}
    </Link>
  );
};
