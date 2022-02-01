import React from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import { HiShoppingCart } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';

import logo from '../../assets/img/logo.svg';

export default function Header() {
  return (
    <header className='px-4 bg-gray-900 lg:px-0'>
      <div className='container max-w-screen-lg'>
        <nav className='flex items-center justify-between py-4'>
          <div className='w-48 h-full'>
            <Link to='/'>
              <img src={logo} alt='shopper keep logo' />
            </Link>
          </div>
          <div className='flex space-x-6'>
            <Link
              to='/cart'
              className={clsx(
                'flex items-center text-sm text-gray-100',
                'transition-colors hover:text-gray-400 duration-200'
              )}
            >
              <HiShoppingCart className='mr-1 text-lg' />
              CART
            </Link>
            <Link
              to='/sign-in'
              className={clsx(
                'flex items-center text-sm text-gray-100',
                'transition-colors hover:text-gray-400 duration-200'
              )}
            >
              <BsFillPersonFill className='mr-1 text-lg' />
              SIGN IN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
