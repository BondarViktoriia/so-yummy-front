import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registrationUser, loginUser } from '../../redux/auth/authOperations';
import { selectIsLoading } from '../../redux/auth/authSelectors';
import { Formik, Form } from 'formik';
import { regSchema } from '../../utilities/authValidationSchemas';
import { getPassErrorStatus } from '../../services/auth/errorStatus';
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
  ErrorIconStyled,
  CheckIconStyled,
  PassWarnIconStyled,
  PassErrorIconStyled,
  PassValidIconStyled,
  StatusBox,
} from './Registration.styled';
import { ToastContainer } from 'react-toastify';

export const AuthForm = ({ login }) => {
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
    !login ? dispatch(registrationUser(values)) : dispatch(loginUser(values));
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
        initialValues={!login ? initialValuesRegister : initialValuesLogin}
        onSubmit={handleSubmit}
        validationSchema={regSchema}
        validateOnBlur
      >
        {({ errors, touched, isValid, dirty }) => (
          <FormChange>
            <Title>{!login ? 'Registration' : 'Sign In'}</Title>
            <Form autoComplete="off">
              <FormInputWrapper>
                {!login && (
                  <div>
                    <FormLabel htmlFor="name">
                      <IconName
                        color={
                          touched.name && getPassErrorStatus(errors.name, dirty)
                        }
                      />

                      <FormInput
                        type="text"
                        name="name"
                        placeholder="Name"
                        disabled={isLoading}
                        color={
                          touched.name && getPassErrorStatus(errors.name, dirty)
                        }
                      />
                      {touched.name &&
                        statusIcon[getPassErrorStatus(errors.name, dirty)]}
                      {errors.name && touched.name ? (
                        <StatusBox>{errors.name}</StatusBox>
                      ) : null}
                    </FormLabel>
                  </div>
                )}

                <div>
                  <FormLabel htmlFor="email">
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
                    {touched.email &&
                      statusIcon[getPassErrorStatus(errors.email, dirty)]}
                    {errors.email && touched.email ? (
                      <StatusBox>{errors.email}</StatusBox>
                    ) : null}
                  </FormLabel>
                </div>

                <div>
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
                      passStatusIcon[
                        getPassErrorStatus(errors.password, dirty)
                      ]}
                  </FormLabel>
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
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};
