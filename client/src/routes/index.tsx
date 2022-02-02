import React from 'react';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home.page';
import ProductPage from '../pages/productDetail.page';
import CartPage from '../pages/cart.page';

export default function index() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products/:id' element={<ProductPage />} />
      <Route path='/cart/:id?' element={<CartPage />} />
      <Route path='/cart/*' element={<CartPage />} />
      <Route
        path='*'
        element={
          <div>
            <p>There's nothing here!</p>
          </div>
        }
      />
    </Routes>
  );
}
