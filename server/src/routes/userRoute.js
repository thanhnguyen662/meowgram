const express = require('express');
const { userController } = require('../app/controllers');
const router = express.Router();
const { tokenVerify } = require('../firebase');

router.get('/me/local', tokenVerify, userController.findMeLocal);
router.post('/upsert', userController.upsertUserLocal);
router.get('/', userController.testUserController);

module.exports = router;
