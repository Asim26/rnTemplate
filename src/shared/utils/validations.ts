import * as Yup from 'yup';

const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(8, 'Password too Short')
    .matches(
      passwordRegExp,
      'Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number',
    ),
});
