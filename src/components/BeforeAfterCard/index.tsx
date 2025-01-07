import styles from './index.module.scss';
import Image from 'next/image';
import pc from '@/../public/assets/top/works/beforeafter-pc.jpg';
import { BeforeAfterSpCard } from '@/components/BeforeAfterSpCard';
import before from '../../../public/assets/top/works/before.jpg';

export const BeforeAfterCard = () => {
  return (
    <div className={styles.container}>
      <BeforeAfterSpCard
        title={'Before'}
        description={'150,000\n全2週間'}
        reverse={false}
        image={before}
      />
      <div className={styles.pcContainer}>
        <div className={styles.verticalTitle}>SUZUKI Jimny</div>
        <Image
          src={pc}
          alt={'施工前、施工後の比較写真'}
          className={styles.pcImage}
        />
      </div>
    </div>
  );
};
