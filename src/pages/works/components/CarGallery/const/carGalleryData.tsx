import image1 from '@/../public/assets/works/carGallery01.jpg';
import image2 from '@/../public/assets/works/carGallery02.jpg';
import image3 from '@/../public/assets/works/carGallery03.jpg';
import { StaticImageData } from 'next/image';

export type SwiperItem = {
  id: string;
  image: StaticImageData;
};

type CarGalleryProps = {
  id: string;
  swiperItem: SwiperItem[];
  model: string;
  craft: string;
  size: string;
  price: string;
  text: string;
}[];

export const carGalleryList: CarGalleryProps = [
  {
    id: '1',
    swiperItem: [
      { id: '1', image: image1 },
      { id: '2', image: image2 },
      { id: '3', image: image3 },
    ],
    model: 'TOYOTA　HILUX ',
    craft: 'NS10-H',
    size: 'LLサイズ',
    price: '420,000円',
    text: 'NS10-H（新車限定）は、新車で納車されてから1ヶ月前後のお車が対象となるコーティングであり、ボディは磨かず、手洗い洗車後にUVAとUVBの両紫外線を軽減するガラスコーティング剤【トップコート】を施工する形になります。\n      塗装の状態は非常にキレイで、所々ディーラー様が磨いたと思われるコンパウンド残りが付着していたので、その部分をキレイに取り除いて施工させていただきました。\n同時に、窓ガラス全面撥水加工も施しましたので、雨天時の視界確保に役立つと思います。窓ガラス油膜取り作業を行ってから撥水加工を施しておりますし、市販品よりも撥水力・耐久性がございますので、非常にオススメのオプションメニューとなっております。\nコーティング後は、当店からお渡しております専用メンテナンスキットを利用して正しいセオリー通りの洗車をしていただければ、長期間に渡って美しい状態を維持できると思います。\n',
  },
  {
    id: '2',
    swiperItem: [
      { id: '1', image: image2 },
      { id: '2', image: image1 },
      { id: '3', image: image3 },
    ],
    model: 'TOYOTA HARRIER ',
    craft: 'NS10-H',
    size: 'LLサイズ',
    price: '550,000円',
    text: 'NS10-H（新車限定）は、新車で納車されてから1ヶ月前後のお車が対象となるコーティングであり、ボディは磨かず、手洗い洗車後にUVAとUVBの両紫外線を軽減するガラスコーティング剤【トップコート】を施工する形になります。\n      塗装の状態は非常にキレイで、所々ディーラー様が磨いたと思われるコンパウンド残りが付着していたので、その部分をキレイに取り除いて施工させていただきました。\n同時に、窓ガラス全面撥水加工も施しましたので、雨天時の視界確保に役立つと思います。窓ガラス油膜取り作業を行ってから撥水加工を施しておりますし、市販品よりも撥水力・耐久性がございますので、非常にオススメのオプションメニューとなっております。\nコーティング後は、当店からお渡しております専用メンテナンスキットを利用して正しいセオリー通りの洗車をしていただければ、長期間に渡って美しい状態を維持できると思います。\n',
  },
  {
    id: '3',
    swiperItem: [
      { id: '1', image: image3 },
      { id: '2', image: image1 },
      { id: '3', image: image3 },
    ],
    model: 'LEXUS LC-500',
    craft: 'NS10-H',
    size: 'LLサイズ',
    price: '100,000円',
    text: 'NS10-H（新車限定）は、新車で納車されてから1ヶ月前後のお車が対象となるコーティングであり、ボディは磨かず、手洗い洗車後にUVAとUVBの両紫外線を軽減するガラスコーティング剤【トップコート】を施工する形になります。\n      塗装の状態は非常にキレイで、所々ディーラー様が磨いたと思われるコンパウンド残りが付着していたので、その部分をキレイに取り除いて施工させていただきました。\n同時に、窓ガラス全面撥水加工も施しましたので、雨天時の視界確保に役立つと思います。窓ガラス油膜取り作業を行ってから撥水加工を施しておりますし、市販品よりも撥水力・耐久性がございますので、非常にオススメのオプションメニューとなっております。\nコーティング後は、当店からお渡しております専用メンテナンスキットを利用して正しいセオリー通りの洗車をしていただければ、長期間に渡って美しい状態を維持できると思います。\n',
  },
];
