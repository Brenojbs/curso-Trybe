const { getSale } = require('../../services/sales');

const getOrder = async (req, res) => {
  const { id } = req.params;
  const sale = await getSale(id);
  return res.status(200).json(sale);
};

module.exports = getOrder;
