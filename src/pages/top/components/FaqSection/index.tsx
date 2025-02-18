import styles from './index.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { FAQContainer } from '@/pages/top/components/FAQContainer';

export const FaqSection = () => {
  return (
    <div className={styles.faq} id={'faq'}>
      <div className={`${styles.sectionTitle} ${styles.faqTitle}`}>
        <SectionTitle
          jpTitle={'よくあるご質問'}
          enTitle={'Q ＆ A'}
          color={'white'}
        />
      </div>
      <div className={styles.faqContainer}>
        <FAQContainer />
      </div>
    </div>
  );
};
