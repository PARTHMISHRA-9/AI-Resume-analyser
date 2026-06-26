const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');

// Placeholder for analysis routes
router.get('/', authenticateToken, (req, res) => {
  res.json({ message: 'Get analyses route' });
});

router.get('/:id', authenticateToken, (req, res) => {
  res.json({ message: 'Get analysis by ID route' });
});

router.get('/ats-score/:resumeId', authenticateToken, (req, res) => {
  res.json({ message: 'Get ATS score route' });
});

module.exports = router;
