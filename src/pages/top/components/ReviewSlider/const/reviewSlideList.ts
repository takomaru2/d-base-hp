import { StaticImageData } from 'next/image';

import image1 from '@/../public/assets/top/works/worksImage01.jpg';
import image2 from '@/../public/assets/top/works/worksImage02.jpg';

type reviewSlideListType = {
  id: string;
  title: string;
  reviewer: string;
  craft: string;
  image: StaticImageData;
  alt: string;
};

export const reviewSlideList: reviewSlideListType[] = [
  {
    id: '1',
    title: '見違えるほど綺麗になりました！',
    reviewer: 'スガちゃん最高No.1様',
    craft: 'ナノセラミックコーティング・・・¥150,000',
    image: image1,
    alt: '施工後の利用者の車外観',
  },
  {
    id: '2',
    title: '美しい',
    reviewer: '島田鉄平',
    craft: 'ナノセラミックコーティング・・・¥150,000',
    image: image2,
    alt: '施工後の利用者の車外観',
  },
  {
    id: '3',
    title: '松谷健太郎',
    reviewer: 'スガちゃん最高No.1様',
    craft: 'ナノセラミックコーティング・・・¥150,000',
    image: image1,
    alt: '施工後の利用者の車外観',
  },
  {
    id: '4',
    title: '見違えるほど綺麗になりました！見違えるほど綺麗になりました！',
    reviewer: '土井垣・D・未来',
    craft: 'ナノセラミックコーティング・・・¥150,000',
    image: image2,
    alt: '施工後の利用者の車外観',
  },
];
