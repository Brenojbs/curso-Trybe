const generateJWT = require('./generateJWT');
const errorHandler = require('./errorhandler');
const decodeJWT = require('./decodeJWT');

module.exports = {
  generateJWT: (payload) => generateJWT(payload),
  decodeJWT: (token) => decodeJWT(token),
  customizeError: (statusCode, message) => errorHandler(statusCode, message),
};