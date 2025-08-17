import React, { FormEvent, useCallback, useState } from 'react';
import { ValidResult } from '@/pages/contact/logic/validation';
import { judgmentErrorState } from '@/pages/contact/logic/judgmentErrorState';
import { useRouter } from 'next/router';
import { ErrorState, initialInput, UserInput } from '@/pages/contact/type';
import { toggleArrayValue } from '@/logics/arrayToggleValue';
import { saveSessionData } from '@/pages/contact/confirm/logics/loadSession';
import toast from 'react-hot-toast';
import { TOAST_MESSAGES } from '@/pages/contact/const/message';

type Actions = {
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  createOnBlur: (
    validate: (value: string) => ValidResult,
  ) => (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

type UseContactHandlerReturn = {
  userInput: UserInput;
  setUserInput: React.Dispatch<React.SetStateAction<UserInput>>;
  errorState: ErrorState;
  action: Actions;
};

export const useContactHandler = (): UseContactHandlerReturn => {
  const [userInput, setUserInput] = useState<UserInput>(initialInput);
  const [errorState, setErrorState] = useState<ErrorState>({});
  const router = useRouter();

  const setField = useCallback((name: keyof UserInput, value: string) => {
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const toggleSize = useCallback((value: string) => {
    setUserInput((prev) => ({
      ...prev,
      size: toggleArrayValue<string>(prev.size, value),
    }));
  }, []);

  const setFieldError = useCallback(
    (name: keyof UserInput, validResult: ValidResult) => {
      setErrorState((prev) => {
        const newErrorState = { ...prev };
        if (validResult.ok) {
          delete newErrorState[name];
        } else {
          newErrorState[name] = validResult.message;
        }
        return newErrorState;
      });
    },
    [],
  );

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
    createOnBlur:
      (validate: (value: string) => ValidResult) =>
      (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();
        const fieldName = event.target.name as keyof UserInput;
        const value =
          typeof userInput[fieldName] === 'string' ? userInput[fieldName] : '';

        const validateResult = validate(value);
        return setFieldError(fieldName, validateResult);
      },
    handleSubmit: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const newErrors = judgmentErrorState(userInput);

      if (Object.keys(newErrors).length > 0) {
        setErrorState(newErrors);
        return;
      }
      const saveResult = saveSessionData('formInput', userInput);
      if (!saveResult.ok) {
        toast.error(TOAST_MESSAGES.NETWORK_ERROR);
      }
      await router.push('/contact/confirm');
    },
  };

  return { userInput, setUserInput, errorState, action };
};
