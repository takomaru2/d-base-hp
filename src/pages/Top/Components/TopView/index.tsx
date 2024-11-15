import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import { getZIndex } from '@/pages/Top/logics/getZIndex';
import { imageList } from '@/pages/Top/const/imageList';

export const TopView: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    //   const interval = setInterval(() => {
    //     setActiveIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    //   }, 3500);
    //   return () => clearInterval(interval);

    const interval = 3500;
    let lastTime = performance.now();
    let cancelId: number;
    const slide = (currentTime: number) => {
      if (currentTime - lastTime >= interval) {
        setActiveIndex(
          (previousIndex) => (previousIndex + 1) % imageList.length,
        );
        lastTime = currentTime;
      }
      cancelId = requestAnimationFrame(slide);
    };
    cancelId = requestAnimationFrame(slide);

    return () => {
      cancelAnimationFrame(cancelId);
    };
  }, [imageList.length, setActiveIndex]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        鳥取唯一の技術
        <br />
        高級感ある仕上がりを
        <br />
        あなたの愛車に
      </h2>

      <div
        style={{
          position: 'relative',
          width: 390,
        }}
      >
        {imageList.map((item, index) => (
          <Image
            key={item.id}
            src={item.image}
            alt={'車の画像'}
            className={`${styles.image} ${getZIndex(index, activeIndex, imageList)}`}
          />
        ))}
      </div>
    </div>
  );
};
