import styles from './top/index.module.scss';
import { TopView } from '@/pages/top/components/TopView';
import { VerticalText } from '@/pages/top/components/VerticalText';
import { SectionTitle } from '@/components/SectionTitle';
import { ButtonLink } from '@/components/ButtonLink';
import { PriceSection } from '@/pages/top/components/PriceSection';
import { LiquidCardSwipe } from '@/pages/top/components/LiquidCardSwipe';
import { liquidSlideItemList } from '@/pages/top/components/LiquidCardSwipe/const/liquidSlideItemList';
import { PolymerCoat } from '@/pages/top/components/PolymerCoat';
import { ReviewSlider } from '@/pages/top/components/ReviewSlider';
import { FAQContainer } from '@/pages/top/components/FAQContainer';
import { AccessSection } from '@/pages/top/components/AccessSection';
import { FixedBottomContact } from '@/components/FixedBottomContact';
import { WorksSection } from '@/pages/top/components/WorksSection';

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

        <div className={styles.review}>
          <div className={styles.sectionTitle}>
            <SectionTitle
              jpTitle={'お客様からの声'}
              enTitle={'Review'}
              color={'black'}
            />
          </div>
          <div className={styles.reviewSlide}>
            <ReviewSlider />
          </div>
        </div>
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
