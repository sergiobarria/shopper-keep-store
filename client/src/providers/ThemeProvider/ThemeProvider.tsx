import React from 'react';
import { MantineProvider } from '@mantine/core';

import { theme } from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
      {children}
    </MantineProvider>
  );
}
