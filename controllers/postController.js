const Post = require('../models/Post');

// Create post
const createPost = async (req, res) => {
  const { title, body } = req.body;
  try {
    const post = await Post.create({
      title,
      body,
      author: req.user._id,
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username email');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single post
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username email');
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update post
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this post' });
    }

    post.title = req.body.title || post.title;
    post.body = req.body.body || post.body;

    const updated = await post.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }

    await post.remove();
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
// This code defines the post controller for handling CRUD operations on blog posts.
// It includes functions to create, read, update, and delete posts, with appropriate error handling