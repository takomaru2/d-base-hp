import React, { FC } from 'react';
import styles from './index.module.scss';
import { FAQList } from '@/pages/topa/components/FAQContainer/const/FAQList';
import { useFAQ } from '@/pages/topa/hooks/useFAQ';
import { FAQItem } from '@/pages/topa/components/FAQItem';

export const FAQContainer: FC = () => {
  const { isAnswerVisible, getActiveIndex } = useFAQ();

  return (
    <ul className={styles.container}>
      {FAQList.map((item, index) => (
        <FAQItem
          key={item.id}
          item={item}
          onClick={() => getActiveIndex(index)}
          isOpen={isAnswerVisible(index)}
        />
      ))}
    </ul>
  );
};
