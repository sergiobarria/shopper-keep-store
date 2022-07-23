import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { notFound, errorHandler } from './middleware';

// Import Routes
import * as apiRoutes from '@api/shared/constants/routes';
import { productsRouter } from '@api/modules/products';

const app = express();

// APP MIDDLEWARE
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

// ROUTES
// Healthcheck route
app.get(apiRoutes.HEALTHCHECK_ROUTE, (req: Request, res: Response) => {
  res.status(200).json({
    API_STATUS: 'OK',
  });
});

app.use(apiRoutes.PRODUCTS_BASE_ROUTE, productsRouter);

app.use(notFound);

app.use(errorHandler);

export default app;
