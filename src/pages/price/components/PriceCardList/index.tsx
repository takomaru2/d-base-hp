import { ComponentProps, FC } from 'react';
import styles from './index.module.scss';
import { PriceCard } from '@/pages/price/components/PriceCard';

type PriceCardListProps = {
  cardList: ({ id: string } & ComponentProps<typeof PriceCard>)[];
};

export const PriceCardList: FC<PriceCardListProps> = ({ cardList }) => {
  return (
    <div className={styles.container}>
      {cardList.map((card) => (
        <PriceCard
          priceCardText={card.priceCardText}
          key={card.id}
          priceList={card.priceList}
        />
      ))}
    </div>
  );
};
