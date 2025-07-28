import styles from './index.module.scss';
import { ButtonLink } from '@/components/ButtonLink';

export default function Confirm() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>以下の内容でよろしいでしょうか？</h2>
      </div>
      <div className={styles.list}>
        <ul className={styles.listKey}>
          <li className={styles.listItem}>お名前</li>
          <li className={styles.listItem}>フリガナ</li>
          <li className={styles.listItem}>メールアドレス</li>
          <li className={styles.listItem}>ご連絡先</li>
          <li className={styles.listItem}>車種・サイズ</li>
          <li className={styles.listItem}>車の年数</li>
          <li className={styles.listItem}>希望の液剤</li>
          <li className={styles.listItem}>お問い合わせ内容</li>
        </ul>
        <ul className={styles.listContent}>
          <li className={styles.listItem}>島田 鉄平</li>
          <li className={styles.listItem}>シマダ テッペイ</li>
          <li className={styles.listItem}>jagjkahkfjhak@gmail.com</li>
          <li className={styles.listItem}>07029696993</li>
          <li className={styles.listItem}>S ~ LLサイズ</li>
          <li className={styles.listItem}>3年〜5年</li>
          <li className={styles.listItem}>kubebond</li>
          <li className={styles.listItem}>
            カーコーティングの施工を検討していますが、具体的にどのような効果が期待できるのでしょうか？例えば、光沢や撥水性、汚れの付着防止などはどの程度実感できるものなのか知りたいです。また、施工後の効果は通常どれくらいの期間持続するのか、定期的なメンテナンスは必要なのかも気になります。さらに、コーティングの種類によって耐久性や見た目の仕上がりが変わると聞きますが、どのように選ぶのが良いのかアドバイスがあれば教えていただきたいです。
          </li>
        </ul>
      </div>

      <div className={styles.buttonWrapper}>
        <ButtonLink link={'#'}>送信する</ButtonLink>
      </div>
    </div>
  );
}
