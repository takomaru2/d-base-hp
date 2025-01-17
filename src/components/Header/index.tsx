import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';
import { SpNavMenu } from '../SpNavMenu';
import { PcNavMenu } from '../PcNavMenu';
import { useIsBoolean } from '@/hooks/useBoolean';

export const Header: FC = () => {
  const [isOpenMenu, { on: open, off: close }] = useIsBoolean();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo color="white" isTopPageLink={true} />
      </div>
      <div className={styles.menu}>
        <button className={styles.spMenu} onClick={open}>
          MENU
        </button>
        <PcNavMenu />
        <div
          className={`${styles.spNavMenu} ${
            isOpenMenu ? styles.open : styles.closed
          }`}
        >
          {isOpenMenu && <SpNavMenu close={close} />}
        </div>
      </div>
    </div>
  );
};
