const userService = require('../services/userService');
const { User } = require('../models');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { error, status, token } = await userService
    .createUser({ displayName, email, password, image });

  if (error) {
    return res.status(status).json({ message: error });
  }

  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'displayName', 'email', 'image'],
    });
    return res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};