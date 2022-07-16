import React from 'react';
import { Box, MantineTheme, Sx, Title, Grid } from '@mantine/core';

import { ProductCard } from '@src/shared/components';

import { products } from '@src/shared/constants/products';

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
  return (
    <React.Fragment>
      <Box>
        <Box sx={titleDecorationStyles} />
        <Title order={1} sx={headingStyles}>
          Latest Products
        </Title>
      </Box>

      {/* Display Latest Products */}
      <Grid sx={gridStyles} gutter='xl'>
        {products.map((product) => (
          <Grid.Col sm={6} md={4} lg={3} key={product._id}>
            <ProductCard product={product} />
          </Grid.Col>
        ))}
      </Grid>
    </React.Fragment>
  );
};
