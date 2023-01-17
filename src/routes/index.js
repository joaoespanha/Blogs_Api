const express = require('express');

const loginRouter = require('./loginRoutes.route');

const router = express.Router();

router.use('/login', loginRouter);

module.exports = router;
