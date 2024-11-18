import { StaticImageData } from 'next/image';
import topView01 from '@/../public/assets/Top/pcTopView01.jpg';
import topView02 from '@/../public/assets/Top/pcTopView02.jpg';
import topView03 from '@/../public/assets/Top/pcTopView03.jpg';

export type TopViewImage = {
  id: string;
  image: StaticImageData;
};

export const topViewImageList: TopViewImage[] = [
  { id: '1', image: topView01 },
  { id: '2', image: topView02 },
  { id: '3', image: topView03 },
];
