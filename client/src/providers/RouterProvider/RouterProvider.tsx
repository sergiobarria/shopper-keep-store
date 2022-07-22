import * as React from 'react';
import { Router, ReactLocation } from '@tanstack/react-location';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';

import { PUBLIC_ROUTES, PRIVATE_ROUTES } from '@src/routes';

const reactLocation = new ReactLocation();

export const RouterProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <Router
      location={reactLocation}
      routes={[...PUBLIC_ROUTES, ...PRIVATE_ROUTES]}
    >
      {children}
      <ReactLocationDevtools initialIsOpen={false} />
    </Router>
  );
};
