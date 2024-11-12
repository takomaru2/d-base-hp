import { Logo } from '../Logo';
import styles from './index.module.scss';
import Link from 'next/link';
import { FC } from 'react';

type HeaderProps = {
  isOpenMenu: boolean;
};

export const Header: FC<HeaderProps> = ({ isOpenMenu }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo color="white" />
      </div>
      <div className={styles.menu}>
        <button className={styles.spMenu}>MENU</button>
        <ul className={styles.pcMenuList}>
          <li className={styles.menuItem}>
            <Link href="/">ホーム</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">施工実績</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">価格表</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">アクセス</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">よくある質問</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">お問い合わせ</Link>
          </li>
        </ul>
        {isOpenMenu && (
          <div className={styles.navMenu}>
            <div className={styles.top}>
              <Logo />
              <button className={styles.navClose}>×</button>
            </div>
            <ul className={styles.navMenuList}>
              <li className={styles.navMenuItem}>
                <Link href="/">ホーム</Link>
              </li>
              <li className={styles.navMenuItem}>
                <Link href="/">施工実績</Link>
              </li>
              <li className={styles.navMenuItem}>
                <Link href="/">価格表</Link>
              </li>
              <li className={styles.navMenuItem}>
                <Link href="/">アクセス</Link>
              </li>
              <li className={styles.navMenuItem}>
                <Link href="/">よくある質問</Link>
              </li>
              <li className={styles.navMenuItem}>
                <Link href="/">お問い合わせ</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
