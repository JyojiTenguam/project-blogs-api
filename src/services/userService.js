const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const createUser = async ({ displayName, email, password, image }) => {
  if (displayName.length < 8) {
    return { error: '"displayName" length must be at least 8 characters long', status: 400 };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return { error: '"email" must be a valid email', status: 400 };
  if (password.length < 6) {
    return { error: '"password" length must be at least 6 characters long', status: 400 };
  }

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) return { error: 'User already registered', status: 409 };

  const newUser = await User.create({ displayName, email, password, image });
  const { id } = newUser;
  const payload = { id, displayName, email, image };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' }); // Sem o objeto `payload`

  return { token };
};

module.exports = {
  createUser,
};