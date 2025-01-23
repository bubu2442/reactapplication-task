const express = require('express');
const { registerUser, loginUser } = require('../controller/authController');
const { validateRegistration, validateLogin } = require('../validations/authValidation');

const router = express.Router();

// Register route
router.post('/register', validateRegistration, registerUser);

// Login route
router.post('/login', validateLogin, loginUser);

module.exports = router;
