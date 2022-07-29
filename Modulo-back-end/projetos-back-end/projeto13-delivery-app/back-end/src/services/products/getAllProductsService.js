const { Product } = require('../../database/models');

const getAllProductsService = async () => {
  const products = await Product.findAll();
  return products;
};

module.exports = getAllProductsService;