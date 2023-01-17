const express = require('express');
const loginControllers = require('../controllers/login.controller.js');
const { loginValidations } = require('../middlewares/loginValidations.middleware');

const loginRouter = express.Router();

loginRouter.post('/', loginValidations, loginControllers.login);
