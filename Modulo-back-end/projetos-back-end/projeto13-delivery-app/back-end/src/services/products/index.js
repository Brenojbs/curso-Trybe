const getAllProducts = require('./getAllProductsService');
const getProductById = require('./getProductByIdService');

module.exports = {
  getAll: getAllProducts,
  getById: getProductById,
};