import styles from './index.module.scss';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type BeforeAfterPcCardProps = {
  pcImage: StaticImageData;
  model: string;
};

export const BeforeAfterPcCard: FC<BeforeAfterPcCardProps> = ({
  pcImage,
  model,
}) => {
  return (
    <div className={styles.pcContainer}>
      <div className={styles.verticalTitle}>{model}</div>
      <Image
        src={pcImage}
        alt={'施工前、施工後の比較写真'}
        className={styles.pcImage}
      />
    </div>
  );
};
