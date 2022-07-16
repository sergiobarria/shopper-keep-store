import express, { Request, Response } from 'express';
import cors from 'cors';

import { products } from './data/products';

const app = express();

// APP MIDDLEWARE
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ 'Server Status': 'OK' });
});

app.get('/api/v1/products', (req: Request, res: Response) => {
  res.json(products);
});

app.get('/api/v1/products/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  const product = products.find((product) => product._id === id);

  res.json(product);
});

export default app;
