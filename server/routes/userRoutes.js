const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import User model

// Define route to register a new user
router.post('/register', async (req, res) => {
  try {
    // Create a new user using the User model
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

module.exports = router;