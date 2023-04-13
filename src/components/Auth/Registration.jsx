import React from 'react';
import { useDispatch } from 'react-redux';
import { registrationUser, loginUser } from '../../redux/auth/authOperations';
import { Formik, Form } from 'formik';
import { regSchema } from "../../utilities/authValidationSchemas";
import { Button } from '../../components/WelcomePage/Button';
import {
  FormChange,
  Title,
  FormInputWrapper,
  FormInput,
  FormLabel,
  FormLink,
  IconName,
  IconEmail,
  IconPassword,
  ErrorCont
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
      validationSchema={regSchema}
    >
      <FormChange>
        <Title>{!login ? 'Registration' : 'Sign In'}</Title>
        <Form autoComplete='off'>
          <FormInputWrapper>
            {!login && (
              <div>
                <FormLabel>
                <IconName />
                <FormInput type="text" name="name" placeholder="Name" />
              </FormLabel>
              </div>
            )}

            <div>
              <FormLabel>
              <IconEmail />
              <FormInput type="email" name="email" placeholder="Email" />
            </FormLabel>
              <ErrorCont name='email' component='div' />
            </div>

            <div>
              <FormLabel>
              <IconPassword />
              <FormInput
                type="password"
                name="password"
                placeholder="Password"
              />
            </FormLabel>
            <ErrorCont name='password' component='div' />
            </div>
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
      </FormChange>
    </Formik>
  );
};
