import Link from 'next/link';
import styles from './index.module.scss';
import { navMenu } from '@/const/navMenu';
import { FC } from 'react';
import { scrollToId } from '@/logics/scrollToId';

export const PcNavMenu: FC = () => {
  return (
    <ul className={styles.container}>
      {navMenu.map((item) => {
        console.log(item.label);
        return (
          <li key={item.id} className={styles.menuItem}>
            <Link
              className={styles.link}
              href={item.href}
              onClick={(event) => {
                if (item.name === 'access' || item.name === 'faq') {
                  event.preventDefault();
                  scrollToId(item.name);
                }
              }}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
