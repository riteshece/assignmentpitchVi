const express = require('express');
const router = express.Router();
const authorController = require('../controllers/Usercontroller');

const middleware = require('../middlewares/auth')

router.post('/user', UserController.createUser);

router.post('/login', authorController.authorLogIn);

// router.post('/user', authorController.userLogin);


module.exports = router;

