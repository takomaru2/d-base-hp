import styles from './index.module.scss';
import { FC } from 'react';
import { TelLink } from '@/components/AdulationModal/components/TelLink';
import { LineLink } from '@/components/AdulationModal/components/LineLink';
import { Information } from '@/components/AdulationModal/components/Information';

export const AdulationModal: FC = () => {
  return (
    <div className={styles.container}>
      <TelLink />
      <LineLink />
      <Information />
    </div>
  );
};
