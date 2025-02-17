import { SectionTitle } from '@/components/SectionTitle';
import styles from './index.module.scss';
import { CardButtonLinkList } from '@/pages/price/components/CardButtonLinkList';
import { cardButtonLinkList } from '@/pages/price/components/CardButtonLinkList/const/cardButtonLinkList';

export default function Price() {
  return (
    <>
      <div className={styles.topView}>
        <div className={styles.sectionTitle}>
          <SectionTitle jpTitle={'価格表'} enTitle={'Price'} color={'black'} />
        </div>
        <div className={styles.cardButtonList}>
          <CardButtonLinkList cardButtonLinkListProps={cardButtonLinkList} />
        </div>
      </div>
    </>
  );
}
