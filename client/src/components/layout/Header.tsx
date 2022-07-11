import React from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import { HiShoppingCart } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';

import Dropdown from '../Dropdown';
import { useSelector } from '../../hooks/useSelector';
import { useActions } from '../../hooks/useActions';

import logo from '../../assets/img/logo.svg';

export default function Header() {
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user.login);
  const { logout } = useActions();

  const totalItemsInCart = cartItems.reduce((sum, { qty }) => sum + qty, 0);

  function logoutHandler() {
    logout();
  }

  return (
    <header className='bg-gray-900 px-4 lg:px-0'>
      <div className='container max-w-screen-lg'>
        <nav className='flex items-center justify-between py-4'>
          <div className='h-full w-48'>
            <Link to='/'>
              <img src={logo} alt='shopper keep logo' />
            </Link>
          </div>
          <div className='flex'>
            <Link
              to='/cart'
              className={clsx(
                'relative flex items-center px-4 py-2 text-sm text-gray-100',
                'transition-colors duration-200 hover:text-gray-400'
              )}
            >
              <HiShoppingCart className='mr-1 text-lg' />
              CART
              {cartItems.length > 0 && (
                <span
                  className={clsx(
                    'absolute top-1 right-2 flex w-4 items-center justify-center',
                    'rounded-full bg-red-500 text-xs text-white'
                  )}
                >
                  {totalItemsInCart}
                </span>
              )}
            </Link>
            {/* Sign in button */}
            {user ? (
              <Dropdown
                name={user.name}
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
                logoutHandler={logoutHandler}
              />
            ) : (
              <Link
                to='/login'
                className={clsx(
                  'flex items-center px-4 py-2 text-sm text-gray-100',
                  'transition-colors duration-200 hover:text-gray-400'
                )}
              >
                <BsFillPersonFill className='mr-1 text-lg' />
                SIGN IN
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
