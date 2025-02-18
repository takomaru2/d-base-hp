import styles from './index.module.scss';
import { CarDrawerList } from '@/pages/price/components/CarDrawerList';

export const CarDrawerSection = () => {
  return (
    <div className={styles.backGroundCarDrawer}>
      <div className={styles.carDrawer}>
        <CarDrawerList />
      </div>
      <div className={styles.comments}>
        ※代車のご用意が必要な場合はご予約時にお申し付けください。
        <br />
        ※施工価格は予告なく変更する場合がございます。
        <br />
        ※表示価格は税込み表示となります。
        <br />
        ※コーティングの効果は車両の使用状況や環境により 異なる場合があります。
      </div>
    </div>
  );
};
