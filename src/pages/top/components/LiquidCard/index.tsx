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

export const LiquidCard: FC<LiquidCardProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.image} alt={props.alt} src={props.src} />
      <div className={styles.textBox}>
        <div className={styles.name}>{props.name}</div>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};
