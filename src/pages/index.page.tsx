import { Header } from '@/components/Header';
import styles from './top/index.module.scss';
import { TopView } from '@/pages/top/components/TopView';

export default function Top() {
  return (
    <>
      <div className={styles.top}>
        <Header />
      </div>
      <TopView />
    </>
  );
}
