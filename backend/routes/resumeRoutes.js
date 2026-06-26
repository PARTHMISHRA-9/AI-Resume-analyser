const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');

// Placeholder for resume routes
router.post('/upload', authenticateToken, (req, res) => {
  res.json({ message: 'Upload resume route' });
});

router.get('/', authenticateToken, (req, res) => {
  res.json({ message: 'Get resumes route' });
});

router.get('/:id', authenticateToken, (req, res) => {
  res.json({ message: 'Get resume by ID route' });
});

router.delete('/:id', authenticateToken, (req, res) => {
  res.json({ message: 'Delete resume route' });
});

module.exports = router;
