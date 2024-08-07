const { BlogPost, PostCategory, Category, sequelize } = require('../models');

const postBlog = async ({ title, content, categoryIds, userId }) => {
  const categories = await Category.findAll({ where: { id: categoryIds } });
  if (categories.length !== categoryIds.length) {
    throw new Error('one or more "categoryIds" not found');
  }
  const t = await sequelize.transaction();
  try {
    const post = await BlogPost.create(
      { title, content, userId, published: new Date(), updated: new Date() },
      { transaction: t },
    );
    const postCategories = categoryIds.map((categoryId) => ({ postId: post.id, categoryId }));
    await PostCategory.bulkCreate(postCategories, { transaction: t });
    await t.commit();
    return post;
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

module.exports = {
  postBlog,
};