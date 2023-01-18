const { checkTokenAndUser } = require('../auth/checkToken');

const processToken = async (req, res, next) => {
    const { headers: { authorization } } = req;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    try {
        const { type, message } = await checkTokenAndUser(authorization);
        if (type) return res.status(type).json({ message });

        req.adminUser = message;
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = processToken;
