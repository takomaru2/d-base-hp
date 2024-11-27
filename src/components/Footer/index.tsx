import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li className={styles.navMenu}>
          <a href="home">ホーム</a>
        </li>
        <li className={styles.navMenu}>
          <a href="price">価格表</a>
        </li>
        <li className={styles.navMenu}>
          <a href="works">施工実績</a>
        </li>
        <li className={styles.navMenu}>
          <a href="form">お問い合わせ</a>
        </li>
        <li className={styles.navMenu}>
          <a href="faq">よくある質問</a>
        </li>
        <li className={styles.navMenu}>
          <a href="access">アクセス</a>
        </li>
        <li className={styles.navMenu}>
          <a href="privacy">プライバシーポリシー</a>
        </li>
      </ul>
      <a href="logo" className={styles.logoLink}>
        <Logo color="white" />
      </a>
    </div>
  );
};
