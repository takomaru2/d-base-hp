import { SectionTitle } from '@/components/SectionTitle';
import styles from './index.module.scss';
import { CardButtonLinkList } from '@/pages/price/components/CardButtonLinkList';
import { cardButtonLinkList } from '@/pages/price/components/CardButtonLinkList/const/cardButtonLinkList';
import { CraftSelectionCard } from '@/pages/price/components/CraftSelectionCard';
import { CarDrawerList } from '@/pages/price/components/CarDrawerList';
import { CraftSectionNS10H } from '@/pages/price/components/CraftSectionNS10H';
import { CraftSectionNASIOL } from '@/pages/price/components/CraftSectionNASIOL';
import { CraftSectionKUBEBOND } from '@/pages/price/components/CraftSectionKUBEBOND';

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
      <div className={styles.craftCard}>
        <CraftSelectionCard />
      </div>
      <div className={styles.backGroundCarDrawer}>
        <div className={styles.carDrawer}>
          <CarDrawerList />
        </div>
      </div>
      <div className={styles.comments}>
        ※代車のご用意が必要な場合はご予約時にお申し付けください。
        <br />
        ※施工価格は予告なく変更する場合がございます。
        <br />
        ※表示価格は税込み表示となります。
        <br />
        ※コーティングの効果は車両の使用状況や環境により 異なる場合があります。
      </div>
      <div className={styles.craftSection}>
        <CraftSectionNS10H />
        <CraftSectionNASIOL />
        <CraftSectionKUBEBOND />
      </div>
    </>
  );
}
