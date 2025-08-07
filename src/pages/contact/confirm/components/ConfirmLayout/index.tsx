import styles from '@/pages/contact/confirm/index.module.scss';
import { FC, FormEventHandler } from 'react';

type ConfirmProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  labels: Record<string, string>[];
  backButton: () => Promise<void>;
  isErrorResult: boolean;
};

export const ConfirmLayout: FC<ConfirmProps> = ({
  onSubmit,
  labels,
  backButton,
  isErrorResult,
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
        <button type={'button'} onClick={backButton} className={styles.button}>
          戻る
        </button>
        <button type={'submit'} className={styles.button}>
          送信する
        </button>
      </div>
      {isErrorResult && (
        <p className={styles.errorMessage}>
          送信中にエラーが発生しました。再度お試しください。
        </p>
      )}
    </form>
  );
};
