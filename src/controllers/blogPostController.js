const postService = require('../services/blogPostService');
const { BlogPost } = require('../models');
const includeOptions = require('../utils/includeOptions');

const validatePost = (title, content, categoryIds) => {
  if (!title || !content || !categoryIds) {
    return { error: 'Some required fields are missing', status: 400 };
  }
  return null;
};

const postBlog = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { user } = req;

  const validationError = validatePost(title, content, categoryIds);
  if (validationError) {
    return res.status(validationError.status).json({ message: validationError.error });
  }

  try {
    const post = await postService.postBlog({ 
      title, content, categoryIds, userId: user.payload.id });
    return res.status(201).json(post);
  } catch (error) {
    if (error.message === 'one or more "categoryIds" not found') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const posts = await BlogPost.findAll({ include: includeOptions });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await BlogPost.findByPk(id, { include: includeOptions });
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postBlog,
  getAllPosts,
  getPostById,
};