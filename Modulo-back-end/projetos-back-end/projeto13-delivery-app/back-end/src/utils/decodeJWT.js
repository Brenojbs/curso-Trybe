const path = require('path');
const fs = require('fs');

const archive = path.join(__dirname, '..', '..', '..', 'back-end', 'jwt.evaluation.key');

const secret = fs.readFileSync(archive, {
  encoding: 'utf8',
  flags: 'string',
}).trim() || 'secret_key';

const JWT = require('jsonwebtoken');

module.exports = (token) => {
  const decoded = JWT.verify(token, secret);
  const result = decoded;
  return result;
};