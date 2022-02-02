const path = require('path');
const fs = require('fs');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('colors');

const { mongoConnect } = require('../services/mongoClient');

const User = require('../models/user.model');
const Product = require('../models/product.model');
const Order = require('../models/order.model');
// const products = require('../data/products');
const users = require('../data/users');

// Read JSON file
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8')
);

// Import data into DB
const importData = async () => {
  try {
    await mongoConnect();

    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    await Product.insertMany(sampleProducts);

    // eslint-disable-next-line
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    // eslint-disable-next-line
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Delete ALL data from DB
const deleteData = async () => {
  try {
    await mongoConnect();

    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // eslint-disable-next-line
    console.log('Data Deleted!'.red.inverse);
    process.exit();
  } catch (error) {
    // eslint-disable-next-line
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-i') {
  importData();
}

if (process.argv[2] === '-d') {
  deleteData();
}
