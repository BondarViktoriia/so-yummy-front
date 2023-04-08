import React from 'react';
import { useDispatch } from 'react-redux';
import { registrationUser, loginUser } from '../../redux/auth/authOperations';
import { Formik, Form } from 'formik';

import { Button } from '../../components/WelcomePage/Button';
import {
  FormWrapper,
  FormTitle,
  FormInputWrapper,
  FormInput,
  FormLabel,
  FormLink,
  IconName,
  IconEmail,
  IconPassword,
} from './Registration.styled';

export const AuthForm = ({ login }) => {
  const dispatch = useDispatch();

  const initialValuesRegister = {
    name: '',
    email: '',
    password: '',
  };
  const initialValuesLogin = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    !login ? dispatch(registrationUser(values)) : dispatch(loginUser(values));
  };
  return (
    <Formik
      initialValues={!login ? initialValuesRegister : initialValuesLogin}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <FormTitle>{!login ? 'Registration' : 'Sign In'}</FormTitle>
        <Form>
          <FormInputWrapper>
            {!login && (
              <FormLabel>
                <IconName />
                <FormInput type="text" name="name" placeholder="Name" />
              </FormLabel>
            )}

            <FormLabel>
              <IconEmail />
              <FormInput type="email" name="email" placeholder="Email" />
            </FormLabel>

            <FormLabel>
              <IconPassword />
              <FormInput
                type="password"
                name="password"
                placeholder="Password"
              />
            </FormLabel>
          </FormInputWrapper>
          <Button
            type="submit"
            look="subscribe"
            width="100%"
            heigth="45px"
            heigthTablet="59px"
            fontSize="16px"
          >
            {!login ? 'Sign up' : 'Sign In'}
          </Button>
        </Form>
        {!login ? (
          <FormLink to="/signin">Sign In</FormLink>
        ) : (
          <FormLink to="/register">Registration</FormLink>
        )}
      </FormWrapper>
    </Formik>
  );
};
