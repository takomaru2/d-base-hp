import { FC } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import plusImage from '../../../../../public/assets/top/plus.png';
// import minusImage from '../../../../../public/assets/top/minus.png';

export const CarModal: FC = () => {
  return (
    <details className={styles.container}>
      <summary
        className={styles.carSize}
        // onClick={onClick}
      >
        <div className={styles.title}>SSサイズ</div>
        <Image src={plusImage} alt={'push button'} className={styles.icon} />
      </summary>
      <div className={styles.carList}>
        I / IQ / N-ONE / N-WGN / S660 / モコ / ロードスター / SMART / UP! / など
      </div>
    </details>
  );
};
