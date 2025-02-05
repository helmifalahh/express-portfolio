const express = require('express');
const router = express.Router();

const userController = require('../controller/users.js')

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.delete('/:idUser', userController.deleteUser);

module.exports = router;