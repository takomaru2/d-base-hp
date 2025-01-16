import styles from './index.module.scss';
import Image, { StaticImageData } from 'next/image';
import { CSSProperties, FC } from 'react';

type ReviewSlideImageProps = {
  slideItem: SlideItem;
  style: CSSProperties;
};

type SlideItem = {
  image: StaticImageData;
  alt: string;
};

export const ReviewSlideImage: FC<ReviewSlideImageProps> = ({
  slideItem,
  style,
}) => {
  const { image, alt } = slideItem;
  return (
    <div className={styles.slider}>
      <Image src={image} alt={alt} className={styles.image} style={style} />
    </div>
  );
};
