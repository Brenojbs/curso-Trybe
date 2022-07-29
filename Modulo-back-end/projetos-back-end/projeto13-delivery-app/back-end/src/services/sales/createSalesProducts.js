const { SalesProduct } = require('../../database/models');

const createSalesProductsService = async ({ saleId, cart }) => {
  const cartToSalesProducts = cart.map((product) => ({
    saleId,
    productId: product.id,
    quantity: product.quantity,
  }));
  
  const result = await SalesProduct.bulkCreate(cartToSalesProducts);

  const formmatedSalesProducts = result.map(({ dataValues }) => dataValues);

  return formmatedSalesProducts;
};

module.exports = createSalesProductsService;