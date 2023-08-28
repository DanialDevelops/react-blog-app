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

module.exports = router;