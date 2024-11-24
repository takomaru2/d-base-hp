import worksImage01 from '../../../../../../public/assets/top/works/worksImage01.jpg';
import worksImage02 from '../../../../../../public/assets/top/works/worksImage02.jpg';
import worksImage03 from '../../../../../../public/assets/top/works/worksImage03.jpg';
import worksImage04 from '../../../../../../public/assets/top/works/worksImage04.jpg';
import { StaticImageData } from 'next/image';

type WorksImage = {
  id: string;
  image: StaticImageData;
  model: string;
  craft: string;
  pricing: string;
};

export const worksSlideList: WorksImage[] = [
  {
    id: '1',
    image: worksImage01,
    model: 'SUZUKI Jimny1',
    craft: 'NS-10H1',
    pricing: '100,000',
  },
  {
    id: '2',
    image: worksImage02,
    model: 'TOYOTA Jimny2',
    craft: 'NS-10H2',
    pricing: '120,000',
  },
  {
    id: '3',
    image: worksImage03,
    model: 'LEXUS Jimny3',
    craft: 'NS-10H3',
    pricing: '240,000',
  },
  {
    id: '4',
    image: worksImage04,
    model: 'HONDA Jimny4',
    craft: 'NS-10H4',
    pricing: '460,000',
  },
];
