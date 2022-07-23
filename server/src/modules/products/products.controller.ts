import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import status from 'http-status';

import { Product } from '@api/models';
import type { CreateProductInput, ReadProductInput } from './products.schemas';

/**
 * @description - Get all products
 * @access - Public
 * @returns {Response} - Express response object
 */
export const getAllProductsHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const products = await Product.find().select('-__v');

    res.status(status.OK).json({
      count: products.length,
      data: products,
    });
  }
);

/**
 * @description - Get single product by id
 * @access - Public
 * @returns {Response} - Express response object
 */
export const getProductByIdHandler = asyncHandler(
  async (req: Request<ReadProductInput['params']>, res: Response) => {
    const { id } = req.params;
    const product = await Product.findById(id).select('-__v');

    if (!product) {
      res.status(status.NOT_FOUND).json({
        message: 'Product not found',
      });

      throw new Error('Product not found');
    }

    res.status(status.OK).json({
      data: product,
    });
  }
);

/**
 * @description - Create a new product
 * @param {Post} req.body - Post request object
 * @access - Public
 * @returns {Response} - Express response object
 */
export const createProductHandler = asyncHandler(
  async (req: Request<{}, {}, CreateProductInput>, res: Response) => {
    const product = await Product.create(req.body);

    res.status(status.CREATED).json({
      data: product,
    });
  }
);
