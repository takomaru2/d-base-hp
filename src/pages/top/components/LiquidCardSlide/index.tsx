import { ComponentProps, FC } from 'react';
import styles from './index.module.scss';
import { LiquidCard } from '@/pages/top/components/LiquidCard';

type SwipeItem = { id: string } & ComponentProps<typeof LiquidCard>;

export type LiquidCardSlideProps = {
  swipeList: SwipeItem[];
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
