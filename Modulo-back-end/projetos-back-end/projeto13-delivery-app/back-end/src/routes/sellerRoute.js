const { Router } = require('express');
const { getAllSales, getSalesById } = require('../controllers/sales');
const { getAllSellers } = require('../controllers/sellers');
const { authMiddleware } = require('../middlewares');

const sellerRoute = Router();

sellerRoute.get('/seller', authMiddleware, getAllSellers);

sellerRoute.get('/seller/orders', authMiddleware, getAllSales);

sellerRoute.get('/seller/orders/:orderId', authMiddleware, getSalesById);

module.exports = sellerRoute;