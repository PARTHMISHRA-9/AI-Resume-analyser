const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');

// Placeholder for user routes
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'User profile route' });
});

router.put('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Update profile route' });
});

module.exports = router;
