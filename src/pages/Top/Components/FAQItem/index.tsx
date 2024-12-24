import React from 'react';
import styles from './index.module.scss';
import { FAQList } from '@/pages/top/components/FAQItem/const/FAQList';
import { useFAQ } from '@/pages/top/hooks/useFAQ';

export const FAQItem = () => {
  const { isAnswerVisible, getActiveIndex } = useFAQ();

  return (
    <ul className={styles.container}>
      {FAQList.map((item, index) => (
        <li className={styles.block} key={item.id}>
          <button
            className={styles.question}
            onClick={() => getActiveIndex(index)}
          >
            <div className={styles.questionIcon}>Q</div>
            <p>{item.question}</p>
            <div>{isAnswerVisible(index) ? '-' : '+'}</div>
          </button>
          {isAnswerVisible(index) && (
            <div className={styles.answer}>
              <div className={styles.answerIcon}>A</div>
              <p>{item.answer}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
