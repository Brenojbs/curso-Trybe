const { getByEmail } = require('../../services/user');

const getAllUsers = async (req, res, next) => {
  const { email } = req.params;
  try {
    const user = await getByEmail(email);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllUsers;