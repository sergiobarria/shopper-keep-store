const express = require('express');

const { getAllProducts, getProductById } = require('./product.controller');

const router = express.Router();

router.route('/').get(getAllProducts);

router.route('/:id').get(getProductById);

module.exports = router;
