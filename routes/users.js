const express = require('express');
const router = express.Router();
const {
  getCurrentUser,
  getUserById,
  getAllUsers,
  updateUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/auth');

router.get('/me', protect, getCurrentUser);
router.put('/me', protect, updateUser);
router.get('/', getAllUsers); // optional, or restrict to admin
router.get('/:id', getUserById);

module.exports = router;
// This code defines the routes for user-related operations in an Express application.
// It includes routes for getting the current user, updating user information, retrieving all users, and getting a user by ID.
