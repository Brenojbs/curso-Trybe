const { getAll } = require('../../services/products');

const getAllProductsController = async (_req, res) => {
  const products = await getAll();
  return res.status(200).json(products);
};

module.exports = getAllProductsController;
