const express = require('express');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const postController = require('./controllers/blogPostController');
const validateUser = require('./middlewares/userValidation');
const authMiddleware = require('./middlewares/authMiddleware');
// ...

const app = express();
app.use(express.json());
// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', loginController.login);
app.post('/user', validateUser, userController.createUser);
app.get('/user', authMiddleware, userController.getAllUsers);
app.get('/user/:id', authMiddleware, userController.getUserById);
app.post('/categories', authMiddleware, categoryController.createCategory);
app.get('/categories', authMiddleware, categoryController.getAllCategories);
app.post('/post', authMiddleware, postController.postBlog);
app.get('/post', authMiddleware, postController.getAllPosts);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
