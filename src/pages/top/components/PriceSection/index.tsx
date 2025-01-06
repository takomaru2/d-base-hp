import { PricingPlan } from '@/pages/top/components/PricingPlan';
import { SectionTitle } from '@/components/SectionTitle';
import { ButtonLink } from '@/components/ButtonLink';
import styles from './index.module.scss';
import {
  backgroundImage,
  PRICING_PLAN_LINK,
  pricingPlans,
} from '@/pages/top/const/pricingSectionData';
import { FC } from 'react';

export const PriceSection: FC = () => {
  return (
    <section
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={`${styles.textAlign} ${styles.sectionTitle}`}>
        <SectionTitle jpTitle={'価格表'} enTitle={'Price'} color={'white'} />
      </div>
      <div className={`${styles.textAlign} ${styles.planWrapper}`}>
        {pricingPlans.map((item) => (
          <PricingPlan
            key={item.id}
            title={item.title}
            description={item.description}
            minPrice={item.minPrice}
          />
        ))}
        <div className={styles.button}>
          <ButtonLink link={PRICING_PLAN_LINK}>詳しい価格表を見る</ButtonLink>
        </div>
      </div>
    </section>
  );
};
