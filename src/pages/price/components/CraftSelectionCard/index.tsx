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
      <div className={styles.comments}>
        ※代車のご用意が必要な場合はご予約時にお申し付けください。
        <br />
        ※施工価格は予告なく変更する場合がございます。
        <br />
        ※表示価格は税込み表示となります。
        <br />
        ※コーティングの効果は車両の使用状況や環境により異なる場合があります。
      </div>
    </div>
  );
};
