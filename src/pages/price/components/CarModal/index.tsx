import { FC } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import plusImage from '../../../../../public/assets/top/plus.png';
// import minusImage from '../../../../../public/assets/top/minus.png';

export const CarModal: FC = () => {
  return (
    <div className={styles.container}>
      <button
        className={styles.carSize}
        type={'button'}
        // onClick={onClick}
      >
        <div className={styles.title}>SSサイズ</div>
        <Image src={plusImage} alt={'push button'} className={styles.icon} />
      </button>
      <div className={styles.carList}>
        I / IQ / N-ONE / N-WGN / S660 / モコ / ロードスター / SMART / UP! / など
      </div>
    </div>
  );
};
