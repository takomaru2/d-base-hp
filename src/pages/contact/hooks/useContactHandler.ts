import React, { FormEvent } from 'react';
import { ValidResult } from '@/pages/contact/logic/validation';
import { judgmentErrorState } from '@/pages/contact/logic/judgmentErrorState';
import { useRouter } from 'next/router';
import { UserInput } from '@/pages/contact/type';

export const useContactHandler = (
  userInput: UserInput,
  // selectedSize: string[],
  setContactForm: React.Dispatch<React.SetStateAction<UserInput>>,
  // setSelectedSize: React.Dispatch<React.SetStateAction<string[]>>,
  setErrorState: React.Dispatch<
    React.SetStateAction<Partial<Record<keyof UserInput, string>>>
  >,
) => {
  const router = useRouter();

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = (value: string) => {
    setContactForm((prev) => {
      const isSelected = prev.size.includes(value);
      return {
        ...prev,
        size: isSelected
          ? prev.size.filter((item) => item !== value)
          : [...prev.size, value],
      };
    });
  };

  const createOnBlur =
    (validate: (value: string) => ValidResult) =>
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();
      const fieldName = event.target.name as keyof UserInput;
      const value =
        typeof userInput[fieldName] === 'string' ? userInput[fieldName] : '';

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

    const newErrors = judgmentErrorState(userInput);

    // エラーがあるなら送信せず、エラーをセット
    if (Object.keys(newErrors).length > 0) {
      setErrorState(newErrors);
      return;
    }
    sessionStorage.setItem('formInput', JSON.stringify(userInput));
    // sessionStorage.setItem('selected', JSON.stringify(selectedSize));
    await router.push('/contact/confirm');
  };

  return { onChange, handleToggle, createOnBlur, onSubmit };
};
