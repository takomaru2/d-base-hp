import { PricingPlan } from '@/pages/top/components/PricingPlan';
import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/pages/top/components/Button';
import styles from './index.module.scss';

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
        <PricingPlan
          title={'新車〜登録３ヶ月'}
          description={
            '低価格でコーティングの効果を重視するあなたにおすすめ。ボディ全面を塗装の負担なく研磨します.'
          }
          minPrice={'104,500'}
        />
        <PricingPlan
          title={'経年車'}
          description={
            '最高の艶が出るまで無制限に研磨します。ボディ全面はもちろんピラーやドア内まで徹底的に磨きます。'
          }
          minPrice={'127,000'}
        />
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
