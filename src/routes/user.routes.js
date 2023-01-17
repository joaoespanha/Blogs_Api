const express = require('express');
const { register } = require('../controllers/user.controller.js');
const { userValidations } = require('../middlewares/userValidations.middleware');

const userRouter = express.Router();

userRouter.post('/', userValidations, register);

module.exports = userRouter;
