const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const authenticate = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return null;
  }

  const payload = {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
  };

  const token = jwt.sign({ payload }, JWT_SECRET, {
    expiresIn: '1d',
  });

  return token;
};

module.exports = {
  authenticate,
};