import topView01 from '@/../public/assets/Top/pcTopView01.jpg';
import topView02 from '@/../public/assets/Top/pcTopView02.jpg';
import topView03 from '@/../public/assets/Top/pcTopView03.jpg';
import { StaticImageData } from 'next/image';

export type Image = {
  id: string;
  image: StaticImageData;
};
export const imageList: Image[] = [
  { id: '1', image: topView01 },
  { id: '2', image: topView02 },
  { id: '3', image: topView03 },
];
