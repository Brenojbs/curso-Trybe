const { StatusCodes } = require('http-status-codes');
const { deleteUser } = require('../../services/admin');

const deleteAnyUser = async (req, res, next) => {
  const { id } = req.params;
  const { role: agentRole } = req.user;
  try {
    await deleteUser(id, agentRole);
    return res.status(StatusCodes.NO_CONTENT).json({});
  } catch (error) {
   return next(error);
  }
};

module.exports = deleteAnyUser;