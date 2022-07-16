import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage, ProductDetailPage } from '@src/pages';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products/:productId' element={<ProductDetailPage />} />
    </Routes>
  );
};
