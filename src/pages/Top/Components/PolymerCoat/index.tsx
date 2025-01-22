import styles from './index.module.scss';
import { ButtonLink } from '@/components/ButtonLink';

const POLYMER_COAT_LINK =
  'https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=h_1472bukgb00003/';

export const PolymerCoat = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.polymerCoat}>ポリマーコート</h1>
      <h2 className={styles.minPrice}>50,000~</h2>
      <p className={styles.description}>
        ※通常のコーティングではありません
        <br />
        中古のMINIを買ったはいいけどコーティングはしたい
        <br />
        だけどコーティングは高い
        <br />
        そんな見えはりなあなたに！！
      </p>
      <div className={styles.button}>
        <ButtonLink link={POLYMER_COAT_LINK}>詳しい価格表を見る</ButtonLink>
      </div>
    </div>
  );
};
