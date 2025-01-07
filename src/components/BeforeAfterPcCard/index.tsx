import styles from './index.module.scss';
import Image from 'next/image';
import pc from '../../../public/assets/top/works/beforeafter-pc.jpg';

export const BeforeAfterPcCard = () => {
  return (
    <div className={styles.pcContainer}>
      <div className={styles.verticalTitle}>SUZUKI Jimny</div>
      <Image
        src={pc}
        alt={'施工前、施工後の比較写真'}
        className={styles.pcImage}
      />
    </div>
  );
};
