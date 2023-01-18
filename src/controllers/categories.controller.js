const categoriesServices = require('../services/categories.service');

const register = async (req, res) => {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    const { message } = await categoriesServices.register(name); 
    return res.status(201).json(message);
};

const getAll = async (_req, res) => {
    const { message } = await categoriesServices.getAll();

    return res.status(200).json(message);
};

module.exports = { register, getAll };