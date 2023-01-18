const postsServices = require('../services/posts.service');

const getAll = async (_req, res) => {
    const { message } = await postsServices.getAll();
    
    if (message) return res.status(200).json(message);
};

module.exports = { getAll };