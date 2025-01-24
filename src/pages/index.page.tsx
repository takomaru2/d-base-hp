import { Header } from '@/components/Header';
import styles from './top/index.module.scss';
import { TopView } from '@/pages/top/components/TopView';
import { VerticalText } from '@/pages/top/components/VerticalText';

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
    </>
  );
}
