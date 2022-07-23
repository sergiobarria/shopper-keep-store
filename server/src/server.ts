import * as http from 'http';

import dotenv from 'dotenv';
import 'colors';

import { mongoConnect } from './lib';
import { logger } from './utils';
import app from './app';

dotenv.config();

let server: http.Server;

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';

function onListening() {
  logger.info(
    `Express server running on port ${PORT} in ${ENV} mode`.green.inverse
  );
}

function onError(error: Error) {
  logger.error(`Error: ${error.message}`.red);
}

async function startServer() {
  server = http.createServer(app);

  // Connect MongoDB
  await mongoConnect();

  server.on('listening', onListening);
  server.on('error', onError);

  try {
    server.listen(PORT);
  } catch (error: any) {
    logger.error(`Error: ${error.message}`.red);
    process.exit(1);
  }
}

startServer();
