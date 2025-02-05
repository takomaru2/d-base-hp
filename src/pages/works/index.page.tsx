import { TopView } from '@/pages/works/components/TopView';
import styles from './index.module.scss';
import { Header } from '@/components/Header';
import { BeforeAfterSpCard } from '@/components/BeforeAfterSpCard';
import { BeforeAfterPcCard } from '@/components/BeforeAfterPcCard';
import before from '../../../public/assets/top/works/before.jpg';
import pcBefore from '../../../public/assets/top/works/beforeafter-pc.jpg';
import { CarGallery } from '@/pages/works/components/CarGallery';
import {
  swiperItemList01,
  swiperItemList02,
  swiperItemList03,
} from '@/pages/works/const/swiperItemList';
import { ProcessTitle } from '@/pages/works/components/ProcessTitle';
import { ProcessDescription } from '@/pages/works/components/ProcessDescription';
import processImage01 from '@/../public/assets/works/procedure01.jpg';
import processImage02 from '@/../public/assets/works/procedure02.jpg';
import processImage03 from '@/../public/assets/works/procedure03.jpg';
import { SectionTitle } from '@/components/SectionTitle';
import { Footer } from '@/components/Footer';

const text = (
  <>
    <p>
      NS10-H（新車限定）は、新車で納車されてから1ヶ月前後のお車が対象となるコーティングであり、ボディは磨かず、手洗い洗車後にUVAとUVBの両紫外線を軽減するガラスコーティング剤【トップコート】を施工する形になります。
    </p>
    <p className={styles.text}>
      塗装の状態は非常にキレイで、所々ディーラー様が磨いたと思われるコンパウンド残りが付着していたので、その部分をキレイに取り除いて施工させていただきました。
    </p>
    <p className={styles.text}>
      同時に、窓ガラス全面撥水加工も施しましたので、雨天時の視界確保に役立つと思います。窓ガラス油膜取り作業を行ってから撥水加工を施しておりますし、市販品よりも撥水力・耐久性がございますので、非常にオススメのオプションメニューとなっております。
    </p>
    <p className={styles.text}>
      コーティング後は、当店からお渡しております専用メンテナンスキットを利用して正しいセオリー通りの洗車をしていただければ、長期間に渡って美しい状態を維持できると思います。
    </p>
  </>
);

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
        <div className={styles.cardWrapper}>
          <div className={styles.cardTitle}>SUZUKI Jimny</div>
          <BeforeAfterSpCard title={'Before'} reverse={false} image={before} />
          <BeforeAfterSpCard
            title={'After'}
            reverse={false}
            image={before}
            description={'¥200,000\n全2週間'}
          />
          <BeforeAfterPcCard image={pcBefore} model={'SUZUKI Jimny'} />
        </div>
        <div className={`${styles.cardWrapper} ${styles.cardGap}`}>
          <BeforeAfterSpCard title={'Before'} reverse={true} image={before} />
          <BeforeAfterSpCard
            title={'After'}
            reverse={true}
            image={before}
            description={'¥200,000\n全2週間'}
          />
          <BeforeAfterPcCard image={pcBefore} model={'SUZUKI Jimny'} />
        </div>
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
