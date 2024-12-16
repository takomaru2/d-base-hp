import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';
import { footerNav } from '@/const/footerNav';

export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.menu}>
        {footerNav.map((id) => (
          <li key={id.href} className={styles.footerNav}>
            <a href={id.href}>{id.name}</a>
          </li>
        ))}
      </ul>
      <a href="logo" className={styles.logoLink}>
        <Logo color="white" />
      </a>
    </footer>
  );
};
