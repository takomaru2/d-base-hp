import React, { FC } from 'react';
import styles from './index.module.scss';
import { FAQList } from '@/pages/top/components/FAQContainer/const/FAQList';
import { useFAQ } from '@/pages/top/hooks/useFAQ';
import { FAQItem } from '@/pages/top/components/FAQItem';

export const FAQContainer: FC = () => {
  const { isAnswerVisible: isOpen, getActiveIndex: onClick } = useFAQ();

  return (
    <ul className={styles.container}>
      {FAQList.map((item, index) => (
        <FAQItem
          key={item.id}
          item={item}
          onClick={onClick(index)}
          isOpen={isOpen(index)}
        />
      ))}
    </ul>
  );
};
