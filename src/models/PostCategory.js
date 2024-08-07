
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
      field: 'post_id',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'categories',
        key: 'id',
      },
      field: 'category_id',
    },
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });
  PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });

      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogPosts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
    return PostCategory;
};
