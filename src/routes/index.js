const express = require('express');

const loginRoutes = require('./loginRoutes.route');

const router = express.Router();

router.use('/login', loginRoutes);

module.exports = router;
