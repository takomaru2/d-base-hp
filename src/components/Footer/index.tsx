import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.flexLeftMenu}>
          <li>
            <a href="home">ホーム</a>
          </li>
          <li>
            <a href="price">価格表</a>
          </li>
          <li>
            <a href="works">施工実績</a>
          </li>
          <li>
            <a href="privacy">プライバシーポリシー</a>
          </li>
        </div>
        <div className={styles.flexRightMenu}>
          <li>
            <a href="form">お問い合わせ</a>
          </li>
          <li>
            <a href="faq">よくある質問</a>
          </li>
          <li>
            <a href="access">アクセス</a>
          </li>
        </div>
      </div>
      <div className={styles.logo}>
        <Logo color="white" />
      </div>
    </div>
  );
};
