import React, { FormEvent } from 'react';
import { ValidResult } from '@/pages/contact/logic/validation';
import { judgmentErrorState } from '@/pages/contact/logic/judgmentErrorState';
import { useRouter } from 'next/router';
import { UserInput } from '@/pages/contact/type';
import { toggleArrayValue } from '@/logics/arrayToggleValue';

export const useContactHandler = (
  userInput: UserInput,
  setContactForm: React.Dispatch<React.SetStateAction<UserInput>>,
  setErrorState: React.Dispatch<
    React.SetStateAction<Partial<Record<keyof UserInput, string>>>
  >,
) => {
  const router = useRouter();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    if (name === 'size') {
      setContactForm((prev) => {
        const prevArray = prev.size;
        const newArray = toggleArrayValue<string>(prevArray, value);
        return { ...prev, size: newArray };
      });
    } else {
      setContactForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = judgmentErrorState(userInput);

    if (Object.keys(newErrors).length > 0) {
      setErrorState(newErrors);
      return;
    }
    sessionStorage.setItem('formInput', JSON.stringify(userInput));
    await router.push('/contact/confirm');
  };

  return {
    handleChange,
    createOnBlur,
    handleSubmit,
  };
};
