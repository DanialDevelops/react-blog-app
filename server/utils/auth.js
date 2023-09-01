const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Keep this secret

// Inside your login route
const user = await User.findOne({ email: req.body.email });

if (!user || user.password !== req.body.password) {
  return res.status(401).json({ error: 'Invalid credentials' });
}

// Generate a JWT
const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

// Send the token to the client
res.json({ token });

// Middleware for authentication
function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    req.userId = decoded.userId; // Attach user ID to request
    next();
  });
}