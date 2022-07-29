const { Router } = require('express');
const { createSale, getAllSales, getOrder, createSalesProducts } = require('../controllers/sales');

const sales = Router();
const { authMiddleware } = require('../middlewares');

sales.post('/customer/sales', authMiddleware, createSale, createSalesProducts);
sales.get('/customer/sales', authMiddleware, getAllSales);
sales.get('/customer/orders/:id', authMiddleware, getOrder);

module.exports = sales;
