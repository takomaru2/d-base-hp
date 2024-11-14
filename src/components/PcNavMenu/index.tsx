import Link from 'next/link';
import styles from './index.module.scss';
import { menuItems } from '@/const/menuItems';
import { FC } from 'react';

export const PcNavMenu: FC = () => {
  return (
    <ul className={styles.container}>
      {menuItems.map((item) => (
        <li key={item.id} className={styles.menuItem}>
          <Link className={styles.link} href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
