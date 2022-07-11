import React from 'react';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { updateProfileFormSchema } from '../utils/formValidationSchemas';
import { UserRegisterInfo } from '../types';

export default function ProfilePage() {
  const { getUserDetails, updateUserProfile } = useActions();
  const { loading, error, user } = useSelector((state) => state.user.details);
  const { user: userInfo } = useSelector((state) => state.user.login);
  const { success } = useSelector((state) => state.user.update);
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterInfo>({ resolver: yupResolver(updateProfileFormSchema) });

  React.useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }

    if (!user?.name) {
      getUserDetails('profile');
    }
  }, [userInfo]);

  React.useEffect(() => {
    if (user?.name) {
      reset(user);
    }
  }, [user]);

  async function submitHandler(formData: UserRegisterInfo) {
    updateUserProfile(formData);
  }

  return (
    <div className='grid gap-6 md:grid-cols-12'>
      <div className='md:col-span-3'>
        <h2 className='mb-6 text-2xl uppercase tracking-wider'>user profile</h2>
        {loading && <Loader />}
        {error && <Message msg={error} type='error' />}
        {success && <Message msg='Profile Updated' type='success' />}
        {!loading && (
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
              Update
            </button>
          </form>
        )}
      </div>
      <div className='md:col-span-9'>Orders</div>
    </div>
  );
}
