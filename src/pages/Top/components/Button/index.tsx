import styles from '@/pages/Top/components/Button/index.module.scss';
import { FC } from 'react';

type ButtonProps = {
  label: string;
};

export const Button: FC<ButtonProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};
