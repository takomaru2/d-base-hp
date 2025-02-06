import styles from './index.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { ProcessTitle } from '@/pages/works/components/ProcessTitle';
import { ProcessDescription } from '@/pages/works/components/ProcessDescription';
import processImage01 from '../../../../../public/assets/works/procedure01.jpg';
import processImage02 from '../../../../../public/assets/works/procedure02.jpg';
import processImage03 from '../../../../../public/assets/works/procedure03.jpg';
import { FC } from 'react';

export const ProcessSection: FC = () => {
  return (
    <div className={styles.process}>
      <div className={styles.processTitle}>
        <SectionTitle
          jpTitle={'施工手順'}
          enTitle={'process'}
          color={'white'}
        />
      </div>

      <div className={styles.processSubTitle}>
        <ProcessTitle title={'01.下処理'} />
      </div>
      <div className={styles.processDescription}>
        <ProcessDescription
          image={processImage01}
          text={
            'コーティング前の下地処理が重要です。洗車や鉄粉除去、磨きを行い塗装面を整えることで、コーティング剤がしっかり定着し、耐久性と光沢が向上します。'
          }
        />
      </div>

      <div className={styles.processSubTitle}>
        <ProcessTitle title={'02.適切なコーディング剤の選定'} />
      </div>
      <div className={styles.processDescription}>
        <ProcessDescription
          image={processImage02}
          text={
            '車の状態や用途に応じたコーティング剤の選定が重要です。ガラスコーティングは耐久性と光沢、ナノセラミックコーティングは手軽さとコスト面で優れています。'
          }
          reverse={true}
        />
      </div>

      <div className={styles.processSubTitle}>
        <ProcessTitle title={'03.アフターメンテナンス'} />
      </div>
      <div className={styles.processDescription}>
        <ProcessDescription
          image={processImage03}
          text={
            'コーティング後は定期的な洗車と専用メンテナンス剤の使用が重要です。強い洗剤や研磨スポンジを避けることで、コーティングの劣化を防ぎ、効果を長持ちさせます。'
          }
        />
      </div>
    </div>
  );
};
