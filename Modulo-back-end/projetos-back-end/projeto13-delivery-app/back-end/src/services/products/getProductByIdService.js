const { Product } = require('../../database/models');
const { Error } = require('../../utils/customError');

const getProductByIdService = async ({ productId }) => {
  const product = await Product.findOne({ where: { id: productId } });
  
  if (!product) throw new Error('product not found', 404);

  return product;
};

module.exports = getProductByIdService;