const { getById } = require('../../services/products');

const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getById({ productId });
  return res.status(200).json(product);
};

module.exports = getProductByIdController;
