const express = require('express');

const loginRouter = require('./loginRoutes.route');
const userRouter = require('./user.routes');
const categoriesRouter = require('./categories.route');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);

module.exports = router;
