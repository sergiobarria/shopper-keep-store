const express = require('express');

const { authUser, registerUser, getUserProfile } = require('./user.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.route('/').post(registerUser);

router.route('/login').post(authUser);

router.route('/profile').get(protect, getUserProfile);

module.exports = router;
