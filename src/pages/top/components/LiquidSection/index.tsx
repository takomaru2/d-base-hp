import styles from './index.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { LiquidCardSwipe } from '@/pages/top/components/LiquidCardSwipe';
import { liquidSlideItemList } from '@/pages/top/components/LiquidCardSwipe/const/liquidSlideItemList';
import { ButtonLink } from '@/components/ButtonLink';
import { PolymerCoat } from '@/pages/top/components/PolymerCoat';

export const LiquidSection = () => {
  return (
    <div className={styles.liquid}>
      <div className={styles.sectionTitle}>
        <SectionTitle
          jpTitle={'使用液剤'}
          enTitle={'Introduction'}
          color={'black'}
        />
      </div>
      <div className={styles.liquidSwipe}>
        <LiquidCardSwipe swipeList={liquidSlideItemList} />
      </div>
      <div className={styles.liquidButton}>
        <ButtonLink link={'/'}>詳しく見る</ButtonLink>
      </div>
      <PolymerCoat />
    </div>
  );
};
