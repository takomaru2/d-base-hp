import { FC } from 'react';
import styles from './index.module.scss';
import { liquidSlideItemList } from '@/pages/top/components/LiquidCardSlide/const/liquidSlideItemList';
import { LiquidCard } from '@/pages/top/components/LiquidCard';

export const LiquidCardSlide: FC = () => {
  return (
    <div className={styles.wrapper}>
      {liquidSlideItemList.map((item) => (
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
