const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');
const authenticate = require('../middleware/authenticate')

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/users', authenticate, AuthController.list);


module.exports = router;