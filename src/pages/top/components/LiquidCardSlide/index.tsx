import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import { LiquidCard } from '@/pages/top/components/LiquidCard';
import { StaticImageData } from 'next/image';

export type LiquidCardSlideProps = {
  swipeList: {
    id: string;
    src: StaticImageData;
    alt: string;
    name: string;
    description: ReactNode;
  }[];
};

export const LiquidCardSlide: FC<LiquidCardSlideProps> = ({ swipeList }) => {
  return (
    <div className={styles.wrapper}>
      {swipeList.map((item) => (
        <LiquidCard
          key={item.id}
          src={item.src}
          alt={item.alt}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};
