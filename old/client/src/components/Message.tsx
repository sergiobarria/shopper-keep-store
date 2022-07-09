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
        'mb-3 p-3',
        type === 'error' && 'bg-red-300 text-red-700',
        type === 'info' && 'bg-blue-300 text-blue-700',
        type === 'success' && 'bg-green-300 text-green-700'
      )}
    >
      <h3 className='text-lg'>{msg}</h3>
    </div>
  );
}
