import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';
import { footerNav } from '@/const/footerNav';

export const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {footerNav.map((item) => (
          <li key={item.href} className={styles.footerNav}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <a href="logo" className={styles.logoLink}>
        <Logo color="white" />
      </a>
    </div>
  );
};
