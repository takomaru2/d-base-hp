import styles from '@/pages/contact/index.module.scss';
import { FC } from 'react';

type SelectedFieldProps = {
  selected: string[];
  onChange: (size: string) => void;
};

export const SelectedField: FC<SelectedFieldProps> = ({
  selected,
  onChange,
}) => {
  return (
    <div className={styles.checkBoxContainer}>
      <span>お客様のお車のサイズを選択してください</span>
      <label className={styles.checkBoxLabel}>
        <input
          type="checkbox"
          checked={selected.includes('SS')}
          onChange={() => onChange('SS')}
          className={styles.checkBox}
        />
        <span className={styles.size}>SSサイズ</span>
      </label>
      <label className={styles.checkBoxLabel}>
        <input
          type="checkbox"
          checked={selected.includes('S')}
          onChange={() => onChange('S')}
          className={styles.checkBox}
        />
        <span className={styles.size}>Sサイズ</span>
      </label>
      <label className={styles.checkBoxLabel}>
        <input
          type="checkbox"
          checked={selected.includes('M')}
          onChange={() => onChange('M')}
          className={styles.checkBox}
        />
        <span className={styles.size}>Mサイズ</span>
      </label>
      <label className={styles.checkBoxLabel}>
        <input
          type="checkbox"
          checked={selected.includes('L')}
          onChange={() => onChange('L')}
          className={styles.checkBox}
        />
        <span className={styles.size}>Lサイズ</span>
      </label>
      <label className={styles.checkBoxLabel}>
        <input
          type="checkbox"
          checked={selected.includes('LL')}
          onChange={() => onChange('LL')}
          className={styles.checkBox}
        />
        <span className={styles.size}>LLサイズ</span>
      </label>
    </div>
  );
};
