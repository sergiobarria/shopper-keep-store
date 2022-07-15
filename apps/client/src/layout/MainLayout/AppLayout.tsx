import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};
