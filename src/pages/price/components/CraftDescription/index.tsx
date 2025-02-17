import { FC } from 'react';
import styles from './index.module.scss';

type CraftDescriptionProps = {
  title: string;
  children: string;
};

export const CraftDescription: FC<CraftDescriptionProps> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{children}</div>
    </div>
  );
};
