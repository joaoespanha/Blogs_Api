const express = require('express');
const processToken = require('../middlewares/validateToken.middleware');
const { getAll } = require('../controllers/posts.controller');

const postsRouter = express.Router();

postsRouter.get('/', processToken, getAll);

module.exports = postsRouter;