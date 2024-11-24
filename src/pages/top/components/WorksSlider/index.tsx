import Image from 'next/image';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { worksSlideList } from '@/pages/top/components/WorksSlider/const/worksSlideList';

export const WorksSlider = () => {
  const [classState, setClassState] = useState(['a', 'b', 'c', 'd']);

  useEffect(() => {
    let lastTime = performance.now();
    let cancelId: number;
    const interval = 4000;
    const slide = (currenTime: number) => {
      if (currenTime - lastTime >= interval) {
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
        {worksSlideList.map((slideItem, index) => (
          <div key={slideItem.id} className={styles.wrap}>
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

{
  /*// <div className={styles.aaa} key={slideItem.id}>*/
}
{
  /*//   <div className={styles.modelWrapper}>*/
}
{
  /*//     <h3 className={styles.model}>{slideItem.model}</h3>*/
}
{
  /*//     <div className={styles.PriceWrapper}>*/
}
{
  /*//       <div className={styles.craft}>{slideItem.craft}</div>*/
}
{
  /*//       <div className={styles.pricing}>{slideItem.pricing}</div>*/
}
{
  /*//     </div>*/
}
{
  /*//   </div>*/
}
{
  /*// </div>*/
}
