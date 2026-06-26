const Resume = require('../models/Resume');
const Analysis = require('../models/Analysis');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');
const axios = require('axios');
const config = require('../config/config');
const fs = require('fs');

const uploadResume = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new AppError('No file uploaded', 400);
    }

    const resume = await Resume.create({
      userId: req.user.userId,
      fileName: req.file.originalname,
      fileUrl: req.file.path,
      fileSize: req.file.size,
      fileType: req.file.mimetype.split('/')[1],
      analysisStatus: 'pending',
    });

    logger.info(`Resume uploaded: ${resume._id}`);

    res.status(201).json({
      success: true,
      message: 'Resume uploaded successfully',
      resume,
    });
  } catch (error) {
    // Clean up uploaded file on error
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
};

const getResumes = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const resumes = await Resume.find({ userId: req.user.userId })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Resume.countDocuments({ userId: req.user.userId });

    res.status(200).json({
      success: true,
      count: resumes.length,
      total,
      pages: Math.ceil(total / limit),
      resumes,
    });
  } catch (error) {
    next(error);
  }
};

const getResumeById = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      throw new AppError('Resume not found', 404);
    }

    if (resume.userId.toString() !== req.user.userId) {
      throw new AppError('Unauthorized', 403);
    }

    res.status(200).json({
      success: true,
      resume,
    });
  } catch (error) {
    next(error);
  }
};

const deleteResume = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      throw new AppError('Resume not found', 404);
    }

    if (resume.userId.toString() !== req.user.userId) {
      throw new AppError('Unauthorized', 403);
    }

    // Delete file
    if (fs.existsSync(resume.fileUrl)) {
      fs.unlinkSync(resume.fileUrl);
    }

    // Delete analysis records
    await Analysis.deleteMany({ resumeId: resume._id });

    // Delete resume
    await Resume.findByIdAndDelete(req.params.id);

    logger.info(`Resume deleted: ${req.params.id}`);

    res.status(200).json({
      success: true,
      message: 'Resume deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

const analyzeResume = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      throw new AppError('Resume not found', 404);
    }

    if (resume.userId.toString() !== req.user.userId) {
      throw new AppError('Unauthorized', 403);
    }

    // Send to Python service for analysis
    resume.analysisStatus = 'processing';
    await resume.save();

    // TODO: Call Python service
    logger.info(`Resume analysis started: ${resume._id}`);

    res.status(200).json({
      success: true,
      message: 'Analysis started',
      resumeId: resume._id,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadResume,
  getResumes,
  getResumeById,
  deleteResume,
  analyzeResume,
};
