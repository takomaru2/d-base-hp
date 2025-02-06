import styles from './top/index.module.scss';
import { TopView } from '@/pages/top/components/TopView';
import { VerticalText } from '@/pages/top/components/VerticalText';
import { SectionTitle } from '@/components/SectionTitle';
import { PriceSection } from '@/pages/top/components/PriceSection';
import { FAQContainer } from '@/pages/top/components/FAQContainer';
import { AccessSection } from '@/pages/top/components/AccessSection';
import { FixedBottomContact } from '@/components/FixedBottomContact';
import { WorksSection } from '@/pages/top/components/WorksSection';
import { LiquidSection } from '@/pages/top/components/LiquidSection';
import { ReviewSection } from '@/pages/top/components/ReviewSection';

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

      <div className={styles.faq}>
        <div className={`${styles.sectionTitle} ${styles.faqTitle}`}>
          <SectionTitle
            jpTitle={'よくあるご質問'}
            enTitle={'Q ＆ A'}
            color={'white'}
          />
        </div>
        <div className={styles.faqContainer}>
          <FAQContainer />
        </div>
      </div>

      <div className={styles.access}>
        <AccessSection />
      </div>
    </>
  );
}
