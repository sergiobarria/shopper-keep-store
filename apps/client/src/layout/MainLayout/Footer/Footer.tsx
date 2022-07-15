import React from 'react';
import { Container, Center, Sx, Footer as MantineFooter } from '@mantine/core';

const footerStyles: Sx = {
  fontSize: '13px',
  color: '#333',
  marginTop: 'auto',
};

export const Footer: React.FC = () => {
  return (
    <MantineFooter height={60} sx={footerStyles}>
      <Container size='lg' my={30}>
        <Center>
          Copyright &copy; Shopper Keep Store {new Date().getFullYear()}
        </Center>
      </Container>
    </MantineFooter>
  );
};
