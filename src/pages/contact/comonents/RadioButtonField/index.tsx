import styles from '@/pages/contact/index.module.scss';
import { ChangeEvent, FC } from 'react';

type CheckBoxFIeldProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButtonField: FC<CheckBoxFIeldProps> = ({ onChange }) => {
  return (
    <div className={styles.checkBoxContainer}>
      車の経過年数を選択してください 任意
      <label className={styles.checkBoxLabel}>
        <input
          type="radio"
          name="period"
          defaultChecked={true}
          value="1"
          className={styles.checkBox}
          onChange={onChange}
        />
        1年未満
      </label>
      <label className={styles.checkBoxLabel}>
        <input
          type="radio"
          name="period"
          value="2"
          className={styles.checkBox}
          onChange={onChange}
        />
        1年から3年
      </label>
      <label className={styles.checkBoxLabel}>
        <input
          type="radio"
          name="period"
          value="3"
          className={styles.checkBox}
          onChange={onChange}
        />
        3年から5年
      </label>
      <label className={styles.checkBoxLabel}>
        <input
          type="radio"
          name="period"
          value="4"
          className={styles.checkBox}
          onChange={onChange}
        />
        5年以上
      </label>
    </div>
  );
};
