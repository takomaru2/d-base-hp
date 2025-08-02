import React from 'react';
import { Valid } from '@/pages/contact/logic/validation';
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

  const onBlur =
    (valid: Valid) =>
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();
      const fieldName = event.target.name as keyof InitialInput;
      const value = input[fieldName];

      const error = valid(value, fieldName);
      if (error) {
        setErrorState((prev) => ({
          ...prev,
          [fieldName]: error,
        }));
      } else {
        setErrorState((prev) => {
          const newState = { ...prev };
          delete newState[fieldName];
          return newState;
        });
      }
    };

  return { onChange, handleChange, onBlur };
};
