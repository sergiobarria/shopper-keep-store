import React from 'react';

export default function Message({ msg }: { msg: string }) {
  return (
    <div className='p-3 bg-red-300'>
      <h3 className='text-red-700'>{msg}</h3>
    </div>
  );
}
