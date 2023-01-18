const userService = require('../services/user.service');

const register = async (req, res) => {
    const user = req.body;

    const { type, message } = await userService.register(user);

    if (type) return res.status(type).json({ message });

    return res.status(201).json({ token: message });
};

const getAll = async (_req, res) => {
    const { message } = await userService.getAll();
    return res.status(200).json(message);
};

const getById = async (req, res) => {
    const { id } = req.params;
    
    const { type, message } = await userService.getById(id);

    if (type) return res.status(type).json({ message });

    return res.status(200).json(message);
};

module.exports = { register, getAll, getById };
