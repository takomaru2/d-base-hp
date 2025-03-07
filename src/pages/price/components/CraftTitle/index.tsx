import styles from './index.module.scss';
import { FC } from 'react';

type CraftTitleProps = {
  title: string;
  description: string;
};

export const CraftTitle: FC<CraftTitleProps> = ({ title, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
