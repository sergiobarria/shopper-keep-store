export interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  reviews: string[];
}

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}
