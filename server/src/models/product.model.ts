import mongoose from 'mongoose';

import { reviewSchema, ReviewDocument } from './review.model';
import { UserDocument } from './user.model';

export interface IBaseProduct {
  user: UserDocument['_id'];
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
  isFeatured?: boolean;
  reviews: ReviewDocument['_id'];
  rating: number;
  ratingCount: number;
}

export interface ProductDocument extends IBaseProduct, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'A product must have a title'],
    },
    price: {
      type: Number,
      required: [true, 'A product must have a price'],
      default: 0,
    },
    description: {
      type: String,
      required: [true, 'A product must have a description'],
    },
    category: {
      type: String,
      required: [true, 'A product must have a category'],
    },
    image: {
      type: String,
      required: [true, 'A product must have an image'],
    },
    amount: {
      type: Number,
      required: [true, 'A product must have an amount'],
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: [true, 'A product must have a rating'],
      default: 0,
    },
    ratingCount: {
      type: Number,
      required: [true, 'A product must have a rating count'],
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Product = mongoose.model<ProductDocument>(
  'Product',
  productSchema
);
