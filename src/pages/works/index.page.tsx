import { TopView } from '@/pages/works/components/TopView';
import styles from './index.module.scss';
import { Header } from '@/components/Header';

export default function Works() {
  return (
    <>
      <div className={styles.hero}>
        <Header />
      </div>
      <TopView />
    </>
  );
}
