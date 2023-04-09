import React from 'react';
import { AuthForm } from '../components/Auth/Registration';
import {
  AuthMain,
  AuthImage,
  AuthBackground,
} from '../pages/RegistrationPage/RegistrationPage.styled';

export const SignInPage = () => {
  return (
    <AuthMain>
      <AuthImage></AuthImage>
      <AuthForm login />
      <AuthBackground></AuthBackground>
    </AuthMain>
  );
};
