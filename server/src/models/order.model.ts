import mongoose from 'mongoose';

import { UserDocument } from './user.model';
import { ProductDocument } from './product.model';

export interface CartItem {
  product: ProductDocument['_id'];
  name: string;
  qty: number;
  price: number;
  image: string;
}

export interface ShippingAddress {
  country: string;
  city: string;
  street: string;
  postalCode?: string;
}

export interface PaymentResult {
  id: string;
  status: string;
  updateTime: string;
  emailAddress: string;
}

export interface OrderBase {
  user: UserDocument['_id'];
  products: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  paymentResult: PaymentResult;
  tax: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: Date;
  isDelivered: boolean;
  deliveredAt: Date;
}

export interface OrderDocument extends OrderBase, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        name: { type: String, required: true },
        qty: { type: Number, required: true, default: 0, min: 0 },
        price: { type: Number, required: true, default: 0, min: 0 },
        image: { type: String, required: true },
      },
    ],
    shippingAddress: {
      country: { type: String, required: true },
      city: { type: String, required: true },
      street: { type: String, required: true },
      postalCode: { type: String, required: false },
    },
    paymentMethod: {
      type: String,
      required: [true, 'A order must have a payment method'],
    },
    paymentResult: {
      id: { type: String, required: false },
      status: { type: String, required: false },
      updateTime: { type: String, required: false },
      emailAddress: { type: String, required: false },
    },
    tax: {
      type: Number,
      required: [true, 'A order must have a tax'],
      default: 0,
      min: 0,
    },
    shippingPrice: {
      type: Number,
      required: [true, 'A order must have a shipping price'],
      default: 0,
      min: 0,
    },
    totalPrice: {
      type: Number,
      required: [true, 'A order must have a total price'],
      default: 0,
      min: 0,
    },
    isPaid: {
      type: Boolean,
      required: [true, 'A order must have a isPaid'],
      default: false,
    },
    paidAt: {
      type: Date,
      required: false,
    },
    isDelivered: {
      type: Boolean,
      required: [true, 'A order must have a isDelivered'],
      default: false,
    },
    deliveredAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model<OrderDocument>('Order', orderSchema);
