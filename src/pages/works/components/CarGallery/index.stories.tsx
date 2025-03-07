import { CarGallery as Component } from './index';
import { Meta, StoryObj } from '@storybook/react';
import styles from '@/pages/works/components/CarGallery/index.module.scss';
import image1 from '@/../public/assets/works/carGallery01.jpg';
import image2 from '@/../public/assets/works/carGallery02.jpg';
import image3 from '@/../public/assets/works/carGallery03.jpg';
import { SwiperItem } from '@/pages/works/components/CarGallery/const/carGalleryData';

const swiperItemList: SwiperItem[] = [
  { id: '1', image: image1 },
  { id: '2', image: image2 },
  { id: '3', image: image3 },
];

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    swiperItemList: swiperItemList,
    model: 'TOYOTA HILUX',
    craft: 'NS10-H',
    size: 'LLサイズ',
    price: '420,000円',
    text: (
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
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
