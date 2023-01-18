const { Category } = require('../models');

const register = async (name) => {
    const { dataValues } = await Category.create({ name });

    return { message: dataValues };
};
module.exports = { register };