import { CraftTitle } from '@/pages/price/components/CraftTitle';
import { PriceCardList } from '@/pages/price/components/PriceCardList';
import { priceCardListNs10h } from '@/pages/price/components/PriceCard/const/priceCardList';
import { CraftDescription } from '@/pages/price/components/CraftDescription';
import Image from 'next/image';
import craftImage from '../../../../../public/assets/price/priceImage01.jpg';
import { Rating } from '@/pages/price/components/Rating';
import { FC } from 'react';
import styles from '../../index.module.scss';

export const CraftSectionKUBEBOND: FC = () => {
  return (
    <>
      <div className={styles.craftTitle}>
        <CraftTitle
          title={'KUBEBOND'}
          description={
            '圧倒的な艶と持続する強靭な保護力。\n最高峰の露天駐車対応コーティング'
          }
        />
      </div>
      <div className={styles.priceCardList}>
        <PriceCardList cardList={priceCardListNs10h} />
      </div>
      <div className={styles.craftDescription}>
        <CraftDescription
          title={'特徴'}
          description={
            'ガラス成分９４％の純度の高いベースコートにナノセラミックのトップコートを重ねる２層+有機質のポリマーレジン１層を追加し完成するコーティングです。\n雨染みの元となる酸化成分や油分を一切使用せずさらにポリマーレジン層を犠牲被膜にすることで徹底的に雨染みを防ぐことができます。\n耐久性も７年と当店のラインナップの中で最長で\n使用した感想は車の色が変わるほどの深い艶と膜厚感があります。\n全ての項目に満点をつけたくなりますが特に艶感と耐久性に特化しています。\nまた積層可能ですのでベースを塗り重ねれば耐久性、膜厚感が向上し、トップを塗り重ねれば艶の向上、さらに傷の自己修復機能まで生まれます。\nモニターパネルを用意してあるので効果の違いを確かめたい方はお気軽にご相談下さい。'
          }
        />
        <CraftDescription
          title={'注意点'}
          description={
            'デメリットとしてはベース、トップコートの施工後２週間完全乾燥させてから+レジン層を塗る為、納車後またお車を持ってきてもらう必要があります。\nまた、レジン層の効果は半年ほどですので定期メンテナンスが必須になります。\n(軽自動車で一回8000円程です)\n※メンテナンスの入庫ができない方は施工をお断りしております。ご了承ください。'
          }
        />
      </div>
      <div className={styles.craftImageWrapper}>
        <Image
          src={craftImage}
          alt={'液剤の容器'}
          className={styles.craftImage}
        />
        <div className={styles.ratingWrapper}>
          <div className={styles.ratingText}>
            耐久年数：７年
            <br />
            硬度 ：１０H
          </div>
          <Rating title={'耐スリ性'} starLevel={5} />
          <Rating title={'おなきん'} starLevel={5} />
          <Rating title={'床おな'} starLevel={4} />
          <Rating title={'スカトロ'} starLevel={1} />
          <Rating title={'SM'} starLevel={5} />
          <Rating title={'ロリ'} starLevel={5} />
        </div>
      </div>
    </>
  );
};
