import React, { useEffect, useState } from 'react';
import { useContactHandler } from '@/pages/contact/hooks/useContactHandler';
import { ErrorState, initialInput, UserInput } from '@/pages/contact/type';
import { ContactForm } from '@/pages/contact/comonents/ContactForm';

export default function Contact() {
  const [userInput, setUserInput] = useState<UserInput>(initialInput);
  const [errorState, setErrorState] = useState<ErrorState>({});

  const { onChange, handleToggle, createOnBlur, onSubmit } = useContactHandler(
    userInput,
    setUserInput,
    setErrorState,
  );

  useEffect(() => {
    const sessionInput = sessionStorage.getItem('formInput');
    if (sessionInput) {
      setUserInput(JSON.parse(sessionInput));
    }
  }, []);

  return (
    <>
      <ContactForm
        onSubmit={onSubmit}
        errorState={errorState}
        onChange={onChange}
        createOnBlur={createOnBlur}
        contactForm={userInput}
        selectedSize={userInput.size}
        handleToggle={handleToggle}
      />
    </>
  );
}
