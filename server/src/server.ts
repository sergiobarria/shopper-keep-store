/* eslint-disable no-console */

import * as http from 'http';

import dotenv from 'dotenv';
import colors from 'colors';

import app from './app';

dotenv.config();

let server: http.Server;

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';

function onListening() {
  console.log(
    colors.green.bold(
      `
      🚀 Express server running on ${ENV}!
      🔉 Listening on port: ${PORT}
      `
    )
  );
}

function onError(error: Error) {
  console.error(`Error: ${error.message}`.red);
}

async function startServer() {
  server = http.createServer(app);

  server.on('listening', onListening);
  server.on('error', onError);

  try {
    server.listen(PORT);
  } catch (error: unknown) {
    console.error(error ?? 'Unknown error');
    process.exit(1);
  }
}

startServer();
