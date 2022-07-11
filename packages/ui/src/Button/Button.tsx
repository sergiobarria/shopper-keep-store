import React from 'react';
import { Button as ManitineButton, ButtonProps, SharedButtonProps } from '@mantine/core';

export function Button({ children }: ButtonProps<keyof SharedButtonProps>) {
  return <ManitineButton>{children}</ManitineButton>;
}
