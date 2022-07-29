const crypto = require('crypto');
const { Op } = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');
const { customizeError } = require('../../utils');
const { User } = require('../../database/models');
const { generateJWT } = require('../../utils');

const userSchema = Joi.object({
  email: Joi.string().regex(/\S+@\S+\.\S+/).required(),
  password: Joi.string().min(6).required(),
});

const alreadyExists = async (email, password) => {
  const hashPassword = crypto.createHash('md5').update(password).digest('hex');

  const user = await User.findOne({ where: { [Op.and]: [{ email }, { password: hashPassword }] } });

  return user;
};

const validateLogin = async (email, password) => {
  const { error } = userSchema.validate({ email, password });
  if (error) throw customizeError(StatusCodes.BAD_REQUEST, error.message);
  
  const userFound = await alreadyExists(email, password);

  if (!userFound) {
    throw customizeError(StatusCodes.NOT_FOUND, 'Invalid fields');
  }

  const { password: _password, ...userWithoutPassword } = userFound.dataValues;

  const token = generateJWT(userWithoutPassword);

  return { token };
};
  
module.exports = validateLogin;
