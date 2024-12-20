import { PricingPlan } from '@/pages/top/components/PricingPlan';
import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/pages/top/components/Button';
import styles from './index.module.scss';
import { pricingPlanList } from '@/pages/top/const/praicingPlanList';

export const PriceSection = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url("/assets/top/price/priceSectionBackImage.jpg")`,
      }}
    >
      <div className={styles.sectionTitle}>
        <SectionTitle jpTitle={'価格表'} enTitle={'Price'} color={'white'} />
      </div>
      <div className={styles.planWrapper}>
        {pricingPlanList.map((item) => (
          <PricingPlan
            key={item.id}
            title={item.title}
            description={item.description}
            minPrice={item.minPrice}
          />
        ))}
        <div className={styles.button}>
          <Button
            label={'詳しい価格表を見る'}
            link={
              'https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=h_1472bukgb00003/'
            }
          />
        </div>
      </div>
    </div>
  );
};
