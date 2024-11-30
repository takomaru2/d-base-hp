import Image from 'next/image';
import styles from './index.module.scss';
import { FC, useState } from 'react';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';

export const WorksSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useAnimationFrameInterval(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % worksSlideList.length);
  }, 4000);

  const getDynamicClassName = (imageIndex: number): string => {
    const offset = 1;
    const isLeft = activeIndex === imageIndex;
    const isHero =
      (activeIndex + offset) % worksSlideList.length === imageIndex;

    if (isLeft) {
      return styles.imageLeft;
    }
    if (isHero) {
      return styles.imageCenterLarge;
    }

    // activeIndexから何番目の右側なのかを返す
    const rightIndex =
      (imageIndex - activeIndex - offset + worksSlideList.length) %
      worksSlideList.length;
    return styles[`imageRight${rightIndex}`];
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {worksSlideList.map((slideItem, imageIndex) => {
          const dynamicClassName = getDynamicClassName(imageIndex);
          console.log(
            `imageIndex: ${imageIndex}, className: ${getDynamicClassName(imageIndex)}`,
          );
          return (
            <div key={slideItem.id}>
              <Image
                src={slideItem.image}
                alt={slideItem.alt}
                // クラスを動的に変更
                className={`${styles.image} ${dynamicClassName}`}
              />
              {dynamicClassName === styles.imageCenterLarge ? (
                <div className={styles.modelDetail}>
                  <div className={styles.model}>{slideItem.model}</div>
                  <div className={styles.priceWrapper}>
                    <div>{slideItem.craft}</div>
                    <div>{slideItem.pricing}</div>
                  </div>
                </div>
              ) : undefined}
            </div>
          );
        })}
      </div>
    </div>
  );
};
