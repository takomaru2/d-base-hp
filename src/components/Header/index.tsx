import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';
import { MenuList } from '@/components/MenuList';

type HeaderProps = {
  isOpenMenu: boolean;
  close: () => void;
};

export const Header: FC<HeaderProps> = ({ isOpenMenu, close }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo color="white" />
      </div>
      <div className={styles.menu}>
        <button className={styles.spMenu}>MENU</button>
        <MenuList
          ulClassName={styles.pcMenuList}
          liClassName={styles.menuItem}
        />
        {isOpenMenu && (
          <div className={styles.navMenu}>
            <div className={styles.top}>
              <Logo color="white" />
              <button className={styles.navClose} onClick={close}>
                ×
              </button>
            </div>
            <MenuList
              ulClassName={styles.navMenuList}
              liClassName={styles.navMenuItem}
            />
          </div>
        )}
      </div>
    </div>
  );
};
