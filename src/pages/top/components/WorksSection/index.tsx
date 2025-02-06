import styles from './index.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { WorksSlider } from '@/pages/top/components/WorksSlider';
import { BeforeAfterSpCard } from '@/components/BeforeAfterSpCard';
import before from '../../../../../public/assets/top/works/before.jpg';
import { BeforeAfterPcCard } from '@/components/BeforeAfterPcCard';
import pcBefore from '../../../../../public/assets/top/works/beforeafter-pc.jpg';
import { ButtonLink } from '@/components/ButtonLink';

export const WorksSection = () => {
  return (
    <>
      <div className={styles.works}>
        <div className={styles.sectionTitle}>
          <SectionTitle
            jpTitle={'施工実績'}
            enTitle={'Works'}
            color={'black'}
          />
        </div>
        <WorksSlider />
        <div className={styles.worksCard}>
          <BeforeAfterSpCard title={'Before'} reverse={false} image={before} />
          <div className={styles.worksSpMargin} />
          <BeforeAfterSpCard
            title={'After'}
            reverse={false}
            image={before}
            description={'¥200,000\n全2週間'}
          />
          <div className={styles.worksMargin} />
          <BeforeAfterSpCard title={'Before'} reverse={false} image={before} />
          <div className={styles.worksSpMargin} />
          <BeforeAfterSpCard
            title={'After'}
            reverse={false}
            image={before}
            description={'¥200,000\n全2週間'}
          />
          <BeforeAfterPcCard image={pcBefore} model={'SUZUKI Jimny'} />
        </div>
        <div className={styles.worksButton}>
          <ButtonLink link={'/works'}>詳しくみる</ButtonLink>
        </div>
      </div>
    </>
  );
};
