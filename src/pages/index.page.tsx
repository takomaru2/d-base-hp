import styles from './top/index.module.scss';
import { TopView } from '@/pages/top/components/TopView';
import { VerticalText } from '@/pages/top/components/VerticalText';
import { PriceSection } from '@/pages/top/components/PriceSection';
import { AccessSection } from '@/pages/top/components/AccessSection';
import { FixedBottomContact } from '@/components/FixedBottomContact';
import { WorksSection } from '@/pages/top/components/WorksSection';
import { LiquidSection } from '@/pages/top/components/LiquidSection';
import { ReviewSection } from '@/pages/top/components/ReviewSection';
import { FaqSection } from '@/pages/top/components/FaqSection';

export default function Top() {
  return (
    <>
      <div className={styles.fixedBottom}>
        <FixedBottomContact />
      </div>
      <TopView />

      <div className={styles.vertical}>
        <VerticalText />
      </div>

      <div className={styles.whiteBackGround}>
        <WorksSection />

        <PriceSection />

        <LiquidSection />

        <ReviewSection />
      </div>

      <FaqSection />

      <div className={styles.access}>
        <AccessSection />
      </div>
    </>
  );
}
