import styles from './index.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { ReviewSlider } from '@/pages/top/components/ReviewSlider';

export const ReviewSection = () => {
  return (
    <div className={styles.review}>
      <div className={styles.sectionTitle}>
        <SectionTitle
          jpTitle={'お客様からの声'}
          enTitle={'Review'}
          color={'black'}
        />
      </div>
      <div className={styles.reviewSlide}>
        <ReviewSlider />
      </div>
    </div>
  );
};
