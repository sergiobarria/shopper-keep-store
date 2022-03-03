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

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export interface UserRegisterInfo {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserState {
  loading?: boolean;
  user: User | undefined;
  error?: string | null;
}

export interface ShippingData {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
  // shippingAddress?: ShippingData;
}
