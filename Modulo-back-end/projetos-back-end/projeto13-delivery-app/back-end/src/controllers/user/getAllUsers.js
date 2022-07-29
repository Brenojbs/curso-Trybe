const { getAll } = require('../../services/user');

const getAllUsers = async (req, res, next) => {
  const { role } = req.user;
  try {
    const users = await getAll(role);
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllUsers;