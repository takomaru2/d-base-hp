import styles from './index.module.scss';
import { FC, FormEventHandler, MouseEventHandler } from 'react';

type ConfirmRow = { id: string; label: string; value: string };

type ConfirmProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  labels: ConfirmRow[];
  backButton: () => void;
  isSubmitting: boolean;
};

type UserResultProps = { labels: ConfirmRow[] };

export const ConfirmPresentation: FC<ConfirmProps> = ({
  onSubmit,
  labels,
  backButton,
  isSubmitting,
}) => {
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <div className={styles.titleWrapper}>
        <h2>以下の内容でよろしいでしょうか？</h2>
      </div>

      <UserResult labels={labels} />

      <div className={styles.buttonWrapper}>
        <FormButton
          type={'button'}
          disabled={isSubmitting}
          onClick={backButton}
        >
          戻る
        </FormButton>
        <FormButton type={'submit'} disabled={isSubmitting}>
          送信する
        </FormButton>
      </div>
    </form>
  );
};

export const UserResult: FC<UserResultProps> = ({ labels }) => {
  return (
    <div className={styles.userResults}>
      {labels.map(({ id, label, value }) => (
        <div key={id} className={styles.row}>
          <dt className={styles.label}>{label}</dt>
          <dd className={styles.result}>{value}</dd>
        </div>
      ))}
    </div>
  );
};

type FormButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export const FormButton: FC<FormButtonProps> = ({
  type,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.button}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
