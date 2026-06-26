const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const {
  getAnalyses,
  getAnalysisById,
  getAnalysisReport,
  getATSScore,
  getKeywordAnalysis,
  getSuggestions,
} = require('../controllers/analysisController');

router.get('/', authenticateToken, getAnalyses);
router.get('/:id', authenticateToken, getAnalysisById);
router.get('/:id/report', authenticateToken, getAnalysisReport);
router.get('/ats-score/:resumeId', authenticateToken, getATSScore);
router.get('/keywords/:resumeId', authenticateToken, getKeywordAnalysis);
router.get('/suggestions/:resumeId', authenticateToken, getSuggestions);

module.exports = router;
