const express = require('express');

const loginRouter = require('./loginRoutes.route');
const userRouter = require('./user.routes');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;
