const { StatusCodes } = require('http-status-codes');
const { createAnyUser } = require('../../services/admin');

const createUser = async (req, res, next) => {
  const user = req.body;
  const { role } = req.user;
  try {
    const result = await createAnyUser(user, role);
    return res.status(StatusCodes.CREATED).json({ user: result });
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;