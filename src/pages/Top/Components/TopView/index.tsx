import { FC, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import topView01 from '@/../public/assets/Top/topView01.jpg';
import topView02 from '@/../public/assets/Top/topView02.jpg';
import topView03 from '@/../public/assets/Top/topView03.jpg';
import styles from './index.module.scss';

export const TopView: FC = () => {
  type Image = {
    id: string;
    image: StaticImageData;
  };
  const imageList: Image[] = [
    { id: '1', image: topView01 },
    { id: '2', image: topView02 },
    { id: '3', image: topView03 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [imageList.length]);

  const getZIndex = (index: number) => {
    const zIndexIndex = [styles.zIndex30, styles.zIndex20, styles.zIndex10];

    const getKey = (activeIndex: number, index: number): number => {
      const plusIndex = activeIndex + index;
      if (plusIndex >= imageList.length) {
        return plusIndex - imageList.length;
      }
      return plusIndex;
    };
    const key = getKey(activeIndex, index);
    return zIndexIndex[key];
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        鳥取唯一の技術
        <br />
        高級感ある仕上がりを
        <br />
        あなたの愛車に
      </h2>

      <div style={{ position: 'relative', width: 390 }}>
        {imageList.map((item, index) => (
          <Image
            key={item.id}
            src={item.image}
            alt={'車の画像'}
            className={`${styles.image} ${getZIndex(index)}`}
          />
        ))}
      </div>
    </div>
  );
};
