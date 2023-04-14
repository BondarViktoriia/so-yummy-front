import * as Yup from 'yup';

export const ErrorMessages = {
  name: 'The name must contain only letters, spaces and dashes',
  email: 'Is not valid email. The email must be for example: email@example.com',
  password:
    'Is not valid password. The password must contain at least one uppercase letter, one lowercase letter and one number',
};

const regExp = {
  email: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*)$/,
};

export const regSchema = Yup.object().shape({
  name: Yup.string()
    // .required('Required')
    .min(3, 'Name must contain at least 3 symbols'),
  email: Yup.string()
    .required('Required')
    .email(ErrorMessages.email, regExp.email),
  password: Yup.string()
    .required('Required')
    .min(
      6,
      'The password must contain at least one uppercase letter, one lowercase letter and one number'
    )
    .matches(regExp.password, ErrorMessages.password),
});

// export const logSchema = Yup.object().shape({
//   email: Yup.string()
//     .required('Required')
//     .email(regExp.email, ErrorMessages.email),
//   password: Yup.string()
//     .required('Required')
//     .min(
//       6,
//       'The password must contain at least one uppercase letter, one lowercase letter and one number'
//     )
//     .matches(regExp.password, ErrorMessages.password),
// });

export const subscrSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email(regExp.email, ErrorMessages.email),
});
