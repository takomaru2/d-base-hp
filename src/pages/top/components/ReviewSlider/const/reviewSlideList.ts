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
  model: string;
  comment: string;
};

export const reviewSlideList: reviewSlideListType[] = [
  {
    id: '1',
    title: '見違えるほど綺麗になりました！',
    reviewer: '鼻',
    craft: 'ナノセラミックコーティング・・・¥150,000',
    image: image1,
    alt: '施工後の利用者の車外観',
    model: 'SUZUKI\nJimny',
    comment:
      '思わず抱きしめたくなるような肉感溢れるヘルシースレンダーなもっちり美肌に仕上がりました。綺麗系か可愛い系のどちらかと問われると両方です。',
  },
  {
    id: '2',
    title: '美しい',
    reviewer: '🌊',
    craft: 'ナノセラミックコーティング・・・¥150,000',
    image: image2,
    alt: '施工後の利用者の車外観',
    model: 'CROWN\nJimny',
    comment:
      '思わず抱きしめたくなるような肉感溢れるヘルシースレンダーなもっちり美肌に仕上がりました。綺麗系か可愛い系のどちらかと問われると両方です。',
  },
  {
    id: '3',
    title: 'ルヒィ',
    reviewer: 'ルヒィ',
    craft: 'ナノセラミックコーティング・・・¥ルヒィ',
    image: image1,
    alt: 'ルヒィ',
    model: 'TOYOTA\nJimny',
    comment:
      '思わず抱きしめたくなるような肉感溢れるヘルシースレンダーなもっちり美肌に仕上がりました。綺麗系か可愛い系のどちらかと問われると両方です。',
  },
  {
    id: '4',
    title: '見違えるほど綺麗になりました！見違えるほど綺麗になりました！',
    reviewer: 'サンヂ',
    craft: 'ナノセラミックコーティング・・・¥150,000',
    image: image2,
    alt: '施工後の利用者の車外観',
    model: 'DAIHATSU\nJimny',
    comment:
      '思わず抱きしめたくなるような肉感溢れるヘルシースレンダーなもっちり美肌に仕上がりました。綺麗系か可愛い系のどちらかと問われると両方です。',
  },
];
