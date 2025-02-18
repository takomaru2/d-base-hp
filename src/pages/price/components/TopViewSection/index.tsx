import styles from './index.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { CardButtonLinkList } from '@/pages/price/components/CardButtonLinkList';
import { cardButtonLinkList } from '@/pages/price/components/CardButtonLinkList/const/cardButtonLinkList';

export const TopViewSection = () => {
  return (
    <div className={styles.topView}>
      <div className={styles.sectionTitle}>
        <SectionTitle jpTitle={'価格表'} enTitle={'Price'} color={'black'} />
      </div>
      <div className={styles.cardButtonList}>
        <CardButtonLinkList cardButtonLinkListProps={cardButtonLinkList} />
      </div>
    </div>
  );
};
