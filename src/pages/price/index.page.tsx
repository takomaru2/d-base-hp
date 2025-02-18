import styles from './index.module.scss';
import { CraftSelectionCard } from '@/pages/price/components/CraftSelectionCard';
import { CraftSectionNS10H } from '@/pages/price/components/CraftSectionNS10H';
import { CraftSectionNASIOL } from '@/pages/price/components/CraftSectionNASIOL';
import { CraftSectionKUBEBOND } from '@/pages/price/components/CraftSectionKUBEBOND';
import { TopViewSection } from './components/TopViewSection';
import { CarDrawerSection } from '@/pages/price/components/CarDrawerSection';

export default function Price() {
  return (
    <>
      <TopViewSection />
      <div className={styles.craftCard}>
        <CraftSelectionCard />
      </div>
      <CarDrawerSection />
      <div className={styles.craftSection}>
        <CraftSectionNS10H />
        <CraftSectionNASIOL />
        <CraftSectionKUBEBOND />
      </div>
    </>
  );
}
