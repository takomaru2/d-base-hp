import styles from './index.module.scss';
import { CarGallery } from '@/pages/works/components/CarGallery';
import {
  swiperItemList01,
  swiperItemList02,
  swiperItemList03,
  text,
} from '@/pages/works/components/CarGallery/const/carGalleryData';

export const CarGallerySection = () => {
  return (
    <div className={styles.carGallery}>
      <CarGallery
        swiperItemList={swiperItemList01}
        model={'TOYOTA　HILUX '}
        craft={'NS10-H '}
        size={'LLサイズ'}
        price={'420,000円'}
        text={text}
      />
      <CarGallery
        swiperItemList={swiperItemList02}
        model={'TOYOTA HARRIER '}
        craft={'NS10-H '}
        size={'LLサイズ'}
        price={'550,000円'}
        text={text}
      />
      <CarGallery
        swiperItemList={swiperItemList03}
        model={'LEXUS LC-500'}
        craft={'NS10-H '}
        size={'LLサイズ'}
        price={'100,000円'}
        text={text}
      />
    </div>
  );
};
