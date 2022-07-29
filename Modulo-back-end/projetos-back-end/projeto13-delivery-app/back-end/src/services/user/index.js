const createUser = require('./createUser');
const getAllUsers = require('./getAllUsers');
const getByEmail = require('./getByEmail');

module.exports = {
  create: (user) => createUser(user),
  getAll: (role) => getAllUsers(role),
  getByEmail: (email) => getByEmail(email),
};