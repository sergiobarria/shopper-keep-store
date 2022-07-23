import mongoose from 'mongoose';

export interface BaseReview {
  name: string;
  rating: number;
  comment: string;
  user: null;
}

export interface ReviewDocument extends BaseReview, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

export const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A review must have a name'],
    },
    rating: {
      type: Number,
      required: [true, 'A review must have a rating'],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: [true, 'A review must have a comment'],
    },
  },
  { timestamps: true }
);

export const Review = mongoose.model<ReviewDocument>('Review', reviewSchema);
