import { FC } from 'react';
import styles from './index.module.scss';
import { CarDrawer } from '@/pages/price/components/CarDrawer';
import { carDrawerList } from '@/pages/price/components/CarDrawerList/const/carDrawerList';
import { useModal } from '@/pages/top/hooks/useModal';
import { ns10hNew } from '@/pages/price/components/PriceCard/const/priceCardList';

export const CarDrawerList: FC = () => {
  const { isAnswerVisible, getActiveIndex } = useModal();

  console.log(ns10hNew);
  return (
    <div className={styles.container}>
      {carDrawerList.map((item, index) => (
        <CarDrawer
          isOpen={isAnswerVisible(index)}
          onClick={() => getActiveIndex(index)}
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
