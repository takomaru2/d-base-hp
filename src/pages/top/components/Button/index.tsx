import styles from '@/pages/top/components/Button/index.module.scss';
import Link from 'next/link';
import { FC } from 'react';

type ButtonProps = {
  label: 'normal' | 'price';
  link: string;
};

export const Button: FC<ButtonProps> = ({ label, link }) => {
  const displayLabel = (() => {
    switch (label) {
      case 'normal': {
        return '詳しくみる';
      }
      case 'price': {
        return '詳しい価格表を見る';
      }
      default: {
        return '';
      }
    }
  })();

  return (
    <Link href={link} className={`${styles[label]} ${styles.button}`}>
      {displayLabel}
    </Link>
  );
};
