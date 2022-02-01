const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// TODO: Update to use a mongo atlas string in production
const MONGO_URI = process.env.MONGO_URI_LOCAL;

mongoose.connection.once('open', () => {
  // eslint-disable-next-line
  console.log(`MongoDB connection ready!`.cyan.underline.bold);
});

mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line
  console.error(err);
});

// connect to db
async function mongoConnect() {
  await mongoose.connect(MONGO_URI);
}

module.exports = {
  mongoConnect,
};
