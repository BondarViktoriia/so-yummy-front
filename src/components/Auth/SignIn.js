import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/authSelectors';
import { registrationUser, loginUser } from '../../redux/auth/authOperations';

import { Formik, Form } from 'formik';
import { logSchema } from '../../utilities/authValidationSchemas';
import {
  // ErrorStatus,
  getPassErrorStatus,
} from '../../services/auth/errorStatus';

import { Button } from '../../components/WelcomePage/Button';
import {
  FormChange,
  Title,
  FormInputWrapper,
  FormInput,
  FormLabel,
  FormLink,
  IconEmail,
  IconPassword,
  ErrorIconStyled,
  CheckIconStyled,
  PassWarnIconStyled,
  PassErrorIconStyled,
  PassValidIconStyled,
  StatusBox,
} from './Registration.styled';

export const SignIn = ({ login }) => {
  const isLoading = useSelector(selectIsLoading);
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
    login ? dispatch(registrationUser(values)) : dispatch(loginUser(values));
  };

  const statusIcon = {
    valid: <CheckIconStyled />,
    inValid: <ErrorIconStyled />,
    notSecure: <PassWarnIconStyled />,
  };

  const passStatusIcon = {
    valid: <PassValidIconStyled />,
    inValid: <PassErrorIconStyled />,
    notSecure: <PassWarnIconStyled />,
  };

  return (
    <>
      <Formik
        initialValues={login ? initialValuesRegister : initialValuesLogin}
        onSubmit={handleSubmit}
        validationSchema={logSchema}
        validateOnBlur
      >
        {({ errors, touched, isValid, dirty }) => (
          <FormChange>
            <Title>{login ? 'Registration' : 'Sign In'}</Title>
            <Form autoComplete="off">
              <FormInputWrapper>
                <FormLabel htmlFor="email">
                  <div>
                    <IconEmail
                      color={
                        touched.email && getPassErrorStatus(errors.email, dirty)
                      }
                    />
                    <FormInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      disabled={isLoading}
                      color={
                        touched.email && getPassErrorStatus(errors.email, dirty)
                      }
                    />
                  </div>
                  {touched.email &&
                    statusIcon[getPassErrorStatus(errors.email, dirty)]}
                  {errors.email && touched.email ? (
                    <StatusBox>{errors.email}</StatusBox>
                  ) : null}
                </FormLabel>

                <FormLabel htmlFor="password">
                  <IconPassword
                    color={
                      touched.password &&
                      getPassErrorStatus(errors.password, dirty)
                    }
                  />
                  <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    disabled={isLoading}
                    color={
                      touched.password &&
                      getPassErrorStatus(errors.password, dirty)
                    }
                  />
                  {touched.password &&
                    passStatusIcon[getPassErrorStatus(errors.password, dirty)]}
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
                {login ? 'Sign up' : 'Sign In'}
              </Button>
            </Form>
            {login ? (
              <FormLink to="/signin">Sign In</FormLink>
            ) : (
              <FormLink to="/register">Registration</FormLink>
            )}
          </FormChange>
        )}
      </Formik>
    </>
  );
};
