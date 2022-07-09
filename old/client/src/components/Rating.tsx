import React from 'react';

import clsx from 'clsx';

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

interface IProps {
  value: number;
  text: string;
  className?: string;
}

export default function Rating({ value, text, className }: IProps) {
  return (
    <div className={clsx('my-2 flex items-center space-x-1', className && className)}>
      {[...Array(5)].map((_: undefined, index: number) => {
        if (value >= index + 1) {
          return <BsStarFill key={`Star ${index}`} className='text-yellow-500' />;
        }

        if (value >= index + 0.5) {
          return <BsStarHalf key={`Star ${index}`} className='text-yellow-500' />;
        }

        return <BsStar key={`Star ${index}`} className='text-yellow-500' />;
      })}
      <span className='text-sm text-gray-500'>{text && text}</span>
    </div>
  );
}

Rating.defaultProps = {
  className: '',
};
