import React from 'react';
import { Link } from 'react-router-dom';

import Rating from './Rating';
import { IProduct } from '../types';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  return (
    <article className='p-3 border hover:scale-[1.03]'>
      <Link to={`products/${product._id}`} className='flex flex-col h-full'>
        {/* <img src='' alt='product image' /> */}
        <h4 className='font-semibold'>{product.name}</h4>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <p className='mt-auto text-lg font-medium'>${product.price}</p>
      </Link>
    </article>
  );
}
