const createUser = require('./createUser');
const getAllUsers = require('./getAllUsers');
const getUserByEmail = require('./getUserByEmail');

module.exports = {
  create: createUser,
  getAll: getAllUsers,
  getByEmail: getUserByEmail,
};