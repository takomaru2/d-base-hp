import React, { FC } from 'react';
import styles from './index.module.scss';
import plusImage from '../../../../../public/assets/top/plus.png';
import minusImage from '../../../../../public/assets/top/minus.png';
import Image from 'next/image';

type FAQItemProps = {
  item: { id: string; question: string; answer: string };
  onClick: () => void;
  isOpen: boolean;
};

const minusIcon = (
  <Image src={minusImage} alt={'minus icon'} className={styles.icon} />
);

const plusIcon = (
  <Image src={plusImage} alt={'plus icon'} className={styles.icon} />
);

export const FAQItem: FC<FAQItemProps> = ({ item, onClick, isOpen }) => {
  const icon = isOpen ? minusIcon : plusIcon;
  return (
    <li className={styles.block}>
      <button
        type={'button'}
        className={`${styles.question} ${styles.faqItem}`}
        onClick={onClick}
      >
        <div className={`${styles.questionMark} ${styles.faqMark}`}>Q</div>
        <p>{item.question}</p>
        <div className={styles.icon}>{icon}</div>
      </button>
      {isOpen && (
        <div className={`${styles.answer} ${styles.faqItem}`}>
          <div className={`${styles.answerMark} ${styles.faqMark}`}>A</div>
          <p>{item.answer}</p>
        </div>
      )}
    </li>
  );
};
