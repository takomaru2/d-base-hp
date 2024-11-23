import Image from 'next/image';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { worksImageList } from '@/pages/top/components/WorksSlider/const/worksImageList';

export const WorksSlider = () => {
  const [classState, setClassState] = useState(['a', 'b', 'c', 'd']);

  useEffect(() => {
    let lastTime = performance.now();
    let cancelId: number;
    const intervel = 4000;
    const slide = (currenTime: number) => {
      if (currenTime - lastTime >= intervel) {
        setClassState((prevState) => {
          const [first, ...rest] = prevState;
          return [...rest, first];
        });
        lastTime = currenTime;
      }
      cancelId = requestAnimationFrame(slide);
    };
    cancelId = requestAnimationFrame(slide);
    return () => {
      cancelAnimationFrame(cancelId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {worksImageList.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            alt={'車の画像'}
            className={`${styles.image} ${styles[classState[index]]}`} // クラスを動的に変更
          />
        ))}
      </div>
    </div>
  );
};
