const express = require('express');
const { createUser, getUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', createUser);
router.get('/:id', authMiddleware, getUser);

module.exports = router;