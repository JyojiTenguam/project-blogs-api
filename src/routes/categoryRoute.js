// src/routes/categoryRoute.js
const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

// Rota para criar uma nova categoria
router.post('/category', categoryController.createCategory);

module.exports = router;