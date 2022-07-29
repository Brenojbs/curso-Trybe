const { StatusCodes } = require('http-status-codes');
const { loginService } = require('../../services/login');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await loginService(email, password);

    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = login;
