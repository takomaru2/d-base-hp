import { TopView } from '@/pages/works/components/TopView';
import styles from './index.module.scss';
import { BeforeAfterSection } from '@/pages/works/components/BeforeAfterSection';
import { CarGallerySection } from '@/pages/works/components/CarGallerySection';
import { ProcessSection } from '@/pages/works/components/ProcessSection';

export default function Works() {
  return (
    <>
      <div className={styles.topView}>
        <TopView />
      </div>
      <div className={styles.whiteBackground}>
        <BeforeAfterSection />
      </div>

      <CarGallerySection />

      <ProcessSection />
    </>
  );
}
