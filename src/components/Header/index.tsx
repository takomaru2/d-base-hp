import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';
import { SpNavMenu } from '../SpNavMenu';
import { PcNavMenu } from '../PcNavMenu';

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
        <PcNavMenu />
        {isOpenMenu && <SpNavMenu close={close} />}
      </div>
    </div>
  );
};
