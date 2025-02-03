import { FC } from 'react';
import styles from './index.module.scss';

type CarGallerySubTitleProps = {
  title: string;
  description: string;
};

export const CarGallerySubTitle: FC<CarGallerySubTitleProps> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};
