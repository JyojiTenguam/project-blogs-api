const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { error, status, token } = await userService
    .createUser({ displayName, email, password, image });

  if (error) {
    return res.status(status).json({ message: error });
  }

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};