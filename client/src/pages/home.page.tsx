import React from 'react';

import clsx from 'clsx';

import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { IProduct } from '../types';

export default function HomePage() {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:8000/api/products');

      if (data) {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

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
