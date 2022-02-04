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
  const { user } = useSelector((state) => state.userLogin);
  const { logout } = useActions();

  const totalItemsInCart = cartItems.reduce((sum, { qty }) => sum + qty, 0);

  function logoutHandler() {
    logout();
  }

  return (
    <header className='px-4 bg-gray-900 lg:px-0'>
      <div className='container max-w-screen-lg'>
        <nav className='flex items-center justify-between py-4'>
          <div className='w-48 h-full'>
            <Link to='/'>
              <img src={logo} alt='shopper keep logo' />
            </Link>
          </div>
          <div className='flex'>
            <Link
              to='/cart'
              className={clsx(
                'relative flex items-center text-sm px-4 py-2 text-gray-100',
                'transition-colors hover:text-gray-400 duration-200'
              )}
            >
              <HiShoppingCart className='mr-1 text-lg' />
              CART
              {cartItems.length > 0 && (
                <span
                  className={clsx(
                    'absolute flex items-center justify-center top-1 right-2 w-4',
                    'text-xs text-white bg-red-500 rounded-full'
                  )}
                >
                  {totalItemsInCart}
                </span>
              )}
            </Link>
            {user ? (
              <Dropdown
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
                name={user.name}
                logoutHandler={logoutHandler}
              />
            ) : (
              <Link
                to='/login'
                className={clsx(
                  'flex items-center text-sm text-gray-100 px-4 py-2',
                  'transition-colors hover:text-gray-400 duration-200'
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
