import { Header } from '@/components/Header';
import styles from './top/index.module.scss';
import { TopView } from '@/pages/top/components/TopView';
import { VerticalText } from '@/pages/top/components/VerticalText';
import { SectionTitle } from '@/components/SectionTitle';
import { WorksSlider } from '@/pages/top/components/WorksSlider';

export default function Top() {
  return (
    <>
      <div className={styles.hero}>
        <Header />
      </div>
      <TopView />
      <div className={styles.vertical}>
        <VerticalText />
      </div>
      <div className={styles.works}>
        <div className={styles.worksTitle}>
          <SectionTitle
            jpTitle={'施工実績'}
            enTitle={'Works'}
            color={'black'}
          />
        </div>
        <WorksSlider />
      </div>
    </>
  );
}
