import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import { loginFormSchema } from '../utils/formValidationSchemas';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';

interface UserLoginInfo {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { login } = useActions();
  const { loading, error, user } = useSelector((state) => state.user.login);
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split('=')[1] : '/';
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginInfo>({ resolver: yupResolver(loginFormSchema) });

  React.useEffect(() => {
    if (user) {
      navigate(redirect, { replace: true });
    }
  }, [user, redirect]);

  async function submitHandler(formData: UserLoginInfo) {
    const { email, password } = formData;

    login(email, password);
    reset();
  }

  return (
    <FormContainer>
      <h2 className='mb-6 text-4xl uppercase'>Sign In</h2>
      {loading && <Loader />}
      {error && <Message msg={error} type='error' />}
      {!loading && (
        <>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='flex flex-col text-sm font-thin text-gray-600'
              >
                Email Address
                <input
                  id='email'
                  placeholder='Enter your email'
                  className={clsx(
                    'border-0 bg-gray-200 p-3 text-sm font-thin',
                    errors.email && 'ring-1 ring-red-500'
                  )}
                  {...register('email')}
                />
                {errors.email && (
                  <span className='text-xs text-red-500'>*{errors.email.message}</span>
                )}
              </label>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='flex flex-col text-sm font-thin text-gray-600'
              >
                Password
                <input
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                  className={clsx(
                    'border-0 bg-gray-200 p-3 text-sm font-thin',
                    errors.password && 'ring-1 ring-red-500'
                  )}
                  {...register('password')}
                />
                {errors.password && (
                  <span className='text-xs text-red-500'>*{errors.password.message}</span>
                )}
              </label>
            </div>
            <button
              type='submit'
              className={clsx(
                'bg-gray-900 px-4 py-2 text-white',
                'transition-colors duration-200 hover:bg-gray-700'
              )}
            >
              Sign In
            </button>
          </form>
          <p className='mt-6 text-gray-700'>
            <span className='mr-1'>New Customer?</span>
            <Link to='/register' className='underline hover:text-gray-900'>
              Register
            </Link>
            <span className='ml-1'>Instead</span>
          </p>
        </>
      )}
    </FormContainer>
  );
}
