import { Logo } from '../Logo';
import styles from './index.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo color="white" />
      </div>
      <div>
        <div className={styles.menu}>MENU</div>
      </div>
    </div>
  );
};
