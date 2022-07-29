const { Router } = require('express');
const { getAllProducts } = require('../controllers/products');
const { getProductById } = require('../controllers/products');

const products = Router();

products.get('/customer/products', getAllProducts);

products.get('/customer/products/:productId', getProductById);

module.exports = products;
