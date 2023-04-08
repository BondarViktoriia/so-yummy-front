import React from 'react';

import { AuthForm } from 'components/Auth/Registration';

import { AuthMain, AuthImage, AuthBackground } from './RegistrationPage.styled';

export const RegistrationPage = () => {
  return (
    <AuthMain>
      <AuthImage></AuthImage>
      <AuthForm />
      <AuthBackground></AuthBackground>
    </AuthMain>
  );
};
