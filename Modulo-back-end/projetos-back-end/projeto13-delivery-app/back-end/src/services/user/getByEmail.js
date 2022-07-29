const { StatusCodes } = require('http-status-codes');
const { User } = require('../../database/models');
const { customizeError } = require('../../utils');

const getAllProductsService = async (email) => {
  const userInfo = await User.findOne({ where: { email } });
  if (!userInfo) throw customizeError(StatusCodes.NOT_FOUND, 'User not found');
  return userInfo;
};

module.exports = getAllProductsService;