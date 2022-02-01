import React from 'react';

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

interface IProps {
  value: number;
  text: string;
}

export default function Rating({ value, text }: IProps) {
  return (
    <div className='flex items-center my-2 mt-auto space-x-1'>
      {[...Array(5)].map((_: undefined, index: number) => {
        if (value >= index + 1) {
          return (
            <BsStarFill key={`Star ${index}`} className='text-yellow-500' />
          );
        }

        if (value >= index + 0.5) {
          return (
            <BsStarHalf key={`Star ${index}`} className='text-yellow-500' />
          );
        }

        return <BsStar key={`Star ${index}`} className='text-yellow-500' />;
      })}
      <span className='text-sm text-gray-500'>{text && text}</span>
    </div>
  );
}
