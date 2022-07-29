const { StatusCodes } = require('http-status-codes');
const { customizeError } = require('../../utils');
const { User } = require('../../database/models');

const validateUserExist = async (id) => {
  const user = await User.findOne({ where: { id } }) || null;
  if (!user) throw customizeError(StatusCodes.NOT_FOUND, 'User not exists');
};

const validateAgentRole = (agentRole) => {
  if (agentRole !== 'administrator') throw customizeError(StatusCodes.UNAUTHORIZED, 'Unauthorized');
};

const deleteUser = async (id, agentRole) => {
  validateAgentRole(agentRole);

  await validateUserExist(id);
  
  await User.destroy({ where: { id } });
};

module.exports = deleteUser;