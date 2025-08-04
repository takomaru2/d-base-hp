import React from 'react';
import { ValidResult } from '@/pages/contact/logic/validation';
import { InitialInput } from '@/pages/contact/index.page';

export const useContactHandler = (
  input: InitialInput,
  setInput: React.Dispatch<React.SetStateAction<InitialInput>>,
  setSelected: React.Dispatch<React.SetStateAction<string[]>>,
  setErrorState: React.Dispatch<
    React.SetStateAction<Partial<Record<keyof InitialInput, string>>>
  >,
) => {
  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
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

  return { onChange, handleChange, createOnBlur };
};
