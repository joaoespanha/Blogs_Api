const loginServices = require('../services/loginServices.service');

const login = async (req, res) => {
    const { email, password } = req.body;

    const { type, message } = await loginServices.login({ email, password });

    if (type) return res.status(type).json({ message });

    return res.status(200).json({ token: message });
};

module.exports = { login };
