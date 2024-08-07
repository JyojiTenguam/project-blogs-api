module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
      id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement:true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        field: 'user_id',
      },
      published:{ 
        defaultValue: DataTypes.NOW,
        type:DataTypes.DATE,
      },
      updated:{
        defaultValue: DataTypes.NOW,
        type:DataTypes.DATE,
      } 
  },{
      tableName:'blog_posts',
      underscored: true,
      timestamps: false,
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    BlogPost.belongsToMany(models.Category, {
      through: models.PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'category',
    });
  };
  return BlogPost;
};
