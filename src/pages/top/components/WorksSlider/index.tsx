import Image from 'next/image';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { worksImageList } from '@/pages/top/components/WorksSlider/const/worksImageList';

export const WorksSlider = () => {
  const [classState, setClassState] = useState(['a', 'b', 'c', 'd']);

  useEffect(() => {
    const interval = setInterval(() => {
      setClassState((prevState) => {
        const [first, ...rest] = prevState;
        return [...rest, first];
      });
    }, 4000);

    return () => clearInterval(interval);
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
