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

const deleteUser = async (req, res) => {
    const { id: userId } = req.adminUser;
    try {
    await userService.deleteUser(userId);
    } catch (err) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    
    return res.sendStatus(204);
  };

module.exports = { register, getAll, getById, deleteUser };
