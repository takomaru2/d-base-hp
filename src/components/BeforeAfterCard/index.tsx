import styles from './index.module.scss';
import Image from 'next/image';
import before from '@/../public/assets/top/works/before.jpg';
import pc from '@/../public/assets/top/works/beforeafter-pc.jpg';

export const BeforeAfterCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.description}>Before</div>
        <Image
          src={before}
          alt={'汚れている車の側面'}
          className={styles.image}
        />
      </div>
      <Image
        src={pc}
        alt={'施工前、施工後の比較写真'}
        width={1235}
        height={700}
        className={styles.pcImage}
      />
    </div>
  );
};
