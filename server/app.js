// const path = require('path')

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const products = require('./data/products');

// Create express app
const app = express();

// App middleware
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

// Routes
app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p._id === id);

  res.status(200).json(product);
});

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;
