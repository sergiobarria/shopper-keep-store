import React from 'react';
import {
  Badge,
  Card,
  Image,
  MantineTheme,
  Stack,
  Sx,
  Title,
} from '@mantine/core';
import { Link as RouterLink, generatePath } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import { Product } from '@src/shared/types';

import * as appRoutes from '@src/shared/constants/routes';

const cardStyles: Sx = {
  height: '100%',
  '&:hover': {
    transform: 'scale(105%)',
  },
};

const titleStyles: Sx = (theme: MantineTheme) => ({
  color: theme.colors.dark[6],
  marginTop: 'auto',
});

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      component={RouterLink}
      to={generatePath(appRoutes.product, { productId: product._id })}
      shadow='lg'
      sx={cardStyles}
    >
      <Image
        src={product.image}
        alt={product.title}
        height={200}
        fit='contain'
      />

      <Stack mt={20} align='flex-start' justify='space-between'>
        <Title order={4} sx={titleStyles}>
          {product.title}
        </Title>
        <Badge
          variant='gradient'
          gradient={{ from: 'orange', to: 'red' }}
          sx={{ textTransform: 'none' }}
        >
          {product.rating.rate} of 5 <AiFillStar /> - {product.rating.count}{' '}
          reviews
        </Badge>
        <Title sx={titleStyles}>${product.price.toFixed(2)}</Title>
      </Stack>
    </Card>
  );
};
