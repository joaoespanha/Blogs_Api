const { Category } = require('../models');

const postValidations = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    const checkFields = title && content && categoryIds;

    if (!checkFields) return res.status(400).json({ message: 'Some required fields are missing' });
    
    const categories = await Promise.all(
        categoryIds.map(async (id) => Category.findOne({ where: { id } })),
      );
    
      if (categories.some((category) => !category)) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
        }
        return next();
    };

module.exports = { postValidations };