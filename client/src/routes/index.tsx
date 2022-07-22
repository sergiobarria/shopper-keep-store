import { Route } from '@tanstack/react-location';

import { HOME_ROUTES } from './home';

export const PUBLIC_ROUTES: Route[] = [...HOME_ROUTES];

export const PRIVATE_ROUTES: Route[] = [];
