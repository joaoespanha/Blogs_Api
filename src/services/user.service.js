const { User } = require('../models');
const { createToken } = require('../auth/createToken');

const register = async ({ displayName, email, password, image }) => {
    const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { displayName, email, password, image },
    });

    if (!created) return { type: 409, message: 'User already registered' };

    return { type: null, message: createToken(user) };
};

module.exports = { register };