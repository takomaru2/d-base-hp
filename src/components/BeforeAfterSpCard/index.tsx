import styles from './index.module.scss';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type BeforeAfterSpCardProps = {
  title: 'Before' | 'After';
  description?: string;
  reverse: boolean;
  spImage: StaticImageData;
};

export const BeforeAfterSpCard: FC<BeforeAfterSpCardProps> = ({
  title,
  description,
  reverse,
  spImage,
}) => {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.description}>
        <div>{title}</div>
        {description && (
          <div className={styles.textWrapper}>
            <div className={styles.text}>{description}</div>
          </div>
        )}
      </div>
      <Image
        src={spImage}
        alt={'汚れている車の側面'}
        className={styles.image}
      />
    </div>
  );
};
