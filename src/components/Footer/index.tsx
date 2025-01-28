import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';
import { footerNav } from '@/const/footerNav';
import { FooterDescription } from '@/components/FooterDescription';

export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <FooterDescription />
      <ul className={styles.menu}>
        {footerNav.map((link) => (
          <li key={link.id} className={styles.footerNav}>
            <a href={link.href} className={styles.footerLink}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <Logo color="white" isTopPageLink={true} />
    </footer>
  );
};
