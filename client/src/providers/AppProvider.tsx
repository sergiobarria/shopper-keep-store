import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';

export const API_ENDPOINT = import.meta.env.REACT_APP_API_ENDPOINT || '';

export const AppProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryProvider>
      <BrowserRouter>
        <ThemeProvider>{children}</ThemeProvider>
      </BrowserRouter>
    </QueryProvider>
  );
};
