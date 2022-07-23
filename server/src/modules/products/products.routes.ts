import express from 'express';

import { validate } from '@api/middleware';
import * as apiRoutes from '@api/shared/constants/routes';

import { createProductSchema, getProductSchema } from './products.schemas';
import {
  getAllProductsHandler,
  createProductHandler,
  getProductByIdHandler,
} from './products.controller';

const router = express.Router();

/**
 * @description - Get all products
 * @route - GET /api/v1/products
 */
router
  .route(apiRoutes.PRODUCTS)
  .get(getAllProductsHandler)
  .post(validate(createProductSchema), createProductHandler);

/**
 * @description - Get all products
 * @route - GET /api/v1/products
 */
router
  .route(apiRoutes.PRODUCT_ID)
  .get(validate(getProductSchema), getProductByIdHandler);

export { router as productsRouter };
