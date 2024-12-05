import { Logo } from '../Logo';
import styles from './index.module.scss';
import { FC } from 'react';
import { SpNavMenu } from '../SpNavMenu';
import { PcNavMenu } from '../PcNavMenu';
import { useIsBoolean } from '@/logics/useBoolean';

export const Header: FC = () => {
  const [isOpenMenu, { toggle }] = useIsBoolean();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo color="white" />
      </div>
      <div className={styles.menu}>
        <button className={styles.spMenu} onClick={toggle}>
          MENU
        </button>
        <PcNavMenu />
        {isOpenMenu && <SpNavMenu close={toggle} />}
      </div>
    </div>
  );
};
