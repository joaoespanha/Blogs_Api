'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'post_id',
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        refereces: {
          model: 'blog_posts',
          key: 'id'
        }
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'category_id',
        refereces: {
          model: 'categories',
          key: 'id'
        }
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('posts_categories');
  }
};
