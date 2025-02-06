import styles from './top/index.module.scss';
import { TopView } from '@/pages/top/components/TopView';
import { VerticalText } from '@/pages/top/components/VerticalText';
import { SectionTitle } from '@/components/SectionTitle';
import { WorksSlider } from '@/pages/top/components/WorksSlider';
import { BeforeAfterSpCard } from '@/components/BeforeAfterSpCard';
import before from '@/../public/assets/top/works/before.jpg';
import { BeforeAfterPcCard } from '@/components/BeforeAfterPcCard';
import pcBefore from '../../public/assets/top/works/beforeafter-pc.jpg';
import { ButtonLink } from '@/components/ButtonLink';
import { PriceSection } from '@/pages/top/components/PriceSection';
import { LiquidCardSwipe } from '@/pages/top/components/LiquidCardSwipe';
import { liquidSlideItemList } from '@/pages/top/components/LiquidCardSwipe/const/liquidSlideItemList';
import { PolymerCoat } from '@/pages/top/components/PolymerCoat';
import { ReviewSlider } from '@/pages/top/components/ReviewSlider';
import { FAQContainer } from '@/pages/top/components/FAQContainer';
import { AccessSection } from '@/pages/top/components/AccessSection';
import { FixedBottomContact } from '@/components/FixedBottomContact';

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
        <div className={styles.works}>
          <div className={styles.sectionTitle}>
            <SectionTitle
              jpTitle={'施工実績'}
              enTitle={'Works'}
              color={'black'}
            />
          </div>
          <WorksSlider />
          <div className={styles.worksCard}>
            <BeforeAfterSpCard
              title={'Before'}
              reverse={false}
              image={before}
            />
            <div className={styles.worksSpMargin} />
            <BeforeAfterSpCard
              title={'After'}
              reverse={false}
              image={before}
              description={'¥200,000\n全2週間'}
            />
            <div className={styles.worksMargin} />
            <BeforeAfterSpCard
              title={'Before'}
              reverse={false}
              image={before}
            />
            <div className={styles.worksSpMargin} />
            <BeforeAfterSpCard
              title={'After'}
              reverse={false}
              image={before}
              description={'¥200,000\n全2週間'}
            />
            <BeforeAfterPcCard image={pcBefore} model={'SUZUKI Jimny'} />
          </div>
          <div className={styles.worksButton}>
            <ButtonLink link={'/works'}>詳しくみる</ButtonLink>
          </div>
        </div>

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
