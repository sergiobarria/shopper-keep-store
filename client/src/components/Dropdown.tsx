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
    <>
      <button
        id='dropdownBtn'
        type='button'
        className={clsx('flex items-center text-sm ml-2 text-white')}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {name.toUpperCase()}
        <IoIosArrowDown className='ml-1' />
      </button>
      <div
        id='dropdown'
        className={clsx(
          'absolute flex flex-col items-start w-40 py-2 px-3 text-sm space-y-2',
          'text-gray-900 bg-white border right-32 top-16',
          !showDropdown && 'hidden'
        )}
      >
        <Link to='/profile' className='w-full p-1 hover:bg-gray-100'>
          Profile
        </Link>
        <button
          type='button'
          onClick={logoutHandler}
          className='w-full p-1 text-left hover:bg-gray-100'
        >
          Logout
        </button>
      </div>
    </>
  );
}
