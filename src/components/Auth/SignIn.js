import { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { registrationUser, loginUser } from '../../redux/auth/authOperations';
import { Formik, Form } from 'formik';

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
} from './Registration.styled';
import * as yup from 'yup';
import { useFormik } from 'formik';

export const SignIn = ({ login }) => {
  const signInPasswordInput = useRef(null);
  const [visibility, setVisibility] = useState(true);
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

  const myEmailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  let signinSchema = yup.object().shape({
    email: yup
      .string()
      .lowercase()
      .matches(myEmailRegex, {
        message: 'Your email must be valid',
        name: 'email',
        excludeEmptyString: true,
      })
      .min(5, 'Your email is too short')
      .required('Type your email please'),
    password: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/,
        'Special symbols are not allowed'
      )
      .min(6, 'Your password is too short')
      .max(16, 'Your password must be 16 characters max')
      .required('Type your password please'),
  });

  yup.addMethod(yup.string, 'email', function validateEmail(message) {
    return this.matches(myEmailRegex, {
      message,
      name: 'email',
      excludeEmptyString: true,
    });
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signinSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const { email, password } = values;
      dispatch(loginUser({ email, password }));
      setSubmitting(false);
    },
  });
  const isValid = signinSchema.isValidSync(formik.values);
  const togglePasswordVisibility = () => {
    if (signInPasswordInput.current.type === 'password') {
      signInPasswordInput.current.type = 'text';
    } else {
      signInPasswordInput.current.type = 'password';
    }
  };
  const hendleButtonShown = () => {
    setVisibility(!visibility);
  };

  const handleSubmit = values => {
    login ? dispatch(registrationUser(values)) : dispatch(loginUser(values));
  };
  return (
    <Formik
      initialValues={login ? initialValuesRegister : initialValuesLogin}
      onSubmit={handleSubmit}
    >
      <FormChange>
        <Title>{login ? 'Registration' : 'Sign In'}</Title>
        <Form>
          <FormInputWrapper>
            <FormLabel>
              <IconEmail />
              <FormInput
                autoComplete="email"
                type="email"
                name="email"
                placeholder="Email"
                erorr={formik.errors.email}
                id="standard-required-register-email"
                formik={formik}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
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
            {login ? 'Sign up' : 'Sign In'}
          </Button>
        </Form>
        {login ? (
          <FormLink to="/signin">Sign In</FormLink>
        ) : (
          <FormLink to="/register">Registration</FormLink>
        )}
      </FormChange>
    </Formik>
  );
};
