import styles from './index.module.scss';
import { FC } from 'react';
import { TelLink } from '@/components/ScrollFixedContact/components/TelLink';
import { LineLink } from '@/components/ScrollFixedContact/components/LineLink';
import { Information } from '@/components/ScrollFixedContact/components/Information';

export const ScrollFixedContact: FC = () => {
  return (
    <div className={styles.container}>
      <TelLink />
      <LineLink />
      <Information />
    </div>
  );
};
