const { BlogPost } = require('../models');
const includeOptions = require('../utils/includeOptions');

const validateFields = (title, content) => {
  if (!title || !content) {
    throw new Error('Some required fields are missing');
  }
};

const postById = async (id) => {
  const post = await BlogPost.findByPk(id);
  if (!post) {
    throw new Error('Post not found');
  }
  return post;
};

const updatedPost = async (id) => BlogPost.findOne({
  where: { id },
  include: includeOptions,
});

const putBlogPost = async ({ params: { id }, body: { title, content }, 
  user: { payload: { id: userId } } }, res) => {
  try {
    validateFields(title, content);
    const post = await postById(id);
    if (post.userId !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    post.title = title;
    post.content = content;
    await post.save();
    const updatePost = await updatedPost(id);
    return res.status(200).json(updatePost);
  } catch (error) {
    const status = error.message.includes('Unauthorized') ? 401 : 400;
    return res.status(status).json({ message: error.message });
  }
};

module.exports = {
  putBlogPost,
};