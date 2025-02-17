import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type LiquidCardProps = {
  src: StaticImageData;
  alt: string;
  name: string;
  description: ReactNode;
};

export const LiquidCard: FC<LiquidCardProps> = ({
  src,
  alt,
  name,
  description,
}) => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.image} alt={alt} src={src} />
      <div className={styles.textBox}>
        <div className={styles.name}>{name}</div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
