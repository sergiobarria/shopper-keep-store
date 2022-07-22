import { Route } from '@tanstack/react-location';

import * as appRoutes from '@src/shared/constants/routes';
import { HomePage, ProductDetailPage } from '@src/pages';

export const HOME_ROUTES: Route[] = [
  {
    path: appRoutes.home,
    element: <HomePage />,
  },
  {
    path: appRoutes.homeProducts,
    children: [
      {
        path: appRoutes.homeProductDetail,
        element: <ProductDetailPage />,
      },
    ],
  },
];
