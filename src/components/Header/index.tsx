import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';
import { SpMenuList } from '@/components/SpMenuList';
import { PcMenuList } from '@/components/PcMenuList';

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
        <PcMenuList />
        {isOpenMenu && (
          <div className={styles.navMenu}>
            <div className={styles.top}>
              <Logo color="white" />
              <button className={styles.navClose} onClick={close}>
                ×
              </button>
            </div>
            <SpMenuList />
          </div>
        )}
      </div>
    </div>
  );
};
