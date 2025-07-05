const express = require('express');
const router = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const { protect } = require('../middleware/auth');

router.route('/')
  .get(getPosts)       // public
  .post(protect, createPost); // protected

router.route('/:id')
  .get(getPostById)              // public
  .put(protect, updatePost)      // protected & author-only
  .delete(protect, deletePost);  // protected & author-only

module.exports = router;
// This code defines the routes for handling blog posts in an Express application.
// It includes routes for creating, reading, updating, and deleting posts, with appropriate middleware for authentication and authorization.