import styles from './index.module.scss';

export default function Thanks() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        お問い合わせありがとうございました。
        <br />
        内容確認後に担当者から連絡いたいします。
        <br />
      </div>
    </div>
  );
}
