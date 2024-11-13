import Link from 'next/link';
import styles from './index.module.scss';
import { menuItems } from '@/const/menuItems';
import { FC } from 'react';

export const SpMenuList: FC = () => {
  return (
    <ul className={styles.navMenuList}>
      {menuItems.map((item) => (
        <li key={item.id} className={styles.navMenuItem}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
