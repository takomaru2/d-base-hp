import styles from './index.module.scss';

export const CraftSelectionCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>最適なコーティングの選び方</div>
      <div className={styles.description}>
        他のコーティング屋はまじで腕がカスです。
        <br />
        目を瞑ってても僕の方が上手いです。 <br />
        他のとこでコーティングするのは <br />
        正直クソ塗りたくるのと同じです。
      </div>
    </div>
  );
};
