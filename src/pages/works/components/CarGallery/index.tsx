import { FC } from 'react';
import styles from './index.module.scss';
import image1 from '@/../public/assets/works/carGallery01.jpg';
import image2 from '@/../public/assets/works/carGallery02.jpg';
import image3 from '@/../public/assets/works/carGallery03.jpg';
import Image from 'next/image';

export const CarGallery: FC = () => {
  return (
    <div className={styles.imageWrapper}>
      <Image src={image1} alt={'施工後の車の写真'} className={styles.image} />
      <Image src={image2} alt={'施工後の車の写真'} className={styles.image} />
      <Image src={image3} alt={'施工後の車の写真'} className={styles.image} />
    </div>
  );
};
