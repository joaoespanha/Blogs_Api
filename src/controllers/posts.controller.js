const postsServices = require('../services/posts.service');

const register = async (req, res) => {
    const { id } = req.adminUser;
    const blogPost = await postsServices.register({ userId: id, ...req.body });

     res.status(201).json(blogPost);
};

const getAll = async (_req, res) => {
    const { message } = await postsServices.getAll();
    
    if (message) return res.status(200).json(message);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await postsServices.getById(id);
    
    if (type) return res.status(type).json({ message });

    return res.status(200).json(message);
};
module.exports = { getAll, getById, register };