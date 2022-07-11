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
        'w-full bg-gray-900 px-4 py-2 text-sm uppercase text-white',
        'mt-auto transition-colors duration-200 hover:bg-gray-700',
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
