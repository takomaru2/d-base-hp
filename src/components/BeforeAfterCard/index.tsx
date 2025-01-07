import styles from './index.module.scss';
import pcImage from '@/../public/assets/top/works/beforeafter-pc.jpg';
import { BeforeAfterSpCard } from '@/components/BeforeAfterSpCard';
import spImage from '../../../public/assets/top/works/before.jpg';
import { BeforeAfterPcCard } from '@/components/BeforeAfterPcCard';
import { StaticImageData } from 'next/image';
import { FC } from 'react';

type BeforeAfterCardProps = {
  title: string;
  description: string;
  reverse: boolean;
  spImage: StaticImageData;
  pcImage: StaticImageData;
  model: string;
};

export const BeforeAfterCard: FC<BeforeAfterCardProps> = ({
  title,
  description,
  reverse,
  spImage,
  pcImage,
  model,
}) => {
  return (
    <div className={styles.container}>
      <BeforeAfterSpCard
        title={'Before'}
        description={'150,000\n全2週間'}
        reverse={false}
        spImage={spImage}
      />
      <BeforeAfterPcCard pcImage={pcImage} model={'SUZUKI Jimny'} />
    </div>
  );
};
