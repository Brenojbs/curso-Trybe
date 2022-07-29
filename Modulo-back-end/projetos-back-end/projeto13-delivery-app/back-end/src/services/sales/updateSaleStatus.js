const { Sale } = require('../../database/models');

const updateSaleStatus = async ({ saleId, status }) => {
  const sale = await Sale.update({ status }, { where: { id: saleId } });
  return sale;
};

module.exports = updateSaleStatus;