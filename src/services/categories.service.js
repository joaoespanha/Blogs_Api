const { Category } = require('../models');

const register = async (name) => {
    const { dataValues } = await Category.create({ name });

    return { message: dataValues };
};

const getAll = async () => {
    const categories = await Category.findAll();

    return { message: categories };
};
module.exports = { register, getAll };