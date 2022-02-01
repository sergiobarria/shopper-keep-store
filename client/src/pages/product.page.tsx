import React from 'react';

import { Link, useParams } from 'react-router-dom';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import clsx from 'clsx';

import { useSelector } from '../hooks/useSelector';
import { useActions } from '../hooks/useActions';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';

export default function ProductPage() {
  const { id } = useParams();
  const { listProductDetails } = useActions();
  const { loading, error, product } = useSelector((state) => state.productDetails);

  React.useEffect(() => {
    if (id) {
      listProductDetails(id);
    }
  }, []);

  return (
    <>
      <Link
        to='/'
        className={clsx(
          'flex items-center text-gray-700',
          'hover:text-gray-300 transition-colors duration-200'
        )}
      >
        <IoArrowBackCircleSharp className='mr-1 text-xl' />
        <span className='inline-block border-b border-dotted'>Go Back</span>
      </Link>
      {loading && <Loader />}
      {error && <Message msg={error} />}
      {product && (
        <div className='grid grid-cols-12 p-4 mt-8 border'>
          <div className='col-span-6 p-4'>
            <div className='w-full h-full bg-red-500'>Image</div>
          </div>
          <div className='col-span-6 p-4'>
            <h3>{product?.name}</h3>
            <Rating value={product?.rating!} text={`${product?.numReviews} reviews`} />
            <p className='text-gray-500'>
              <span>Status: </span>
              {product?.countInStock! > 0 ? (
                <span className='text-green-600'>In Stock</span>
              ) : (
                <span className='text-red-600'>Out of Stock</span>
              )}
            </p>
            <hr className='my-2' />
            <p className='text-gray-500'>{product?.description}</p>
            <h4 className='my-2 text-2xl text-gray-800'>${product?.price}</h4>
            <button
              type='button'
              className={clsx(
                'text-white text-sm uppercase bg-gray-900 px-4 py-2',
                'hover:bg-gray-700 transition-colors duration-200'
              )}
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
