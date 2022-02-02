import React from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';
import clsx from 'clsx';

interface Props {
  value: number;
  onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
  stock: number;
}

export default function QtySelector({ value, onChangeHandler, stock }: Props) {
  return (
    <div className='relative inline-flex'>
      <MdKeyboardArrowDown
        className={clsx('absolute top-[0.65rem] right-2 pointer-events-none', 'text-2xl')}
      />
      <select
        name='qty'
        id='qty'
        value={value}
        onChange={onChangeHandler}
        className='cursor-pointer'
      >
        {[...Array(stock).keys()].map((item: number) => (
          <option key={item + 1} value={item + 1}>
            {item + 1}
          </option>
        ))}
      </select>
    </div>
  );
}
