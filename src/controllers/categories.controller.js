const categoriesServices = require('../services/categories.service');

const register = async (req, res) => {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    const { message } = await categoriesServices.register(name); 
    return res.status(201).json(message);
};

module.exports = { register };