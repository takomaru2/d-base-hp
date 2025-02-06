import { BeforeAfterSpCard } from '@/components/BeforeAfterSpCard';
import before from '../../../../../public/assets/top/works/before.jpg';
import { BeforeAfterPcCard } from '@/components/BeforeAfterPcCard';
import pcBefore from '../../../../../public/assets/top/works/beforeafter-pc.jpg';
import { FC } from 'react';
import styles from './index.module.scss';

export const BeforeAfterSection: FC = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.cardTitle}>SUZUKI Jimny</div>
        <BeforeAfterSpCard title={'Before'} reverse={false} image={before} />
        <BeforeAfterSpCard
          title={'After'}
          reverse={false}
          image={before}
          description={'¥200,000\n全2週間'}
        />
        <BeforeAfterPcCard image={pcBefore} model={'SUZUKI Jimny'} />
      </div>
      <div className={`${styles.cardWrapper} ${styles.cardGap}`}>
        <BeforeAfterSpCard title={'Before'} reverse={true} image={before} />
        <BeforeAfterSpCard
          title={'After'}
          reverse={true}
          image={before}
          description={'¥200,000\n全2週間'}
        />
        <BeforeAfterPcCard image={pcBefore} model={'SUZUKI Jimny'} />
      </div>
    </>
  );
};
