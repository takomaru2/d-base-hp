import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';
import { NavMenu } from '../NavMenu';
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
        {isOpenMenu && <NavMenu close={close} />}
      </div>
    </div>
  );
};
