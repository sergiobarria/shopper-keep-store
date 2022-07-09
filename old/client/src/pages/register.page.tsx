import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { registerFormSchema } from '../utils/formValidationSchemas';
import { UserRegisterInfo } from '../types';

export default function RegisterPage() {
  const { register: registerUser } = useActions();
  const { loading, error, user } = useSelector((state) => state.user.register);
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1] : '/';
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterInfo>({ resolver: yupResolver(registerFormSchema) });

  React.useEffect(() => {
    if (user) {
      navigate(redirect, { replace: true });
    }
  }, [user, redirect]);

  async function submitHandler(formData: UserRegisterInfo) {
    const { name, email, password } = formData;

    registerUser(name, email, password);
    reset();
  }

  return (
    <FormContainer>
      <h2 className='mb-6 text-4xl uppercase'>Sign Up</h2>
      {loading && <Loader />}
      {error && <Message msg={error} type='error' />}
      {!loading && (
        <>
          <form onSubmit={handleSubmit(submitHandler)}>
            {/* Name Input */}
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='flex flex-col text-sm font-thin text-gray-600'
              >
                Full Name
                <input
                  id='name'
                  placeholder='Enter your name'
                  className={clsx(
                    'border-0 bg-gray-200 p-3 text-sm font-thin',
                    errors.name && 'ring-1 ring-red-500'
                  )}
                  {...register('name')}
                />
                {errors.name && (
                  <span className='text-xs text-red-500'>*{errors.name.message}</span>
                )}
              </label>
            </div>

            {/* Email Input */}
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

            {/* Password Input */}
            <div className='mb-6'>
              <label
                htmlFor='password'
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

            {/* Confirm Password Input */}
            <div className='mb-6'>
              <label
                htmlFor='confirmPassword'
                className='flex flex-col text-sm font-thin text-gray-600'
              >
                Confirm Password
                <input
                  id='confirmPassword'
                  type='password'
                  placeholder='Confirm your password'
                  className={clsx(
                    'border-0 bg-gray-200 p-3 text-sm font-thin',
                    errors.name && 'ring-1 ring-red-500'
                  )}
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <span className='text-xs text-red-500'>
                    *{errors.confirmPassword.message}
                  </span>
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
              Sign Up
            </button>
          </form>
          <p className='mt-6 text-gray-700'>
            <span className='mr-1'>Already have an account?</span>
            <Link to='/login' className='underline hover:text-gray-900'>
              Login
            </Link>
            <span className='ml-1'>instead</span>
          </p>
        </>
      )}
    </FormContainer>
  );
}
