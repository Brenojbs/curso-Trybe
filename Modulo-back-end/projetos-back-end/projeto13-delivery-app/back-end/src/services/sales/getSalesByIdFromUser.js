const { Op } = require('sequelize');
const { Sale } = require('../../database/models');

const getSalesByIdFromUser = async (user, orderId) => {
  const product = await Sale.findOne({ where: {
    [Op.and]: [{ id: orderId }, { [Op.or]: [{ sellerId: user.id }, { userId: user.id }] }],
  },
    include: [{ all: true, nested: true, attributes: { exclude: ['email', 'password'] } }],
    attributes: { exclude: ['user_id', 'seller_id', 'userId', 'sellerId'] },
  });

  return product;
};

module.exports = getSalesByIdFromUser;