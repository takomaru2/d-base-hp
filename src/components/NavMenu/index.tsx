import Link from 'next/link';
import styles from './index.module.scss';
import { menuItems } from '@/const/menuItems';
import { FC } from 'react';
import { Logo } from '@/components/Logo';

type NavMenuProps = {
  close: () => void;
};

export const NavMenu: FC<NavMenuProps> = ({ close }) => {
  return (
    <div className={styles.navMenu}>
      <div className={styles.top}>
        <Logo color="white" />
        <button className={styles.navClose} onClick={close}>
          ×
        </button>
      </div>
      <ul className={styles.navMenuList}>
        {menuItems.map((item) => (
          <li key={item.id} className={styles.navMenuItem}>
            <Link className={styles.link} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
