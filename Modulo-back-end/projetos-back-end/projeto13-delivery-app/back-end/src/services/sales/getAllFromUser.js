const { Op } = require('sequelize');
const { Sale } = require('../../database/models');

const getAllSalesByUser = async (user) => {
  const products = await Sale.findAll({
    where: {
      [Op.or]: [
        { sellerId: user.id },
        { userId: user.id },
      ],
    },
  });
  
  return products;
};

module.exports = getAllSalesByUser;
