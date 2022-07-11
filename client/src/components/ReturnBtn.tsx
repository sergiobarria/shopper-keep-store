import React from 'react';

import { Link } from 'react-router-dom';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import clsx from 'clsx';

export default function ReturnBtn({ route }: { route: string }) {
  return (
    <Link
      to={route}
      className={clsx(
        'flex items-center text-gray-700',
        'transition-colors duration-200 hover:text-gray-300'
      )}
    >
      <IoArrowBackCircleSharp className='mr-1 text-xl' />
      <span className='inline-block border-b border-dotted'>Go Back</span>
    </Link>
  );
}
