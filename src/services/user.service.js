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

const getUserByEmailandId = async (userInfo) => {
    const user = await User.findOne({
        where: userInfo,
        attributes: { exclude: ['password'] },
    });
    if (!user) return { type: 404, message: 'User does not exist' };

    return { type: null, message: user.dataValues };
};

const getAll = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    return { type: null, message: users };
};

const getById = async (id) => {
    const user = await User.findOne({
        where: { id },
        attributes: { exclude: ['password'] },
    });
    if (!user) return { type: 404, message: 'User does not exist' };

    return { type: null, message: user };
};

const deleteUser = async (userId) => {
    const user = await User.findByPk(userId);
   
    await user.destroy();
  };

module.exports = { register, getUserByEmailandId, getAll, getById, deleteUser };