import styles from './index.module.scss';
import pcImage from '@/../public/assets/top/works/beforeafter-pc.jpg';
import { BeforeAfterSpCard } from '@/components/BeforeAfterSpCard';
import spImage from '../../../public/assets/top/works/before.jpg';
import { BeforeAfterPcCard } from '@/components/BeforeAfterPcCard';

export const BeforeAfterCard = () => {
  return (
    <div className={styles.container}>
      <BeforeAfterSpCard
        title={'Before'}
        description={'150,000\n全2週間'}
        reverse={false}
        image={spImage}
      />
      <BeforeAfterPcCard image={pcImage} model={'SUZUKI Jimny'} />
    </div>
  );
};
