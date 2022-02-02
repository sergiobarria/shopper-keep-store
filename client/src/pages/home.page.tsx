import React from 'react';

import clsx from 'clsx';

import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Message from '../components/Message';

export default function HomePage() {
  const { loading, error, products } = useSelector((state) => state.productList);
  const { listProducts } = useActions();

  React.useEffect(() => {
    listProducts();
  }, []);

  return (
    <section>
      <h2 className='mb-10 tracking-widest'>Latest Products</h2>
      {loading && <Loader />}
      {error && <Message msg={error} textStyles='text-red-700' bgStyles='bg-red-300' />}
      {products && (
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
      )}
    </section>
  );
}
