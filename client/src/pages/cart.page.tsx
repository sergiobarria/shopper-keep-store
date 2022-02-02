import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector } from '../hooks/useSelector';
import { useActions } from '../hooks/useActions';
import Message from '../components/Message';
import Button from '../components/Button';
import QtySelector from '../components/QtySelector';
import { CartItem } from '../types';

export default function CartPage() {
  const { adjustQty, removeFromCart } = useActions();
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  function removeItemHandler(id: string) {
    removeFromCart(id);
  }

  return (
    <section>
      <h2 className='mb-10 tracking-widest'>Your Cart</h2>
      {cartItems.length === 0 && (
        <Message
          msg='Your cart is empty'
          textStyles='text-blue-700'
          bgStyles='bg-blue-300'
        />
      )}
      {cartItems.length > 0 && (
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-12 md:col-span-8'>
            {cartItems.map((item: CartItem) => (
              <div key={item.id}>
                <article className='mb-6'>
                  <div className='flex'>
                    <div className='hidden h-full w-44 md:block'>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className='flex flex-col w-full ml-3'>
                      <div className='flex items-center justify-between'>
                        <Link to={`/products/${item.id}`}>
                          <h4 className='font-semibold hover:text-gray-700'>
                            {item.name}
                          </h4>
                        </Link>
                        <span className='text-lg text-amber-800'>${item.price}</span>
                      </div>
                      {item.countInStock > 0 && (
                        <p className='mb-4 text-sm text-green-600'>In Stock</p>
                      )}
                      <div className='flex items-center mt-auto space-x-6'>
                        <QtySelector
                          value={item.qty}
                          onChangeHandler={(e) => {
                            adjustQty(item.id, Number(e.target.value));
                          }}
                          stock={item.countInStock}
                        />
                        <button
                          type='button'
                          className='text-xs text-blue-400'
                          onClick={() => removeItemHandler(item.id)}
                        >
                          (remove item)
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <hr className='mb-6' />
              </div>
            ))}
          </div>
          {/* Checkout card */}
          <div className='col-span-8 border md:col-span-4'>
            <div className='p-4'>
              <h3 className='text-gray-700 uppercase'>
                subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
              </h3>
              <p className='text-lg text-gray-700'>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </p>
            </div>
            <hr />

            <div className='p-4'>
              <Button onClick={() => navigate('/login')}>proceed to checkout</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
