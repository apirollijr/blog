const express = require('express');
const cors = require('cors');

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comments');

const { errorHandler } = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Blog API is running');
});


app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);

// Error handler (must come after routes)
app.use(errorHandler);

module.exports = app;
