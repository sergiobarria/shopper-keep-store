import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least six characters')
    .required('Password is required'),
});

export const registerFormSchema = yup.object().shape({
  name: yup.string().required('Please add your name'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least six characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords should match'),
});

export const updateProfileFormSchema = yup.object().shape({
  name: yup.string().required('Please add your name'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup.string().optional(),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords should match'),
});
