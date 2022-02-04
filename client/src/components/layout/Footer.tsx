import React from 'react';

export default function Footer() {
  return (
    <footer className='mt-auto flex justify-center'>
      <div className='container flex max-w-screen-lg justify-center border-t py-8'>
        <p className='text-sm text-gray-500'>
          Shopper Keep &copy; Copyright {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
