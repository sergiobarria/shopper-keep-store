import React from 'react';
import { Link } from 'react-router-dom';

import Rating from './Rating';
import { Product } from '../types';

interface IProps {
  product: Product;
}

export default function ProductCard({ product }: IProps) {
  return (
    <article className='p-3 flex flex-col border hover:scale-[1.03] text-gray-700'>
      <Link to={`products/${product._id}`} className='flex flex-col h-full'>
        <div className='w-full h-44'>
          <img src={product?.image} alt='product' className='w-auto h-full mx-auto' />
        </div>
        <h4 className='mt-2 font-semibold'>{product.name}</h4>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <p className='mt-auto text-lg font-medium'>${product.price}</p>
      </Link>
    </article>
  );
}
