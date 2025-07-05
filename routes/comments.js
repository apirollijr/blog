const express = require('express');
const router = express.Router();
const {
  createComment,
  getCommentsByPost,
  deleteComment,
} = require('../controllers/commentController');
const { protect } = require('../middleware/auth');

router.post('/', protect, createComment);
router.get('/:postId', getCommentsByPost);
router.delete('/:id', protect, deleteComment);

module.exports = router;
