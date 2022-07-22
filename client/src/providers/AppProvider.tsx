import React from 'react';

import { RouterProvider } from './RouterProvider';
import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';

export const API_ENDPOINT = import.meta.env.REACT_APP_API_ENDPOINT || '';

export const AppProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <RouterProvider>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </RouterProvider>
  );
};
