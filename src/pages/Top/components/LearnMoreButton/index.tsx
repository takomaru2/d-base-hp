import styles from '@/pages/Top/components/LearnMoreButton/index.module.scss';
import { FC } from 'react';

type LearnMoreButtonProps = {
  label: string;
};

export const LearnMoreButton: FC<LearnMoreButtonProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};
