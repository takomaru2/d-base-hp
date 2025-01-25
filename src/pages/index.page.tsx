import { Header } from '@/components/Header';
import styles from './top/index.module.scss';
import { TopView } from '@/pages/top/components/TopView';
import { VerticalText } from '@/pages/top/components/VerticalText';
import { SectionTitle } from '@/components/SectionTitle';
import { WorksSlider } from '@/pages/top/components/WorksSlider';
import { BeforeAfterSpCard } from '@/components/BeforeAfterSpCard';
import before from '@/../public/assets/top/works/before.jpg';
import { BeforeAfterPcCard } from '@/components/BeforeAfterPcCard';
import pcBefore from '@/../public/assets/top/works/beforeafter-pc.jpg';
import { ButtonLink } from '@/components/ButtonLink';
import { PriceSection } from '@/pages/top/components/PriceSection';
import { LiquidCardSwipe } from '@/pages/top/components/LiquidCardSwipe';
import { liquidSlideItemList } from '@/pages/top/components/LiquidCardSwipe/const/liquidSlideItemList';

export default function Top() {
  return (
    <>
      <div className={styles.hero}>
        <Header />
      </div>
      <TopView />

      <div className={styles.vertical}>
        <VerticalText />
      </div>

      <div className={styles.works}>
        <div className={styles.worksTitle}>
          <SectionTitle
            jpTitle={'施工実績'}
            enTitle={'Works'}
            color={'black'}
          />
        </div>
        <WorksSlider />
        <div className={styles.worksCard}>
          <BeforeAfterSpCard title={'Before'} reverse={false} image={before} />
          <div className={styles.worksSpMargin} />
          <BeforeAfterSpCard
            title={'After'}
            reverse={false}
            image={before}
            description={'¥200,000\n全2週間'}
          />
          <div className={styles.worksMargin} />
          <BeforeAfterSpCard title={'Before'} reverse={false} image={before} />
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
          <ButtonLink link={'/'}>詳しくみる</ButtonLink>
        </div>
      </div>

      <PriceSection />
      <div className={styles.liquid}>
        <div className={styles.liquidTitle}>
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
      </div>
    </>
  );
}
