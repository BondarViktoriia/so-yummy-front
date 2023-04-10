import React from 'react';

import { AuthForm } from '../../components/Auth/Registration';
import GoToTop from '../../services/auth/scrollToTop';

import { AuthMain, AuthImage, AuthBackground } from './RegistrationPage.styled';

export const RegistrationPage = () => {
  return (
    <AuthMain>
      <AuthImage></AuthImage>
      <AuthForm />
      <GoToTop />
      <AuthBackground></AuthBackground>
    </AuthMain>
  );
};
