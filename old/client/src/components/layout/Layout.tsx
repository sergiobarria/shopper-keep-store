import React from 'react';

import Header from './Header';
import Footer from './Footer';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='container my-8 max-w-screen-lg px-4 lg:px-0'>{children}</main>
      <Footer />
    </div>
  );
}
