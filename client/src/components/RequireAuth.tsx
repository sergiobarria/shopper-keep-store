import React from 'react';

import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useSelector } from '../hooks/useSelector';

export default function ProtectedRoute() {
  const { user } = useSelector((state) => state.user.login);
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to='/login' replace state={{ from: location }} />;
}
