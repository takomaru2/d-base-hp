import styles from './index.module.scss';
import { Button } from '@/pages/top/components/Button';
import Image from 'next/image';

export const PolymerCoat = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/assets/top/price/polymerCoatBackImage.jpg"
        alt="ポリマーコートの背景画像"
        width={100}
        height={285}
        className={styles.containerWithBg}
      />
      <div className={styles.wrapper}>
        <h1 className={styles.polymerCoat}>ポリマーコート</h1>
        <h2 className={styles.minPrice}>50,000~</h2>
        <div className={styles.promotionText}>
          <p>※通常のコーティングではありません</p>
          <p>中古のMINIを買ったはいいけどコーティングはしたい</p>
          <p>だけどコーティングは高い</p>
          <p>そんな見えはりなあなたに！！</p>
        </div>
        <div className={styles.button}>
          <Button label="詳しい価格表を見る" link="/details" />
        </div>
      </div>
    </div>
  );
};
