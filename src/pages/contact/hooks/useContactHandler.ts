import React, { FormEvent } from 'react';
import { ValidResult } from '@/pages/contact/logic/validation';
import { InitialInput } from '@/pages/contact/index.page';
import { judgmentErrorState } from '@/pages/contact/logic/judgmentErrorState';
import { useRouter } from 'next/router';

export const useContactHandler = (
  input: InitialInput,
  setInput: React.Dispatch<React.SetStateAction<InitialInput>>,
  setSelected: React.Dispatch<React.SetStateAction<string[]>>,
  setErrorState: React.Dispatch<
    React.SetStateAction<Partial<Record<keyof InitialInput, string>>>
  >,
) => {
  const router = useRouter();

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const createOnBlur =
    (validate: (value: string) => ValidResult) =>
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();
      const fieldName = event.target.name as keyof InitialInput;
      const value = input[fieldName];

      const validateResult = validate(value);
      setErrorState((prev) => {
        const newErrorState = { ...prev };
        if (validateResult.ok) {
          delete newErrorState[fieldName];
        } else {
          newErrorState[fieldName] = validateResult.message;
        }
        return newErrorState;
      });
    };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = judgmentErrorState(input);

    // エラーがあるなら送信せず、エラーをセット
    if (Object.keys(newErrors).length > 0) {
      setErrorState(newErrors);
      return;
    }
    await router.push('/contact/confirm');
  };

  return { onChange, handleChange, createOnBlur, onSubmit };
};
