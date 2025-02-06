import styles from './index.module.scss';
import { CarGallery } from '@/pages/works/components/CarGallery';
import { carGalleryList } from '@/pages/works/components/CarGallery/const/carGalleryData';

export const CarGallerySection = () => {
  return (
    <div className={styles.carGallery}>
      {carGalleryList.map(
        ({ id, swiperItem, model, craft, size, price, text }) => (
          <CarGallery
            key={id}
            swiperItemList={swiperItem}
            model={model}
            craft={craft}
            size={size}
            price={price}
            text={text}
          />
        ),
      )}
    </div>
  );
};
