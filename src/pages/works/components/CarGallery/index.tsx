import { FC } from 'react';
import styles from './index.module.scss';
import { CarGallerySubTitle } from '@/pages/works/components/CargallerySubTitle';
import { CarGallerySwiper } from '@/pages/works/components/CarGallerySwiper';
import { swiperItemList } from '@/pages/works/const/swiperItemList01';

export const CarGallery: FC = () => {
  return (
    <>
      <div className={styles.detail}>
        <CarGallerySwiper swiperItem={swiperItemList} />
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>TOYOTA HILUX</h2>
          <div className={styles.subTitleWrapper}>
            <CarGallerySubTitle title={'使用液剤'} description={'NS10-H'} />
            <CarGallerySubTitle title={'サイズ'} description={'LLサイズ'} />
            <CarGallerySubTitle title={'施工価格'} description={'420,000円'} />
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
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
      </div>
    </>
  );
};
