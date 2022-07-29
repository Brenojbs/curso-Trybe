const { getAll } = require('../../services/sales');

const getAllSales = async (req, res) => {
  const data = req.user;
  const sales = await getAll(data);
  return res.status(200).json(sales);
};

module.exports = getAllSales;
