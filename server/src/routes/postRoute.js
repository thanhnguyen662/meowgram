const express = require('express');
const { postController } = require('../app/controllers');
const router = express.Router();
const { tokenVerify } = require('../firebase');

router.post('/create', tokenVerify, postController.createPost);

module.exports = router;
