import { TopView } from '@/pages/works/components/TopView';
import styles from './index.module.scss';
import { Header } from '@/components/Header';
import { CarGallery } from '@/pages/works/components/CarGallery';
import {
  swiperItemList01,
  swiperItemList02,
  swiperItemList03,
} from '@/pages/works/components/CarGallery/const/carGalleryData';
import { ProcessTitle } from '@/pages/works/components/ProcessTitle';
import { ProcessDescription } from '@/pages/works/components/ProcessDescription';
import processImage01 from '@/../public/assets/works/procedure01.jpg';
import processImage02 from '@/../public/assets/works/procedure02.jpg';
import processImage03 from '@/../public/assets/works/procedure03.jpg';
import { SectionTitle } from '@/components/SectionTitle';
import { Footer } from '@/components/Footer';
import { text } from '@/pages/works/components/CarGallery/const/carGalleryData';
import { BeforeAfterSection } from '@/pages/works/components/BeforeAfterSection';

export default function Works() {
  return (
    <>
      <div className={styles.hero}>
        <Header />
      </div>
      <div className={styles.topView}>
        <TopView />
      </div>
      <div className={styles.whiteBackground}>
        <BeforeAfterSection />
      </div>

      <div className={styles.carGallery}>
        <CarGallery
          swiperItemList={swiperItemList01}
          model={'TOYOTA　HILUX '}
          craft={'NS10-H '}
          size={'LLサイズ'}
          price={'420,000円'}
          text={text}
        />
        <CarGallery
          swiperItemList={swiperItemList02}
          model={'TOYOTA HARRIER '}
          craft={'NS10-H '}
          size={'LLサイズ'}
          price={'550,000円'}
          text={text}
        />
        <CarGallery
          swiperItemList={swiperItemList03}
          model={'LEXUS LC-500'}
          craft={'NS10-H '}
          size={'LLサイズ'}
          price={'100,000円'}
          text={text}
        />
      </div>

      <div className={styles.process}>
        <div className={styles.processTitle}>
          <SectionTitle
            jpTitle={'施工手順'}
            enTitle={'process'}
            color={'white'}
          />
        </div>

        <div className={styles.processSubTitle}>
          <ProcessTitle title={'01.下処理'} />
        </div>
        <div className={styles.processDescription}>
          <ProcessDescription
            image={processImage01}
            text={
              'コーティング前の下地処理が重要です。洗車や鉄粉除去、磨きを行い塗装面を整えることで、コーティング剤がしっかり定着し、耐久性と光沢が向上します。'
            }
          />
        </div>

        <div className={styles.processSubTitle}>
          <ProcessTitle title={'02.適切なコーディング剤の選定'} />
        </div>
        <div className={styles.processDescription}>
          <ProcessDescription
            image={processImage02}
            text={
              '車の状態や用途に応じたコーティング剤の選定が重要です。ガラスコーティングは耐久性と光沢、ナノセラミックコーティングは手軽さとコスト面で優れています。'
            }
            reverse={true}
          />
        </div>

        <div className={styles.processSubTitle}>
          <ProcessTitle title={'03.アフターメンテナンス'} />
        </div>
        <div className={styles.processDescription}>
          <ProcessDescription
            image={processImage03}
            text={
              'コーティング後は定期的な洗車と専用メンテナンス剤の使用が重要です。強い洗剤や研磨スポンジを避けることで、コーティングの劣化を防ぎ、効果を長持ちさせます。'
            }
          />
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
