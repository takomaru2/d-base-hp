import styles from './index.module.scss';
import Image, { StaticImageData } from 'next/image';
import { CSSProperties, FC } from 'react';

type ReviewSlideImageProps = {
  image: StaticImageData;
  alt: string;
  style: CSSProperties;
};

export const ReviewSlideImage: FC<ReviewSlideImageProps> = ({
  image,
  alt,
  style,
}) => {
  return (
    <div className={styles.slider}>
      <Image src={image} alt={alt} className={styles.image} style={style} />
    </div>
  );
};
