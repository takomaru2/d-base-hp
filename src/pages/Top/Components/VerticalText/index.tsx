import styles from './index.module.scss';
import { FC } from 'react';

export const VerticalText: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.titleText}>
          鳥取専門の
          <span className={`${styles.secondTitle} ${styles.titleText}`}>
            カーコーティング店
          </span>
        </span>
      </h2>
      <div className={styles.text}>
        <p className={styles.paragraph}>
          鳥取県唯一の取り扱い液剤で他店にはない技術
          <br />
          山陰の気候に最適なコーティングを提供
          <br />
          スタッフ自らが選び抜いた高品質な液剤を使用
          <br />
          お客さまの車に最高のコーティングを提供します
        </p>
      </div>
    </div>
  );
};
