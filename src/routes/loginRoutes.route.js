const express = require('express');
const { login } = require('../controllers/login.controller.js');
const { loginValidations } = require('../middlewares/loginValidations.middleware');

const loginRouter = express.Router();

loginRouter.post('/', loginValidations, login);

module.exports = loginRouter;
