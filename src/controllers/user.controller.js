const userService = require('../services/user.service');

const register = async (req, res) => {
    const user = req.body;

    const { type, message } = await userService.register(user);

    if (type) return res.status(type).json({ message });

    return res.status(201).json({ token: message });
};

module.exports = { register };
