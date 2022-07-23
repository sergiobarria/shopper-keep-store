/* eslint-disable no-console */

import dotenv from 'dotenv';
import 'colors';

import { User, Product, Order } from '../models';
import { users } from '../data/users';
import { products } from '../data/products';

import { mongoConnect } from '../lib/mongoClient';

dotenv.config();

mongoConnect();

const deleteAllData = async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await Order.deleteMany({});
};

const importData = async () => {
  try {
    await deleteAllData();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return {
        user: adminUser,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        amount: product.amount,
        isFeatured: product.isFeatured,
        rating: product.rating.rate,
        ratingCount: product.rating.count,
        // reviews: product.reviews,
      };
    });

    await Product.insertMany(sampleProducts);

    console.log('Data imported successfully'.green.inverse);
    process.exit(0);
  } catch (error: any) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await deleteAllData();

    console.log('Data destroyed successfully'.red.inverse);
    process.exit(0);
  } catch (error: any) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  destroyData();
}
