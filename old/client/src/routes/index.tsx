import React from 'react';

import { Routes, Route } from 'react-router-dom';

import RequireAuth from '../components/RequireAuth';
// import { useSelector } from '../hooks/useSelector';

import HomePage from '../pages/home.page';
import ProductPage from '../pages/productDetail.page';
import CartPage from '../pages/cart.page';
import LoginPage from '../pages/login.page';
import RegisterPage from '../pages/register.page';
import ProfilePage from '../pages/profile.page';
import ShippingPage from '../pages/shipping.page';
import NotFoundPage from '../pages/notFound.page';

export default function index() {
  // const { user } = useSelector((state) => state.user.login);
  // const location = useLocation();

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products/:id' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route element={<RequireAuth />}>
        <Route path='/shipping' element={<ShippingPage />} />
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
