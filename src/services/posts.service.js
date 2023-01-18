const { BlogPost, Category, User, sequelize } = require('../models');

const getAll = async () => {
    const posts = await BlogPost.findAll({
        include: [
          {
            model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
          },
          {
            model: Category,
            as: 'categories',
            through: { attributes: [] },
          },
        ],
      });
    return { type: null, message: posts };
};

const getById = async (id) => {
    const post = await BlogPost.findOne({
        where: { id },
        include: [
            {
              model: User,
              as: 'user',
              attributes: { exclude: ['password'] },
            },
            {
              model: Category,
              as: 'categories',
              through: { attributes: [] },
            },
          ],
    });

     if (!post) return { type: 404, message: 'Post does not exist' };
    
    return { type: null, message: post };
};

const register = async ({ categoryIds, ...blogPostData }) => {
    const categories = await Category.findAll({ where: { id: categoryIds } });
  
    const result = await sequelize
      .transaction(async (transaction) => {
        const blogPost = await BlogPost.create(blogPostData, { transaction });
        await blogPost.addCategories(categories, { transaction });
  
        return blogPost;
      });
  
    return result;
  };

  const update = async ({ postId, userId, ...blogPostData }) => {
    const blogPost = await BlogPost.findOne(
      {
        where: { id: postId, userId },
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      },
    );

    if (!blogPost) return { type: 401, message: 'Unauthorized user' };
  
    blogPost.set(blogPostData);
    await blogPost.save();
  
    return { type: null, message: blogPost };
  };

  const deletePost = async ({ postId, userId }) => {
    const blogPost = await BlogPost.findByPk(postId);
  
    if (!blogPost) {
      const error = new Error('Post does not exist');
      error.statusCode = 404;
  
      throw error;
    }
  
    if (blogPost.userId !== userId) {
      const error = new Error('Unauthorized user');
      error.statusCode = 401;
  
      throw error;
    }
  };
module.exports = { getAll, getById, register, update, deletePost };