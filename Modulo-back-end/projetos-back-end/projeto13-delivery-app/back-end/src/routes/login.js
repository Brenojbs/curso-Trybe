const { Router } = require('express');
const { loginController } = require('../controllers/login');

const login = Router();

login.post('/login', loginController);

module.exports = login;