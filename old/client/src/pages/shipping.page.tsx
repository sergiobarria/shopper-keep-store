import React from 'react';

import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import { useActions } from '../hooks/useActions';
// import { useSelector } from '../hooks/useSelector';
import FormContainer from '../components/FormContainer';
import { shippingFormSchema } from '../utils/formValidationSchemas';
import { ShippingData } from '../types';

export default function ShippingPage() {
  const navigate = useNavigate();
  const { saveShippingAddress } = useActions();
  // const { shippingAddress } = useSelector((state) => state.cart);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingData>({ resolver: yupResolver(shippingFormSchema) });

  async function submitHandler(formData: ShippingData) {
    saveShippingAddress(formData);
    navigate('/payment');
  }

  return (
    <FormContainer>
      <h2 className='mb-6 text-4xl uppercase'>Shipping</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        {/* Address */}
        <div className='mb-6'>
          <label
            htmlFor='address'
            className='flex flex-col text-sm font-thin text-gray-600'
          >
            Address
            <input
              id='address'
              placeholder='Enter address'
              className={clsx(
                'border-0 bg-gray-200 p-3 text-sm font-thin',
                errors.address && 'ring-1 ring-red-500'
              )}
              {...register('address')}
            />
            {errors.address && (
              <span className='text-xs text-red-500'>*{errors.address.message}</span>
            )}
          </label>
        </div>

        {/* City */}
        <div className='mb-6'>
          <label
            htmlFor='address'
            className='flex flex-col text-sm font-thin text-gray-600'
          >
            City
            <input
              id='city'
              placeholder='Enter city'
              className={clsx(
                'border-0 bg-gray-200 p-3 text-sm font-thin',
                errors.city && 'ring-1 ring-red-500'
              )}
              {...register('city')}
            />
            {errors.city && (
              <span className='text-xs text-red-500'>*{errors.city.message}</span>
            )}
          </label>
        </div>

        {/* Postal Code */}
        <div className='mb-6'>
          <label
            htmlFor='postalCode'
            className='flex flex-col text-sm font-thin text-gray-600'
          >
            Postal Code
            <input
              id='postalCode'
              placeholder='Enter postal code'
              className={clsx(
                'border-0 bg-gray-200 p-3 text-sm font-thin',
                errors.postalCode && 'ring-1 ring-red-500'
              )}
              {...register('postalCode')}
            />
            {errors.postalCode && (
              <span className='text-xs text-red-500'>*{errors.postalCode.message}</span>
            )}
          </label>
        </div>

        {/* Country */}
        <div className='mb-6'>
          <label
            htmlFor='country'
            className='flex flex-col text-sm font-thin text-gray-600'
          >
            Country
            <input
              id='country'
              placeholder='Enter country'
              className={clsx(
                'border-0 bg-gray-200 p-3 text-sm font-thin',
                errors.country && 'ring-1 ring-red-500'
              )}
              {...register('country')}
            />
            {errors.country && (
              <span className='text-xs text-red-500'>*{errors.country.message}</span>
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
          Continue
        </button>
      </form>
    </FormContainer>
  );
}
