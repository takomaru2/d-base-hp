import Link from 'next/link';
import styles from './index.module.scss';
import { navItemList } from '@/const/navItemList';
import { FC } from 'react';

export const PcNavMenu: FC = () => {
  return (
    <ul className={styles.container}>
      {navItemList.map((item) => (
        <li key={item.id} className={styles.menuItem}>
          <Link className={styles.link} href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
