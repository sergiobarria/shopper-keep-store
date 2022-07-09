const express = require('express');

const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} = require('./user.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.route('/').post(registerUser);

router.route('/login').post(authUser);

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

module.exports = router;
