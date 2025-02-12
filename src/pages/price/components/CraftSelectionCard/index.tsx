import styles from './index.module.scss';

export const CraftSelectionCard = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>最適なコーティングの選び方</h1>
      <div className={styles.description}>
        <p>
          他のコーティング屋はまじで腕がカスです。
          <br />
          目を瞑っててもうちの方が上手いです。 <br />
          他のとこでコーティングするのは
          <br />
          正直クソ塗りたくってるようなもんです。
        </p>
      </div>
      <div className={styles.comments}>
        <h3>ご利用の際の注意点</h3>
        <ul>
          <li>※代車のご用意が必要な場合はご予約時にお申し付けください。</li>
          <li>※施工価格は予告なく変更する場合がございます。</li>
          <li>※表示価格は税込み表示となります。</li>
          <li>
            ※コーティングの効果は車両の使用状況や環境により異なる場合があります。
          </li>
        </ul>
      </div>
    </div>
  );
};
