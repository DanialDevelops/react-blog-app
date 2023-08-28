require('dotenv').config({ path: '../.env' });
console.log('Loaded environment variables:', process.env.MONGODB_URI);
const express = require('express');
const cors = require('cors'); // For handling CORS
const mongoose = require('mongoose'); // For MongoDB connection
const mongoURI = process.env.MONGODB_URI;
const app = express();

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all routes


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


// Start the server
const port = process.env.PORT || 5000; // Use the provided port or 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});