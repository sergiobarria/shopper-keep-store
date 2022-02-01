import React from 'react';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home.page';
import ProductPage from '../pages/product.page';

export default function index() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products/:id' element={<ProductPage />} />
    </Routes>
  );
}
