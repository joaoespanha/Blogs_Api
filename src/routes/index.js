const express = require('express');

const loginRouter = require('./loginRoutes.route');
const userRouter = require('./user.routes');
const categoriesRouter = require('./categories.route');
const postsRouter = require('./posts.route');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);
router.use('/post', postsRouter);

module.exports = router;
