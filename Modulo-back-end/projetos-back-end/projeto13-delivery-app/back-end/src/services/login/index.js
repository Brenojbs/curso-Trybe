const validateLogin = require('./loginService');

module.exports = {
  loginService: (email, password) => validateLogin(email, password),
};
