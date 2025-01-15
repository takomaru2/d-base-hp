import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import item1 from '../../../../../public/assets/top/liquidItem/item1.jpg';
import { StaticImageData } from 'next/image';

type LiquidItemProps = {
  src: StaticImageData;
  alt: string;
  title: string;
  text: ReactNode;
};

export const LiquidItem: FC<LiquidItemProps> = (props) => {
  return (
    <div className={styles.item}>
      <Image className={styles.image} alt={props.alt} src={props.src} />
      <div className={styles.textbox}>
        <div className={styles.title}>{props.title}</div>
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  );
};
