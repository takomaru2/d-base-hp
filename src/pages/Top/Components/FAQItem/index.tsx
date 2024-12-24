import React, { useState } from 'react';
import styles from './index.module.scss';

const hoge = [
  {
    id: '1',
    question: 'コーティングの期間は？',
    answer:
      '1週間から1週間くらいとなりますが、時期や車種、車の状態によっても変わることがありますので、詳しい期間についてはお問い合わせください',
  },
  { id: '2', question: 'コーティングの期間は？', answer: '1週間くらい' },
  { id: '3', question: 'コーティングの期間は？', answer: '1週間くらい' },
];

export const FAQItem = () => {
  const [showAnswerIndex, setShowAnswerIndex] = useState<number[]>([]);

  const isAnswerVisible = (index: number) => showAnswerIndex.includes(index);

  const getActiveIndex = (index: number) => {
    if (isAnswerVisible(index)) {
      setShowAnswerIndex(showAnswerIndex.filter((num) => num !== index));
    } else {
      setShowAnswerIndex([...showAnswerIndex, index]);
    }
  };

  return (
    <ul className={styles.container}>
      {hoge.map((item, index) => (
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
