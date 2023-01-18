const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

require('dotenv/config');

const secret = process.env.JWT_SECRET;

const checkTokenAndUser = async (token) => {
    const decoded = jwt.verify(token, secret);
    const { data: { userId, email } } = decoded;

    const { type, message } = await userService.getUserByEmailandId({ id: userId, email });

    if (type) return { type, message: 'Expired or invalid token' };

    return { type: null, message };
};
module.exports = { checkTokenAndUser };
