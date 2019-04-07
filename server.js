const express = require('express');
const next = require('next');
const path = require('path');
const expressWS = require('express-ws');
require('dotenv').config();

const { setup } = require('radiks-server');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const port = parseInt(process.env.PORT, 10) || 5000;

const { User } = require('./models');
const mongoose = require('mongoose');

console.log('mongoose stuff initialized')

appConfig.use((req, res, next) => {
  console.log('use for mongoose callback')
  if (mongoose.connection.readyState) {
    console.log('if (mongoose.connection.readyState)')
    next();
  } else {
    console.log('else (mongoose.connection.readyState)')
    require('./mongo')().then(() => next());
    console.log('else (mongoose.connection.readyState)')
  }
});

app.prepare().then(async () => {
  const server = express();
  expressWS(server);

  const RadiksController = await setup();
  server.use('/radiks', RadiksController);
  server.use((req, res, _next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    _next();
  });

  server.get('/manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'manifest.json'));
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
