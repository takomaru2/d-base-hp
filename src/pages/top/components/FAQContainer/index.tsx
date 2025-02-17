import React, { FC } from 'react';
import styles from './index.module.scss';
import { FaqList } from '@/pages/top/components/FAQContainer/const/faqList';
import { useModal } from '@/pages/top/hooks/useModal';
import { FAQItem } from '@/pages/top/components/FAQItem';

export const FAQContainer: FC = () => {
  const { isAnswerVisible, getActiveIndex } = useModal();

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
