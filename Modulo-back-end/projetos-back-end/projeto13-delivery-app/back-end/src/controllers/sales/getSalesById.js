const { getById } = require('../../services/sales');

const getAllSales = async (req, res) => {
  const data = req.user;
  const { orderId } = req.params;
  const sale = await getById(data, orderId);
  return res.status(200).json(sale);
};

module.exports = getAllSales;
