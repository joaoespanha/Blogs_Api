'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type:Sequelize.INTERGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      displayName: {
        type:Sequelize.INTERGER,
        allowNull: false,
        field: 'display_name',
      },
      email: {
        type:Sequelize.STRING,
        allowNull: true,
      },
      password: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type:Sequelize.STRING,
        allowNull: true,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
};
