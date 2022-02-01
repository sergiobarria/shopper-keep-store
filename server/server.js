const http = require('http');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('colors');

const app = require('./app');

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow
        .bold
    );
  });
}

startServer();
