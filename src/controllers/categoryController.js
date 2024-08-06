const categoryService = require('../services/categoryService');

const validateCategoryName = (name) => {
  if (!name) {
    throw new Error('"name" is required');
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    validateCategoryName(name);

    const category = await categoryService.createCategory(name);
    return res.status(201).json(category);
  } catch (error) {
    console.error('Error creating category:', error.message);
    
    if (error.message === '"name" is required') {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createCategory,
};