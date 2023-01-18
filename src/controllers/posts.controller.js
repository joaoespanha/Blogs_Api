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

const update = async (req, res) => {
    const { id: postId } = req.params;
    const { id: userId } = req.adminUser;

    const { type, message } = await postsServices.update({ postId, userId, ...req.body });

    if (type) return res.status(type).json({ message });
    res.status(200).json(message);
};

const deletePost = async (req, res) => {
    const { id: postId } = req.params;
    const { id: userId } = req.adminUser;
    try {
    await postsServices.deletePost({ postId, userId });
    } catch (err) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    
    return res.sendStatus(204);
  };

const getByQuery = async (req, res) => {
    const { q: searchQuery } = req.query;

    const blogPosts = await postsServices.getByQuery(searchQuery);

    return res.status(200).json(blogPosts);
};
module.exports = { getAll, getById, register, update, deletePost, getByQuery };