import { FC } from 'react';
import styles from './index.module.scss';
import { PriceCardText } from '@/pages/price/components/PriceCardText';
import { SizeCardText } from '@/pages/price/components/SizeCardText';

type List = {
  id: string;
  size: string;
  price: string;
};

type PriceCardList = {
  list: List[];
};

export const PriceCard: FC<PriceCardList> = ({ list }) => {
  return (
    <div className={styles.container}>
      <PriceCardText
        title={'エントリー'}
        text={
          '推奨: 新車～登録3ヶ月\n低価格でコーティングの効果を重視する方におすすめ。ボディ全面を塗装の負担なく研磨します。'
        }
      />
      <div className={styles.priceWrapper}>
        {list.map(({ id, size, price }) => (
          <SizeCardText size={size} price={price} key={id} />
        ))}
      </div>
    </div>
  );
};
