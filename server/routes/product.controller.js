const asyncHandler = require('express-async-handler');
const Product = require('../models/product.model');

// @desc    Fetch all products
// @route   GET /api/products/
// @access  Public
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  return res.status(200).json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  return res.status(200).json(product);
});

module.exports = {
  getAllProducts,
  getProductById,
};
