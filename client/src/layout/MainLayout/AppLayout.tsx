import React from 'react';
import { AppShell, Box, Container, Sx } from '@mantine/core';

import { Footer } from './Footer';
import { Header } from './Header';

const appShellStyles: Sx = {
  body: {
    fontWeight: 400,
  },
};

const mainContainerStyles: Sx = { minHeight: '80vh' };

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AppShell sx={appShellStyles} header={<Header />} footer={<Footer />}>
      <Box component='main' sx={mainContainerStyles}>
        <Container size='xl'>{children}</Container>
      </Box>
    </AppShell>
  );
};
