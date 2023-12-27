const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
const {authMiddleware} = require('../middleware/auth')


router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)
router.put('/update-user/:id', userController.updateUser)
router.delete('/delete-user/:id',authMiddleware, userController.deleteUser);

module.exports = router;