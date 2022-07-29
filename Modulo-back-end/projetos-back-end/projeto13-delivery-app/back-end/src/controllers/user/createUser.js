const { StatusCodes } = require('http-status-codes');
const { create } = require('../../services/user');

const createUser = async (req, res, next) => {
  const user = req.body;   
  if (!user.role) user.role = 'customer';
  try {
    const result = await create(user);
    return res.status(StatusCodes.CREATED).json({ token: result });
  } catch (error) {
    return next(error);
  }
};

module.exports = createUser;