const User = require('../models/User');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');

const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const { fullName, location, website } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { fullName, location, website },
      { new: true, runValidators: true }
    );

    logger.info(`User profile updated: ${req.user.userId}`);

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      user,
    });
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user.userId).select('+password');

    if (!(await user.comparePassword(currentPassword))) {
      throw new AppError('Current password is incorrect', 401);
    }

    user.password = newPassword;
    await user.save();

    logger.info(`Password changed: ${req.user.userId}`);

    res.status(200).json({
      success: true,
      message: 'Password changed successfully',
    });
  } catch (error) {
    next(error);
  }
};

const deleteAccount = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.user.userId);

    logger.info(`Account deleted: ${req.user.userId}`);

    res.status(200).json({
      success: true,
      message: 'Account deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

const getStats = async (req, res, next) => {
  try {
    const Resume = require('../models/Resume');
    const Analysis = require('../models/Analysis');

    const totalResumes = await Resume.countDocuments({ userId: req.user.userId });
    const totalAnalyses = await Analysis.countDocuments({ userId: req.user.userId });

    res.status(200).json({
      success: true,
      stats: {
        totalResumes,
        totalAnalyses,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
  updateProfile,
  changePassword,
  deleteAccount,
  getStats,
};
