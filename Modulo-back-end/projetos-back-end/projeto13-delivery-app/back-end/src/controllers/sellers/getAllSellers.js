const { getAll } = require('../../services/sellers');

const getAllSellers = async (_req, res) => {
  const sellers = await getAll();
  return res.status(200).json(sellers);
};

module.exports = getAllSellers;