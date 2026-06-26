const Analysis = require('../models/Analysis');
const Resume = require('../models/Resume');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');

const getAnalyses = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const analyses = await Analysis.find({ userId: req.user.userId })
      .populate('resumeId', 'fileName atsScore')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Analysis.countDocuments({ userId: req.user.userId });

    res.status(200).json({
      success: true,
      count: analyses.length,
      total,
      pages: Math.ceil(total / limit),
      analyses,
    });
  } catch (error) {
    next(error);
  }
};

const getAnalysisById = async (req, res, next) => {
  try {
    const analysis = await Analysis.findById(req.params.id)
      .populate('resumeId')
      .populate('userId', 'fullName email');

    if (!analysis) {
      throw new AppError('Analysis not found', 404);
    }

    if (analysis.userId._id.toString() !== req.user.userId) {
      throw new AppError('Unauthorized', 403);
    }

    res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    next(error);
  }
};

const getAnalysisReport = async (req, res, next) => {
  try {
    const analysis = await Analysis.findById(req.params.id);

    if (!analysis) {
      throw new AppError('Analysis not found', 404);
    }

    if (analysis.userId.toString() !== req.user.userId) {
      throw new AppError('Unauthorized', 403);
    }

    res.status(200).json({
      success: true,
      report: analysis.report,
    });
  } catch (error) {
    next(error);
  }
};

const getATSScore = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.resumeId);

    if (!resume) {
      throw new AppError('Resume not found', 404);
    }

    if (resume.userId.toString() !== req.user.userId) {
      throw new AppError('Unauthorized', 403);
    }

    const analysis = await Analysis.findOne({ resumeId: resume._id });

    if (!analysis) {
      throw new AppError('Analysis not found', 404);
    }

    res.status(200).json({
      success: true,
      atsScore: analysis.atsScore,
    });
  } catch (error) {
    next(error);
  }
};

const getKeywordAnalysis = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.resumeId);

    if (!resume) {
      throw new AppError('Resume not found', 404);
    }

    if (resume.userId.toString() !== req.user.userId) {
      throw new AppError('Unauthorized', 403);
    }

    const analysis = await Analysis.findOne({ resumeId: resume._id });

    if (!analysis) {
      throw new AppError('Analysis not found', 404);
    }

    res.status(200).json({
      success: true,
      keywordAnalysis: analysis.keywordAnalysis,
    });
  } catch (error) {
    next(error);
  }
};

const getSuggestions = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.resumeId);

    if (!resume) {
      throw new AppError('Resume not found', 404);
    }

    if (resume.userId.toString() !== req.user.userId) {
      throw new AppError('Unauthorized', 403);
    }

    const analysis = await Analysis.findOne({ resumeId: resume._id });

    if (!analysis) {
      throw new AppError('Analysis not found', 404);
    }

    res.status(200).json({
      success: true,
      suggestions: analysis.suggestions,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAnalyses,
  getAnalysisById,
  getAnalysisReport,
  getATSScore,
  getKeywordAnalysis,
  getSuggestions,
};
