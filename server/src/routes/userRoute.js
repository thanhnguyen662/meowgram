const express = require('express');
const { userController } = require('../app/controllers');
const router = express.Router();

router.get('/', userController.testUserController);

module.exports = router;
