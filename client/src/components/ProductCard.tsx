import React from 'react';
import { Link } from 'react-router-dom';

import Rating from './Rating';
import { Product } from '../types';

interface IProps {
  product: Product;
}

export default function ProductCard({ product }: IProps) {
  return (
    <article className='flex flex-col border p-3 text-gray-700 hover:scale-[1.03]'>
      <Link to={`products/${product._id}`} className='flex h-full flex-col'>
        <div className='h-44 w-full'>
          <img src={product?.image} alt='product' className='mx-auto h-full w-auto' />
        </div>
        <h4 className='mt-2 font-semibold'>{product.name}</h4>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <p className='mt-auto text-lg font-medium'>${product.price}</p>
      </Link>
    </article>
  );
}
