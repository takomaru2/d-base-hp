import { FC } from 'react';
import styles from './index.module.scss';

type CraftDescriptionProps = {
  title: string;
  description: string;
};

export const CraftDescription: FC<CraftDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
