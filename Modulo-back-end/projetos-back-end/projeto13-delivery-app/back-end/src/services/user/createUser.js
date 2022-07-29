const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');
const crypto = require('crypto');
const { Op } = require('sequelize');
const { customizeError } = require('../../utils');
const { User } = require('../../database/models');
const { generateJWT } = require('../../utils');

const userSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().regex(/\S+@\S+\.\S+/).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

const alreadyExists = async (email, name) => {
  const data = await User.findOne({ where: {
    [Op.or]: [{ email }, { name }],
  } });
  return data || null;
};

const validateUser = async ({ name, email, password, role }) => {
  const { error } = userSchema.validate({ name, email, password, role }); 
  if (error) throw customizeError(StatusCodes.BAD_REQUEST, error.message);

  const exists = await alreadyExists(email, name);
  if (exists) throw customizeError(StatusCodes.CONFLICT, 'User already registered');
};

const createUser = async (user) => {
  const { name, email, password, role } = user;

  await validateUser({ name, email, password, role });
  
  const hashPassword = crypto.createHash('md5').update(password).digest('hex');

  const { id } = await User.create({ name, email, password: hashPassword, role });

  const token = generateJWT({ id, name, email, role });

  return token;
};

module.exports = createUser;