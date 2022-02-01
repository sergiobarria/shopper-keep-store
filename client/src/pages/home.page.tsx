import React from 'react';

import clsx from 'clsx';

import ProductCard from '../components/ProductCard';
import products from '../assets/products';

export default function HomePage() {
  return (
    <section>
      <h2 className='mb-3'>Latest Products</h2>
      <div
        className={clsx(
          'grid grid-cols-1 gap-6',
          'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        )}
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
