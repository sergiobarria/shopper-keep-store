import mongoose from 'mongoose';
import dotenv from 'dotenv';
import 'colors';

import { logger } from '@api/utils';

dotenv.config();

const { MONGO_URI } = process.env;

mongoose.connection.once('open', () => {
  logger.info(`MongoDB connection ready!`.blue.bold);
});

mongoose.connection.on('error', (err: Error) => {
  logger.error(`Error: ${err.message}`.red);
});

export async function mongoConnect() {
  if (MONGO_URI) await mongoose.connect(MONGO_URI);
}

export async function mongoDisconnect() {
  await mongoose.disconnect();
}
