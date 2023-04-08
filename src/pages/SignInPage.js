import React from 'react';

import { SignIn } from '../components/Auth/SignIn';

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
      <AuthBackground></AuthBackground>
    </AuthMain>
  );
};
