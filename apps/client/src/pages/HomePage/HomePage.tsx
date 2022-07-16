import React, { ReactComponentElement } from 'react';
import {
  Box,
  MantineTheme,
  Sx,
  Title,
  Grid,
  Loader,
  Center,
} from '@mantine/core';
import { useQuery } from 'react-query';

import { ProductCard } from '@src/shared/components';
import { getAllProducts } from '@src/shared/services';

import { Product } from 'types';

// import { products } from '@src/shared/constants/products';

const headingStyles: Sx = (theme: MantineTheme) => ({
  color: theme.colors.dark[6],
});

const gridStyles: Sx = {
  marginTop: 20,
};

const titleDecorationStyles: Sx = (theme: MantineTheme) => ({
  width: '3rem',
  height: '4px',
  background: theme.fn.linearGradient(135, 'orange', 'red'),
});

export const HomePage: React.FC = () => {
  const query = useQuery<Product[]>('products', getAllProducts);

  let content: ReactComponentElement<any> | null = null;

  if (query.isLoading) {
    content = (
      <Center sx={{ minHeight: '25rem' }}>
        <Loader size='xl' color='red' variant='bars' />
      </Center>
    );
  }

  content = (
    <Grid sx={gridStyles} gutter='xl'>
      {query.status === 'success' &&
        query.data.map((product) => (
          <Grid.Col sm={6} md={4} lg={3} key={product._id}>
            <ProductCard product={product} />
          </Grid.Col>
        ))}
    </Grid>
  );

  return (
    <React.Fragment>
      <Box>
        <Box sx={titleDecorationStyles} />
        <Title order={1} sx={headingStyles}>
          Latest Products
        </Title>
      </Box>

      {/* Display Latest Products */}
      {content}
    </React.Fragment>
  );
};
