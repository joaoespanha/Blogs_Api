const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '1h',
};

const createToken = ({ email, id }) => jwt.sign({ data: { userId: id, email } }, secret, jwtConfig);

module.exports = { createToken };