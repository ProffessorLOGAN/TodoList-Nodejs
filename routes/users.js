const express = require("express");
const router = express.Router();

const userController = require('../controllers/users_controller');
const postController = require('../controllers/post_controller');

router.get('/profile',userController.profile);
router.get('/posts',postController.posts);

module.exports = router;
