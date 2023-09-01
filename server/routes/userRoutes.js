const express = require('express');
const router = express.Router();
const User = require('../models/user.js'); // Import User model

// Define route to register a new user
router.post('/register', async (req, res) => {
  console.log('Received registration request:', req.body);
  try {
    // Create a new user using the User model
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    console.log('New user saved:', savedUser);

    res.json(savedUser);
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Define route to find all users
router.get('/', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const usersId = req.params.id
    // Fetch all users from the database
    const users = await User.findbyId(usersId);

    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});
module.exports = router;