import styles from '@/pages/Top/components/LearnMoreButton/index.module.scss';
import { FC } from 'react';

type LearnMoreButtonProps = {
  buttonTitle: string;
};

export const LearnMoreButton: FC<LearnMoreButtonProps> = ({ buttonTitle }) => {
  return <button className={styles.button}>{buttonTitle}</button>;
};
