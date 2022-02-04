import React from 'react';

import { Link } from 'react-router-dom';

import clsx from 'clsx';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  logoutHandler: React.MouseEventHandler<HTMLButtonElement>;
  name: string;
}

export default function Dropdown({
  showDropdown,
  setShowDropdown,
  logoutHandler,
  name,
}: Props) {
  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          className={clsx(
            'inline-flex w-full items-center justify-center px-4 py-2 uppercase',
            'text-sm font-medium text-gray-200 transition-colors duration-200 hover:text-gray-400'
          )}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {name}
          <IoIosArrowDown />
        </button>
      </div>

      <div
        className={clsx(
          !showDropdown && 'hidden',
          'absolute right-0 mt-2 w-32 origin-top-right bg-white'
        )}
      >
        <div>
          <Link
            to='/profile'
            className='block py-1 pl-3 text-sm font-thin hover:bg-gray-100'
          >
            Profile
          </Link>
          <button
            type='button'
            className='block w-full py-1 pl-3 text-left text-sm font-thin hover:bg-gray-100'
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
