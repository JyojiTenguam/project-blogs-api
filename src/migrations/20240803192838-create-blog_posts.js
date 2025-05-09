'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('blog_posts', { 
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userID:{
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
        field: 'user_id',
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key: 'id',
        },
      },
      published:{
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated:{
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('blog_posts');
  }
};
