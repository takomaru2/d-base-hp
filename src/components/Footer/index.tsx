import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';
import { footerNav } from '@/const/footerNav';

export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.menu}>
        {footerNav.map((link) => (
          <li key={link.id} className={styles.footerNav}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <a href="logo">
        <Logo color="white" />
      </a>
    </footer>
  );
};
