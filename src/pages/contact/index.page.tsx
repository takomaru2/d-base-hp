import React, { useEffect, useState } from 'react';
import { useContactHandler } from '@/pages/contact/hooks/useContactHandler';
import { ErrorState, initialInput, InitialInput } from '@/pages/contact/type';
import { ContactForm } from '@/pages/contact/comonents/ContactForm';

export default function Contact() {
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [contactForm, setContactForm] = useState<InitialInput>(initialInput);
  const [errorState, setErrorState] = useState<ErrorState>({});

  const { onChange, handleToggle, createOnBlur, onSubmit } = useContactHandler(
    contactForm,
    selectedSize,
    setContactForm,
    setSelectedSize,
    setErrorState,
  );

  useEffect(() => {
    const sessionInput = sessionStorage.getItem('formInput');
    const sessionSelected = sessionStorage.getItem('selected');

    if (sessionInput) {
      setContactForm(JSON.parse(sessionInput));
    }

    if (sessionSelected) {
      setSelectedSize(JSON.parse(sessionSelected));
    }
  }, []);

  return (
    <>
      <ContactForm
        onSubmit={onSubmit}
        errorState={errorState}
        onChange={onChange}
        createOnBlur={createOnBlur}
        contactForm={contactForm}
        selectedSize={selectedSize}
        handleToggle={handleToggle}
      />
    </>
  );
}
