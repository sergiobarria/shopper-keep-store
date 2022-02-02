import React from 'react';

import { useParams } from 'react-router-dom';
import clsx from 'clsx';

import { useSelector } from '../hooks/useSelector';
import { useActions } from '../hooks/useActions';
import Rating from '../components/Rating';
import ReturnBtn from '../components/ReturnBtn';
import Loader from '../components/Loader';
import Message from '../components/Message';
import QtySelector from '../components/QtySelector';

export default function ProductPage() {
  const [qty, setQty] = React.useState<number>(1);
  const { id } = useParams();
  const { listProductDetails, addToCart } = useActions();

  const { loading, error, product } = useSelector((state) => state.productDetails);

  React.useEffect(() => {
    if (id) {
      listProductDetails(id);
    }
  }, []);

  function addToCartHandler() {
    if (id) {
      addToCart(id, qty);
    }
  }

  return (
    <>
      <ReturnBtn route='/' />

      {loading && <Loader />}
      {error && <Message msg={error} textStyles='text-red-700' bgStyles='bg-red-300' />}
      {product && (
        <div className='grid grid-cols-1 p-4 mt-8 border md:grid-cols-2'>
          <div className='p-4'>
            <div className='w-full h-full'>
              <img src={product?.image} alt={product?.name} />
            </div>
          </div>
          <div className='flex flex-col p-4'>
            <h3>{product?.name}</h3>
            <Rating value={product?.rating!} text={`${product?.numReviews} reviews`} />
            <p className='text-gray-500'>
              {product?.countInStock! > 0 ? (
                <span className='text-green-600'>In Stock</span>
              ) : (
                <span className='text-red-600'>Out of Stock</span>
              )}
            </p>
            <hr className='my-2' />
            <p className='text-sm text-gray-500'>{product?.description}</p>
            <h4 className='my-2 text-2xl text-gray-800'>${product?.price}</h4>

            {product?.countInStock > 0 && (
              <div className='flex items-center mb-6 space-x-2'>
                <p className='text-sm text-gray-500'>Quantity:</p>
                <QtySelector
                  value={qty}
                  onChangeHandler={(e) => setQty(Number(e.target.value))}
                  stock={product?.countInStock}
                />
              </div>
            )}
            <button
              type='button'
              disabled={product?.countInStock <= 0}
              className={clsx(
                'text-white text-sm uppercase bg-gray-900 px-4 py-2',
                'hover:bg-gray-700 transition-colors duration-200 mt-auto',
                'disabled:cursor-not-allowed disabled:bg-gray-300'
              )}
              onClick={addToCartHandler}
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
