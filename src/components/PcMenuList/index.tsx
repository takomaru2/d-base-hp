import Link from 'next/link';
import styles from './index.module.scss';
import { menuItems } from '@/const/menuItems';

export const PcMenuList = () => {
  return (
    <ul className={styles.pcMenuList}>
      {menuItems.map((item) => (
        <li key={item.id} className={styles.menuItem}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
