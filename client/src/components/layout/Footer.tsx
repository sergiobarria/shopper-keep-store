import React from 'react';

export default function Footer() {
  return (
    <footer className='flex justify-center mt-auto'>
      <div className='container flex justify-center max-w-screen-lg py-8 border-t'>
        <p className='text-sm text-gray-500'>
          Shopper Keep &copy; Copyright {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
