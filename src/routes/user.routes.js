const express = require('express');
const { register, deleteUser } = require('../controllers/user.controller.js');
const { userValidations } = require('../middlewares/userValidations.middleware');
const processToken = require('../middlewares/validateToken.middleware');
const { getAll, getById } = require('../controllers/user.controller.js');

const userRouter = express.Router();

userRouter.post('/', userValidations, register);
userRouter.get('/', processToken, getAll);
userRouter.get('/:id', processToken, getById);
userRouter.delete('/me', processToken, deleteUser);

module.exports = userRouter;
