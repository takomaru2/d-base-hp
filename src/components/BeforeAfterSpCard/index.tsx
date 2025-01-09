import styles from './index.module.scss';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type BeforeAfterSpCardProps = {
  title: 'Before' | 'After';
  // もし¥200,000 全2週間のように二つ以上の説明を加えたければ、'¥200,000\n全2週間'のようにして渡す
  description?: string;
  // trueは説明文が左にくる。falseだと右。デザイン要件に沿って判断してください。
  reverse: boolean;
  image: StaticImageData;
};

export const BeforeAfterSpCard: FC<BeforeAfterSpCardProps> = ({
  title,
  description,
  reverse,
  image,
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
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={'汚れている車の側面'}
          className={styles.image}
        />
      </div>
    </div>
  );
};
