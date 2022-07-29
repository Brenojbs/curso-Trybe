const JWT = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const archive = path.join(__dirname, '..', '..', '..', 'back-end', 'jwt.evaluation.key');

const secret = fs.readFileSync(archive, {
  encoding: 'utf8',
  flags: 'string',
}).trim() || 'secret_key';

const generateJWT = (payload) => {
  const JWTconfig = {
    algorithm: 'HS256',
    expiresIn: '10h',
  };
  
  const token = JWT.sign(payload, secret, JWTconfig);

  return token;
};

module.exports = generateJWT;