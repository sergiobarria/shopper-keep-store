import mongoose from 'mongoose';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export interface UserBase {
  username: string;
  email: string;
  password: string;
  role: UserRole.ADMIN | UserRole.USER;
}

export interface UserDocument extends UserBase, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'A user must have a username'],
    },
    email: {
      type: String,
      required: [true, 'A user must have an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'A user must have a password'],
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: UserRole,
      default: UserRole.USER,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<UserDocument>('User', userSchema);
