import { FC } from 'react';
import styles from './index.module.scss';
import Image, { StaticImageData } from 'next/image';

type CarGalleryProps = {
  swiperItem: SwipeItem[];
};

type SwipeItem = {
  id: string;
  image: StaticImageData;
};

export const CarGallery: FC<CarGalleryProps> = ({ swiperItem }) => {
  return (
    <div className={styles.imageWrapper}>
      {swiperItem.map((item) => (
        <Image
          src={item.image}
          alt={'施工後の車の写真'}
          className={styles.image}
          key={item.id}
        />
      ))}
    </div>
  );
};
