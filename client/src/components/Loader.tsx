import React from 'react';

export default function Loader() {
  return (
    <div className='flex items-center justify-center mt-28'>
      <div className='w-24 h-24 border-b-4 border-gray-900 rounded-full animate-spin' />
    </div>
  );
}
