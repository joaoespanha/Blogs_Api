const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET;

const checkToken = (token) => {
    const decoded = jwt.verify(token, secret);
    const { data: userId, email } = decoded;

    return { userId, email };
}; 
module.exports = { checkToken };
