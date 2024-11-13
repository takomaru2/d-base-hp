import styles from './index.module.scss';

export const VerticalText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>鳥取専門の</h2>
        <h2 className={styles.secondTitle}>カーコーティング店</h2>
      </div>
      <div className={styles.text}>
        <p>鳥取県唯一の取り扱い液剤で他店にはない技術</p>
        <p>山陰の気候に最適なコーティングを提供</p>
        <p>スタッフ自らが選び抜いた高品質な液剤を使用</p>
        <p>お客さまの車に最高のコーティングを提供します</p>
      </div>
    </div>
  );
};
