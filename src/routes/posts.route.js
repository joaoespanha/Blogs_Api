const express = require('express');
const processToken = require('../middlewares/validateToken.middleware');
const { postValidations } = require('../middlewares/postValidations.middleware');

const { getAll, getById, register } = require('../controllers/posts.controller');

const postsRouter = express.Router();

postsRouter.post('/', processToken, postValidations, register);

postsRouter.get('/', processToken, getAll);

postsRouter.get('/:id', processToken, getById);

module.exports = postsRouter;