import React from 'react';
import {
  Box,
  Anchor,
  Sx,
  MantineTheme,
  Grid,
  Image,
  Title,
  Badge,
  Text,
  Stack,
  Divider,
  Group,
  Button,
  Loader,
} from '@mantine/core';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AiFillStar } from 'react-icons/ai';

import { getProductById } from '@src/shared/services';
import { Product } from 'types';

import * as appRoutes from '@src/shared/constants/routes';

const linkStyles: Sx = (theme: MantineTheme) => ({
  backgroundColor: theme.colors.dark[6],
  padding: '0.75rem 1.25rem',
  fontSize: theme.fontSizes.sm,
  color: theme.colors.gray[3],
  '&:hover': {
    textDecoration: 'none',
    opacity: 0.9,
  },
});

const textStyles: Sx = (theme: MantineTheme) => ({
  color: theme.colors.dark[6],
});

const buttonStyles: Sx = (theme: MantineTheme) => ({
  fontWeight: 'normal',
  textTransform: 'uppercase',
});

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useQuery<Product>('product', () =>
    getProductById(productId || '')
  );

  const handleAddToCartClick = () => {
    alert('TODO: Handle Add To Cart');
  };

  if (isLoading) {
    return (
      <Box sx={{ minHeight: '25rem' }}>
        <Loader size='xl' color='red' variant='bars' />
      </Box>
    );
  }

  return (
    <Box sx={{ margin: '2rem 0' }}>
      <Anchor component={RouterLink} to={appRoutes.home} sx={linkStyles}>
        Go Back
      </Anchor>

      {/* Product Details */}
      <Grid mt={16} sx={{ minHeight: '20rem' }}>
        <Grid.Col sm={12} lg={6}>
          <Image
            src={product?.image}
            alt={product?.title}
            height={500}
            fit='contain'
          />
        </Grid.Col>
        <Grid.Col sm={12} lg={6}>
          <Stack
            align='flex-start'
            sx={{ height: '100%', padding: '2rem', position: 'relative' }}
          >
            <Title sx={textStyles} order={1}>
              {product?.title}
            </Title>
            <Group>
              <Badge
                variant='gradient'
                gradient={{ from: 'orange', to: 'red' }}
                sx={{ textTransform: 'none' }}
              >
                {product?.rating.rate} of 5 <AiFillStar /> -{' '}
                {product?.rating.count} reviews
              </Badge>

              {/* TODO: Add stock property to products */}
              <Badge
                variant='filled'
                color={product?.amount! > 0 ? 'green' : 'red'}
              >
                {product?.amount! > 0 ? 'In Stock' : 'Out of Stock'}
              </Badge>
            </Group>

            <Divider
              size='xs'
              variant='solid'
              color='#eaeaea'
              sx={{ width: '100%' }}
            />

            <Text sx={textStyles}>{product?.description}</Text>

            <Title sx={textStyles}>${product?.price.toFixed(2)}</Title>

            <Button
              sx={buttonStyles}
              onClick={handleAddToCartClick}
              fullWidth
              color='dark'
              radius={0}
              size='lg'
            >
              Add To Cart
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
