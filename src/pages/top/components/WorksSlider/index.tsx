import Image from 'next/image';
import styles from './index.module.scss';
import { useState } from 'react';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';
import { useAnimationFrameInterval } from '@/hooks/useAnimationFrameInterval';

export const WorksSlider = () => {
  const [classState, setClassState] = useState(['a', 'b', 'c', 'd']);

  useAnimationFrameInterval(() => {
    setClassState((prevState) => {
      const [first, ...rest] = prevState;
      return [...rest, first];
    });
  }, 4000);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {worksSlideList.map((slideItem, index) => (
          <div key={slideItem.id}>
            <Image
              src={slideItem.image}
              alt={'車の画像'}
              // クラスを動的に変更
              className={`${styles.image} ${styles[classState[index]]}`}
            />
            {classState[index] === 'b' ? (
              <div className={styles.modelDetail}>
                <div className={styles.model}>{slideItem.model}</div>
                <div className={styles.priceWrapper}>
                  <div>{slideItem.craft}</div>
                  <div>{slideItem.pricing}</div>
                </div>
              </div>
            ) : undefined}
          </div>
        ))}
      </div>
    </div>
  );
};
