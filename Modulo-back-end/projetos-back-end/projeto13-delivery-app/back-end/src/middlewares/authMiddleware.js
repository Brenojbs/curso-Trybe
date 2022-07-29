require('dotenv').config();
const status = require('http-status-codes').StatusCodes;
const JWT = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const { customizeError, decodeJWT } = require('../utils');

const archive = path.resolve(__dirname, '..', '..', '..', 'back-end', 'jwt.evaluation.key');

const secret = fs.readFileSync(archive, {
  encoding: 'utf8',
  flags: 'string',
}).trim() || 'secret_key';

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    JWT.verify(authorization, secret);
    const data = decodeJWT(authorization);
    req.user = data;
  } catch (err) {
    if (!authorization) throw customizeError(status.UNAUTHORIZED, 'Token not found');
    throw customizeError(status.UNAUTHORIZED, 'Expired or invalid token');
  }
  return next();
};

module.exports = authMiddleware;