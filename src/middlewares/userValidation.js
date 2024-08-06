const validateDisplayName = (displayName) => {
  if (!displayName || displayName.length < 8) {
    return { message: '"displayName" length must be at least 8 characters long' };
  }
  return null;
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { message: '"email" must be a valid email' };
  }
  return null;
};

const validatePassword = (password) => {
  if (!password || password.length < 6) {
    return { message: '"password" length must be at least 6 characters long' };
  }
  return null;
};

const validateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;

  const displayNameError = validateDisplayName(displayName);
  if (displayNameError) {
    return res.status(400).json(displayNameError);
  }

  const emailError = validateEmail(email);
  if (emailError) {
    return res.status(400).json(emailError);
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    return res.status(400).json(passwordError);
  }

  next();
};

module.exports = validateUser;