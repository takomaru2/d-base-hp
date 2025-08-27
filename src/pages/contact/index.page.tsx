import React from 'react';
import { useContactForm } from '@/pages/contact/hooks/useContactForm';
import { ContactForm } from '@/pages/contact/components/ContactForm';

export default function Contact() {
  const { userInput, errorState, action } = useContactForm();

  return (
    <ContactForm
      handleSubmit={action.handleSubmit}
      errorState={errorState}
      handleChange={action.handleChange}
      handleBlur={action.handleBlur}
      userInput={userInput}
    />
  );
}
