import React from 'react';

export default function Loader() {
  return (
    <div className='mt-28 flex items-center justify-center'>
      <div className='h-24 w-24 animate-spin rounded-full border-b-4 border-gray-900' />
    </div>
  );
}
