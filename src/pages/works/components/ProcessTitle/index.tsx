import { FC } from 'react';
import styles from './index.module.scss';

type ProcessTitleProps = {
  title: string;
};

export const ProcessTitle: FC<ProcessTitleProps> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};
