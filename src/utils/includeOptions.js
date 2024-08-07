const { User, Category } = require('../models');

const includeOptions = [
  {
    model: User,
    as: 'user',
    attributes: ['id', 'displayName', 'email', 'image'],
  },
  {
    model: Category,
    as: 'categories',
    through: { attributes: [] },
    attributes: ['id', 'name'],
  },
];

module.exports = includeOptions;