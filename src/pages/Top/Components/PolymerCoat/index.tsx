import styles from './index.module.scss';
import { ButtonLink } from '@/components/ButtonLink';

const POLYMER_COAT_LINK =
  'https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=h_1472bukgb00003/';
const backgroundImage = '/assets/top/price/polymerCoatBackImage.jpg';

export const PolymerCoat = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1 className={styles.polymerCoat}>ポリマーコート</h1>
      <h2 className={styles.minPrice}>50,000~</h2>
      <p className={styles.description}>
        {
          '※通常のコーティングではありません\n中古のMINIを買ったはいいけどコーティングはしたい\nだけどコーティングは高い\nそんな見えはりなあなたに！！'
        }
      </p>
      <div className={styles.button}>
        <ButtonLink link={POLYMER_COAT_LINK}>詳しい価格表を見る</ButtonLink>
      </div>
    </div>
  );
};
