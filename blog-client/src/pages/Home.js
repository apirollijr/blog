import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get('/posts');
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post._id} style={{ marginBottom: '1.5rem' }}>
          <h2>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </h2>
          <p>{post.body.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
// This code defines a Home component that fetches and displays a list of blog posts.
// It uses the `useEffect` hook to fetch posts from the API when the component mounts