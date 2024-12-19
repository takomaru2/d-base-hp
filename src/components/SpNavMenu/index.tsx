import Link from 'next/link';
import styles from './index.module.scss';
import { navMenu } from '@/const/navMenu';
import { FC } from 'react';
import { Logo } from '@/components/Logo';
import Close from '../../../public/assets/top/close.svg';

type SpNavMenuProps = {
  close: () => void;
};

export const SpNavMenu: FC<SpNavMenuProps> = ({ close }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Logo color="white" isTopPageLink={true} />
        <button className={styles.navClose} onClick={close}>
          <Close width={20} height={20} />
        </button>
      </div>
      <ul className={styles.navMenuList}>
        {navMenu.map((item) => (
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
