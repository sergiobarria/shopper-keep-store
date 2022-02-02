// const path = require('path')

const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const { notFound, errorHandler } = require('./middleware/error.middleware');

// Import routes
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');

// Create express app
const app = express();
app.use(express.json());

// App middleware
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//   })
// );

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

// app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
