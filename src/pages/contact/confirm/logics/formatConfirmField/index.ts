import { UserInput } from '../../../types';
import {
  initialInput,
  inputLabel,
  materialOptions,
  periodOptions,
} from '@/pages/contact/const/contactOptions';

type FormatResult = {
  id: keyof UserInput;
  label: string;
  value: string;
};

type Formatter<K extends keyof UserInput> = (value: UserInput[K]) => string;

const FALLBACK = '未選択';
const formatStringArray = (array: string[]) =>
  array.length > 0 ? array.join(', ') : FALLBACK;

const labelOf = (value: string, options: { value: string; label: string }[]) =>
  options.find((option) => option.value === value)?.label ?? FALLBACK;

const fieldFormatters: Partial<{
  [K in keyof UserInput]: Formatter<K>;
}> = {
  size: (value: UserInput['size']) => formatStringArray(value),
  period: (value: UserInput['period']) => labelOf(value, periodOptions),
  material: (value: UserInput['material']) => labelOf(value, materialOptions),
};

export const formatConfirmField = (userInput: UserInput): FormatResult[] => {
  const keys = Object.keys(initialInput) as (keyof UserInput)[];
  return keys.map((key) => {
    const inputValue = userInput[key];
    const formatter = fieldFormatters[key] as Formatter<typeof key> | undefined;
    const outputValue = formatter
      ? formatter(inputValue)
      : String(inputValue ?? FALLBACK);

    return {
      id: key,
      label: inputLabel[key],
      value: outputValue,
    };
  });
};
