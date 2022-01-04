const Author = require('../models/Author');

const create = async (firstName, middleName, lastName) =>
  Author.create(firstName, middleName, lastName);

const findById = async (id) => Author.findById(id);

const getAll = async () => Author.getAll();

module.exports = {
  create,
  findById,
  getAll,
};