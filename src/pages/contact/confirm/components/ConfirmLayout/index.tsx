import styles from '@/pages/contact/confirm/index.module.scss';
import { FC, FormEventHandler } from 'react';

type ConfirmProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  labels: Record<string, string>[];
  backButton: () => void;
  isSubmitting: boolean;
};

export const ConfirmLayout: FC<ConfirmProps> = ({
  onSubmit,
  labels,
  backButton,
  isSubmitting,
}) => {
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>以下の内容でよろしいでしょうか？</h2>
      </div>
      <div className={styles.list}>
        <ul className={styles.listKey}>
          {labels.map(({ id, label }) => (
            <li key={id} className={styles.listItem}>
              {label}
            </li>
          ))}
        </ul>
        <ul className={styles.listContent}>
          {labels.map(({ id, value }) => (
            <li key={id} className={styles.listItem}>
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.buttonWrapper}>
        <button
          type={'button'}
          onClick={backButton}
          className={styles.button}
          disabled={isSubmitting}
        >
          戻る
        </button>
        <button
          type={'submit'}
          className={styles.button}
          disabled={isSubmitting}
        >
          送信する
        </button>
      </div>
    </form>
  );
};
