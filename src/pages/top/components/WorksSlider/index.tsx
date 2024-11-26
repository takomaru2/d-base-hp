import Image from 'next/image';
import styles from './index.module.scss';
import { FC, useState } from 'react';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';

export const WorksSlider: FC = () => {
  const [classState, setClassState] = useState([
    'imageLeft',
    'imageCenterLarge',
    'imageCenterSmall',
    'imageRight',
  ]);

  useAnimationFrameInterval(() => {
    setClassState((prevState) => {
      const [first, ...rest] = prevState;
      return [...rest, first];
    });
  }, 4000);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {worksSlideList.map((slideItem, index) => {
          const isActiveState = classState[index] === 'imageCenterLarge';
          return (
            <div key={slideItem.id}>
              <Image
                src={slideItem.image}
                alt={slideItem.alt}
                // クラスを動的に変更
                className={`${styles.image} ${styles[classState[index]]}`}
              />
              {isActiveState ? (
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
