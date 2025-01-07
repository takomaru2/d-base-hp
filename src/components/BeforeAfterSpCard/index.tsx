import styles from './index.module.scss';
import Image from 'next/image';
import before from '../../../public/assets/top/works/before.jpg';
import { FC } from 'react';

type BeforeAfterSpCardProps = {
  title: 'Before' | 'After';
  description?: string;
};

export const BeforeAfterSpCard: FC<BeforeAfterSpCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <div>{title}</div>
        {description && (
          <div className={styles.textWrapper}>
            <div className={styles.text}>{description}</div>
          </div>
        )}
      </div>
      <Image src={before} alt={'汚れている車の側面'} className={styles.image} />
    </div>
  );
};
