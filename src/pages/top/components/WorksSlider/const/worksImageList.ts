import worksImage01 from '@/../public/assets/Top/works/worksImage01.jpg';
import worksImage02 from '@/../public/assets/Top/works/worksImage02.jpg';
import worksImage03 from '@/../public/assets/Top/works/worksImage03.jpg';
import worksImage04 from '@/../public/assets/Top/works/worksImage04.jpg';
import { StaticImageData } from 'next/image';

type WorksImage = {
  id: string;
  image: StaticImageData;
};

export const worksImageList: WorksImage[] = [
  { id: '1', image: worksImage01 },
  { id: '2', image: worksImage02 },
  { id: '3', image: worksImage03 },
  { id: '4', image: worksImage04 },
];
