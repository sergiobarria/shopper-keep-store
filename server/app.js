// const path = require('path')

const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const { notFound, errorHandler } = require('./middleware/error.middleware');

// Import routes
const productRoutes = require('./routes/product.routes');

// Create express app
const app = express();

// App middleware
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//   })
// );

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
