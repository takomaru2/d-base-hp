import React, { useState } from 'react';
import styles from './index.module.scss';

const hoge = [
  { id: '1', question: 'コーティングの期間は？', answer: '1週間くらい' },
  { id: '2', question: 'コーティングの期間は？', answer: '1週間くらい' },
  { id: '3', question: 'コーティングの期間は？', answer: '1週間くらい' },
];

export const FAQItem = () => {
  const [isShowIndex, setIsShowIndex] = useState<number | undefined>();

  const getShowIndex = (index: number) => {
    const isShowAnswerIndex = isShowIndex === index;
    setIsShowIndex(isShowAnswerIndex ? undefined : index);
  };

  return (
    <ul className={styles.container}>
      {hoge.map((item, index) => (
        <li className={styles.block} key={item.id}>
          <button
            className={styles.question}
            onClick={() => getShowIndex(index)}
          >
            <div>Q</div>
            <p>{item.question}</p>
            <div>{isShowIndex === index ? '-' : '+'}</div>
          </button>
          {isShowIndex === index && (
            <div className={styles.answer}>
              <div>A</div>
              <p>{item.answer}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
