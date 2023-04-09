import React from 'react';

import { SignIn } from '../components/Auth/SignIn';
import GoToTop from '../services/auth/scrollToTop';

import {
  AuthMain,
  AuthImage,
  AuthBackground,
} from '../pages/RegistrationPage/RegistrationPage.styled';

export const SignInPage = () => {
  return (
    <AuthMain>
      <AuthImage></AuthImage>
      <SignIn />
      <GoToTop />
      <AuthBackground></AuthBackground>
    </AuthMain>
  );
};
