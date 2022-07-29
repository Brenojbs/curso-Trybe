require('express-async-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const io = require('socket.io');
const { createServer } = require('http');
const changeOrderStatus = require('../sockets/changeOrderStatus');
const { errorMiddleware } = require('../middlewares');
const {
  productsRoute,
  sellerRoute,
  loginRoute,
  userRoute,
  salesRoute,
  adminRoute,
} = require('../routes');

const app = express();

const http = createServer(app);
const socketio = io(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST'],
  },
});

app.use(express.json());
app.use(cors());

changeOrderStatus(socketio);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public', 'images')));
app.use(loginRoute);
app.use(userRoute);
app.use(adminRoute);
app.use(productsRoute);
app.use(sellerRoute);
app.use(salesRoute);

app.use(errorMiddleware);

module.exports = http;
