import React, { FC } from 'react';
import styles from './index.module.scss';
import { FaqList } from '@/pages/top/components/FAQContainer/const/faqList';
import { useFaq } from '@/pages/top/hooks/useFaq';
import { FAQItem } from '@/pages/top/components/FAQItem';

export const FAQContainer: FC = () => {
  const { isAnswerVisible, getActiveIndex } = useFaq();

  return (
    <ul className={styles.container}>
      {FaqList.map((item, index) => (
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
