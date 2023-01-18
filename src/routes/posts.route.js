const express = require('express');
const processToken = require('../middlewares/validateToken.middleware');
const { postValidations, updateValidations } = require('../middlewares/postValidations.middleware');

const { getAll, getById, register, update } = require('../controllers/posts.controller');

const postsRouter = express.Router();

postsRouter.post('/', processToken, postValidations, register);

postsRouter.get('/', processToken, getAll);

postsRouter.get('/:id', processToken, getById);

postsRouter.put('/:id', processToken, updateValidations, update);

module.exports = postsRouter;