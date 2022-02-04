import React from 'react';

import clsx from 'clsx';

interface Props {
  msg: string;
  type: 'error' | 'info' | 'success';
  // textStyles: string;
  // bgStyles: string;
}

export default function Message({ msg, type }: Props) {
  return (
    <div
      className={clsx(
        'p-3 mb-3',
        type === 'error' && 'text-red-700 bg-red-300',
        type === 'info' && 'text-blue-700 bg-blue-300',
        type === 'success' && 'text-green-700 bg-green-300'
      )}
    >
      <h3 className='text-lg'>{msg}</h3>
    </div>
  );
}
