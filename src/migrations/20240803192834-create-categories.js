'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
