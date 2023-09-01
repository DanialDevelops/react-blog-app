const express = require('express');
const router = express.Router();
const Post = require('../models/post.js'); // Import Post model

// Define route to post
router.post('/post', async (req, res) => {
  try {
    // Create a new post using the Post model
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    });

    // Save the post to the database
    const savedPost = await newPost.save();

    res.json(savedPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to post' });
  }
});

router.get('/', async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find();

    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const postId = req.params.id
    // Fetch all posts from the database
    const posts = await Post.findById(postId);

    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

module.exports = router;