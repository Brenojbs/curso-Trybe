const getAllSalesByUser = require('./getAllFromUser');
const getSalesByIdFromUser = require('./getSalesByIdFromUser');
const getSaleById = require('./getSaleById');
const createSaleService = require('./createSaleService');
const createSalesProductsService = require('./createSalesProducts');

module.exports = {
  getAll: (user) => getAllSalesByUser(user),
  getById: (userId, orderId) => getSalesByIdFromUser(userId, orderId),
  getSale: (id) => getSaleById(id),
  createSale: (saleInfo) => createSaleService(saleInfo),
  createSalesProducts: createSalesProductsService,
};