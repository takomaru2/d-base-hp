import { ComponentProps, FC } from 'react';
import styles from './index.module.scss';
import { PriceCardText } from '@/pages/price/components/PriceCardText';
import { SizeCardText } from '@/pages/price/components/SizeCardText';

export type Price = {
  id: string;
  size: string;
  price: string;
};

type PriceCardList = {
  priceCardText: ComponentProps<typeof PriceCardText>;
  priceList: Price[];
};

export const PriceCard: FC<PriceCardList> = ({ priceCardText, priceList }) => {
  return (
    <div className={styles.container}>
      <PriceCardText
        carCondition={priceCardText.carCondition}
        advice={priceCardText.advice}
      />
      <div className={styles.priceWrapper}>
        {priceList.map(({ id, size, price }) => (
          <SizeCardText size={size} price={price} key={id} />
        ))}
      </div>
    </div>
  );
};
