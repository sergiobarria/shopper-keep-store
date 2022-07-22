import React from 'react';
import { Link as RouterLink } from '@tanstack/react-location';
import {
  Header as MantineHeader,
  Container,
  Sx,
  MantineTheme,
  Group,
  Box,
  Anchor,
  Image,
} from '@mantine/core';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';

import * as appRoutes from '@src/shared/constants/routes';

import { SHOPPER_KEEP_LOGO } from '@src/shared/assets';

const headerStyles: Sx = (theme: MantineTheme) => ({
  backgroundColor: theme.colors.dark[6],
  color: 'white',
});

const headerContentLayout: Sx = {
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const headerLinkStyles: Sx = (theme: MantineTheme) => ({
  textTransform: 'uppercase',
  color: theme.colors.gray[5],
  fontWeight: 500,
  fontSize: theme.fontSizes.sm,
  transition: 'all 300ms',
  padding: '0.5rem 1rem',
  '&:hover': {
    textDecoration: 'none',
    color: theme.colors.gray[3],
    backgroundColor: theme.colors.gray[8],
  },
});

const logoStyles: Sx = {
  width: '12.5rem',
};

export const AppHeader: React.FC = () => {
  return (
    <MantineHeader height={80} sx={headerStyles}>
      <Container size='xl' sx={headerContentLayout}>
        <Box sx={logoStyles}>
          <Image src={SHOPPER_KEEP_LOGO} alt='app logo' />
        </Box>
        <Group spacing={20}>
          <Anchor
            component={RouterLink}
            to={appRoutes.cart}
            sx={headerLinkStyles}
          >
            <Group spacing={5}>
              <AiOutlineShoppingCart size={20} /> cart
            </Group>
          </Anchor>
          <Anchor
            component={RouterLink}
            to={appRoutes.signIn}
            sx={headerLinkStyles}
          >
            <Group spacing={5}>
              <AiOutlineUser size={20} /> sign in
            </Group>
          </Anchor>
        </Group>
      </Container>
    </MantineHeader>
  );
};
