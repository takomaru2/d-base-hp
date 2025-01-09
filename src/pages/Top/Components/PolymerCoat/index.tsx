import styles from './index.module.scss';
import { ButtonLink } from '@/components/ButtonLink';
import { backgroundImage } from '@/pages/top/const/polymerCoatData';

export const PolymerCoat = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.polymerCoat}>ポリマーコート</h1>
      <h2 className={styles.minPrice}>50,000~</h2>
      <p className={styles.description}>
        {
          '※通常のコーティングではありません\n中古のMINIを買ったはいいけどコーティングはしたい\nだけどコーティングは高い\nそんな見えはりなあなたに！！'
        }
      </p>
      <div className={styles.button}>
        <ButtonLink children="詳しい価格表を見る" link="/details" />
      </div>
    </div>
  );
};
