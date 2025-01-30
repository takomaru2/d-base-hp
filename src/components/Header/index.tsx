import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';
import { SpNavMenu } from '../SpNavMenu';
import { PcNavMenu } from '../PcNavMenu';
import { useIsBoolean } from '@/hooks/useBoolean';

export const Header: FC = () => {
  const [isOpenMenu, { on: open, off: close }] = useIsBoolean();

  const handleOpenMenu = () => {
    open();
    document.body.classList.add('noScroll');
  };

  const handleCloseMenu = () => {
    close();
    document.body.classList.remove('noScroll');
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo color="white" isTopPageLink={true} />
      </div>
      <div className={styles.menu}>
        <button className={styles.spMenu} onClick={handleOpenMenu}>
          MENU
        </button>
        <PcNavMenu />
        <div
          className={`${styles.spNavMenu} ${
            isOpenMenu ? styles.open : styles.closed
          }`}
        >
          <SpNavMenu close={handleCloseMenu} />
        </div>
      </div>
    </div>
  );
};
