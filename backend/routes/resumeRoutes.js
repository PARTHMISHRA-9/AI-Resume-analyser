const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const upload = require('../config/multer');
const {
  uploadResume,
  getResumes,
  getResumeById,
  deleteResume,
  analyzeResume,
} = require('../controllers/resumeController');

router.post('/upload', authenticateToken, upload.single('file'), uploadResume);
router.get('/', authenticateToken, getResumes);
router.get('/:id', authenticateToken, getResumeById);
router.delete('/:id', authenticateToken, deleteResume);
router.post('/:id/analyze', authenticateToken, analyzeResume);

module.exports = router;
