import React from 'react';
import { AppShell, Box, Container, Sx } from '@mantine/core';

import { AppFooter } from './footer';
import { AppHeader } from './header';

const appShellStyles: Sx = {
  body: {
    fontWeight: 400,
  },
};

const mainContainerStyles: Sx = { minHeight: '80vh' };

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AppShell sx={appShellStyles} header={<AppHeader />} footer={<AppFooter />}>
      <Box component='main' sx={mainContainerStyles}>
        <Container size='xl'>{children}</Container>
      </Box>
    </AppShell>
  );
};
