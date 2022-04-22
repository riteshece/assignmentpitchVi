const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const blogController = require('../controllers/blogController');
const middleware = require('../middlewares/auth')

router.post('/author', authorController.createAuthor);
 
router.post('/blog', blogController.createBlog);

router.get('/blogs',blogController.getBlogs);

router.put('/blogs/:blogId',middleware.auth,blogController.updateBlog);

router.delete('/blogs/:blogId',middleware.auth, blogController.deleteById);

router.delete('/blogs',middleware.auth, blogController.deleteByQuery);

router.post('/login', authorController.authorLogIn);

// router.post('/user', authorController.userLogin);


module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JJZCI6IjYyMzA1YzhjNDFmMGEyZDI4NzAyZGViMiIsImlhdCI6MTY0NzM3NTI0OH0.989X8Y1HOLAaVJ_R90Mj0A0Uh2d969iJwYnLesVHofQ
//id-62305c8c41f0a2d28702deb2


// 
//modiji
//token-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JJZCI6IjYyMzE4N2ViYzAzZDRmMzc2Y2ExYWI5NSIsImlhdCI6MTY0NzQyNzE0N30.n260l90JnyX7yFiJfyj5JK67nbzgf4g7iHOwSJg2leY