import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import { CarGallerySubTitle } from '@/pages/works/components/CargallerySubTitle';
import { CarGallerySwiper } from '@/pages/works/components/CarGallerySwiper';
import { SwiperItem } from '@/pages/works/const/swiperItemList01';

type CarGalleryProps = {
  swiperItemList: SwiperItem[];
  model: string;
  craft: string;
  size: string;
  price: string;
  text: ReactNode;
};

export const CarGallery: FC<CarGalleryProps> = ({
  swiperItemList,
  model,
  craft,
  size,
  price,
  text,
}) => {
  return (
    <>
      <div className={styles.detail}>
        <CarGallerySwiper swiperItem={swiperItemList} />
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{model}</h2>
          <div className={styles.subTitleWrapper}>
            <CarGallerySubTitle title={'使用液剤'} description={craft} />
            <CarGallerySubTitle title={'サイズ'} description={size} />
            <CarGallerySubTitle title={'施工価格'} description={price} />
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>{text}</div>
    </>
  );
};
