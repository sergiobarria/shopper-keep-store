import React from 'react';

import clsx from 'clsx';

interface Props {
  msg: string;
  textStyles: string;
  bgStyles: string;
}

export default function Message({ msg, textStyles, bgStyles }: Props) {
  return (
    <div className={clsx('p-3', bgStyles && bgStyles)}>
      <h3 className={textStyles}>{msg}</h3>
    </div>
  );
}
