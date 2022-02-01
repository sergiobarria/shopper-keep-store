import React from 'react';

export default function Footer() {
  return (
    <footer className='flex justify-center py-6 mt-auto'>
      <p className='text-sm text-gray-500'>
        Shopper Keep &copy; Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
}
