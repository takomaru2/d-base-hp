import worksImage01 from '../../../../../../public/assets/top/works/worksImage01.jpg';
import worksImage02 from '../../../../../../public/assets/top/works/worksImage02.jpg';
import worksImage03 from '../../../../../../public/assets/top/works/worksImage03.jpg';
import worksImage04 from '../../../../../../public/assets/top/works/worksImage04.jpg';
import gonta from '../../../../../../public/assets/top/works/gonta.jpg';
import muscle from '../../../../../../public/assets/top/works/muscle.jpg';
import { StaticImageData } from 'next/image';

type WorksSlideImage = {
  id: string;
  image: StaticImageData;
  model: string;
  alt: string;
  craft: string;
  pricing: string;
};

export const worksSlideList: WorksSlideImage[] = [
  {
    id: '1',
    image: worksImage01,
    model: 'SUZUKI Jimny1',
    alt: '車の前部分',
    craft: 'NS-10H1',
    pricing: '¥100,000',
  },
  {
    id: '2',
    image: worksImage02,
    model: 'TOYOTA Jimny2',
    alt: '車の前部分',
    craft: 'NS-10H2',
    pricing: '¥120,000',
  },
  {
    id: '3',
    image: worksImage03,
    model: 'LEXUS Jimny3',
    alt: '車の前部分',
    craft: 'NS-10H3',
    pricing: '¥240,000',
  },
  {
    id: '4',
    image: worksImage04,
    model: 'HONDA Jimny4',
    alt: '車の前部分',
    craft: 'NS-10H4',
    pricing: '¥460,000',
  },
  {
    id: '5',
    image: gonta,
    model: 'GONTA',
    alt: 'ごんたという名の犬',
    craft: '境港産',
    pricing: 'ご縁',
  },
  {
    id: '6',
    image: muscle,
    model: 'MENS PHYSIQUE',
    alt: '石飛という名のマッチョ',
    craft: '鶏胸肉',
    pricing: '９位',
  },
];
