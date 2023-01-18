const express = require('express');
const processToken = require('../middlewares/validateToken.middleware');
const { register, getAll } = require('../controllers/categories.controller');

const categoriesRouter = express.Router();

categoriesRouter.post('/', processToken, register);
categoriesRouter.get('/', processToken, getAll);

module.exports = categoriesRouter;
