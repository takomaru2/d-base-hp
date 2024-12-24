import React, { FC } from 'react';
import styles from './index.module.scss';

type FAQItemProps = {
  item: { id: string; question: string; answer: string };
  onClick: () => void;
  isOpen: boolean;
};

export const FAQItem: FC<FAQItemProps> = ({ item, onClick, isOpen }) => {
  return (
    <li className={styles.block}>
      <button className={styles.question} onClick={onClick}>
        <div className={styles.questionIcon}>Q</div>
        <p>{item.question}</p>
        <div>{isOpen ? '-' : '+'}</div>
      </button>
      {isOpen && (
        <div className={styles.answer}>
          <div className={styles.answerIcon}>A</div>
          <p>{item.answer}</p>
        </div>
      )}
    </li>
  );
};
