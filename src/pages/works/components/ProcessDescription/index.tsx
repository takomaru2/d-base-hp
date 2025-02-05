import { FC } from 'react';
import styles from './index.module.scss';
import Image, { StaticImageData } from 'next/image';

type ProcessDescription = {
  image: StaticImageData;
  text: string;
  reverse?: boolean;
};

export const ProcessDescription: FC<ProcessDescription> = ({
  image,
  text,
  reverse,
}) => {
  return (
    <div className={`${styles.container} ${reverse ? styles.reverse : ''}`}>
      <Image src={image} alt={'車全面'} className={styles.image} />
      <div className={styles.textWrapper}>{text}</div>
    </div>
  );
};
