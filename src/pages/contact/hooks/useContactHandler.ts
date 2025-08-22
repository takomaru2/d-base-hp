import React, { FormEvent, useState } from 'react';
import { validateField } from '@/pages/contact/logic/validation';
import { validErrorState } from '@/pages/contact/logic/validErrorState';
import { useRouter } from 'next/router';
import { ErrorState, UserInput, ValidResult } from '../types';
import { toggleArrayValue } from '@/logics/arrayToggleValue';
import toast from 'react-hot-toast';
import { TOAST_MESSAGES } from '@/pages/contact/const/message';
import { initialInput } from '../const/contactOptions';
import { sessionStorageData } from '../confirm/logics/sessionStorage';

export const useContactHandler = () => {
  const [userInput, setUserInput] = useState<UserInput>(initialInput);
  const [errorState, setErrorState] = useState<ErrorState>({});
  const router = useRouter();

  // const changeUserInput = (input: UserInput) => setUserInput(input);

  const setField = (name: keyof UserInput, value: string) => {
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleSize = (value: string) => {
    setUserInput((prev) => ({
      ...prev,
      size: toggleArrayValue<string>(prev.size, value),
    }));
  };

  const setFieldError = (name: keyof UserInput, validResult: ValidResult) => {
    setErrorState((prev) => {
      const newErrorState = { ...prev };
      if (validResult.ok) {
        delete newErrorState[name];
      } else {
        newErrorState[name] = validResult.message;
      }
      return newErrorState;
    });
  };

  const runValidation = (name: keyof UserInput) => {
    const result: ValidResult = validateField(name, userInput[name]);
    setFieldError(name, result);
  };

  const action = {
    handleChange: (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = event.target;
      if (name === 'size') {
        toggleSize(value);
      } else {
        setField(name as keyof UserInput, value);
      }
    },
    createOnBlur: (
      event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const fieldName = event.target.name as keyof UserInput;
      return runValidation(fieldName);
    },
    handleSubmit: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const newErrors = validErrorState(userInput);

      if (Object.keys(newErrors).length > 0) {
        setErrorState(newErrors);
        return;
      }
      const saveResult = sessionStorageData.save('formInput', userInput);
      if (!saveResult.ok) {
        toast.error(TOAST_MESSAGES.NETWORK_ERROR);
        return;
      }
      await router.push('/contact/confirm');
    },
  };

  return { userInput, setUserInput, errorState, action };
};

export type UseContactHandlerReturn = ReturnType<typeof useContactHandler>;
