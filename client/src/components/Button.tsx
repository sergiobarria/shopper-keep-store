import React from 'react';

import clsx from 'clsx';

interface Props {
  disabled?: boolean;
  onClick: React.MouseEventHandler;
}

export default function Button({
  children,
  disabled,
  onClick,
}: React.PropsWithChildren<Props>) {
  return (
    <button
      type='button'
      disabled={disabled}
      className={clsx(
        'text-white w-full text-sm uppercase bg-gray-900 px-4 py-2',
        'hover:bg-gray-700 transition-colors duration-200 mt-auto',
        'disabled:cursor-not-allowed disabled:bg-gray-300'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};
