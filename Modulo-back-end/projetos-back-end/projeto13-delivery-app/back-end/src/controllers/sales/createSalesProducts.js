const { createSalesProducts } = require('../../services/sales');

const createSalesProductsController = async (req, res) => {
  const { cart } = req.body;
  const { sale } = req;

  const salesProducts = await createSalesProducts({ saleId: sale.id, cart });

  return res.status(201).json({ ...sale, products: salesProducts });
};

module.exports = createSalesProductsController;