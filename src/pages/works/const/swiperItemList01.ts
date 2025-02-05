import image1 from '../../../../public/assets/works/carGallery01.jpg';
import image2 from '../../../../public/assets/works/carGallery02.jpg';
import image3 from '../../../../public/assets/works/carGallery03.jpg';
import { StaticImageData } from 'next/image';

export type SwiperItem = {
  id: string;
  image: StaticImageData;
};

export const swiperItemList: SwiperItem[] = [
  {
    id: '1',
    image: image1,
  },
  {
    id: '2',
    image: image2,
  },
  {
    id: '3',
    image: image3,
  },
];
