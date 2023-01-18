const express = require('express');
const processToken = require('../middlewares/validateToken.middleware');
const { register } = require('../controllers/categories.controller');

const categoriesRouter = express.Router();

categoriesRouter.post('/', processToken, register);

module.exports = categoriesRouter;
