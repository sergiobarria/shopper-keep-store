import React from 'react';

import Header from './Header';
import Footer from './Footer';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='container max-w-screen-lg px-4 my-8 lg:px-0'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
