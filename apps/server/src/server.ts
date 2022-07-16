/* eslint-disable no-console */

import http from 'http';

import dotenv from 'dotenv';
import colors from 'colors';

import app from './app';

dotenv.config();

let server;

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
  // 💾 MongoDB connection ready!
}

function onError(error: Error) {
  console.log(`Error: ${error.message}`.red);
}

async function startServer() {
  server = http.createServer(app);

  server.listen(PORT);
  server.on('listening', onListening);
  server.on('error', onError);
}

startServer();
