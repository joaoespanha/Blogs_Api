const { User } = require('../models');
const { createToken } = require('../auth/createToken');

const login = async (fields) => {
    const result = User.findOne({ where: fields });

    if (!result) return { type: 400, message: 'Invalid fields' };

    return { type: null, message: createToken(result) };
};

module.exports = { login };