const { createSale } = require('../../services/sales');

const createSaleController = async (req, _res, next) => {
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, status } = req.body;
  const { id: userId } = req.user || { id: 3 };

  const sale = await createSale({
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    userId,
  });

  req.sale = sale;
  
  return next();
};

module.exports = createSaleController;