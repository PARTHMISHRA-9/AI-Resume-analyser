const jwt = require('jsonwebtoken');
const config = require('../config/config');
const AppError = require('../utils/AppError');

const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      throw new AppError('Access token required', 401);
    }

    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new AppError('Invalid or expired token', 401);
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    next(error);
  }
};

const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new AppError('User not authenticated', 401));
    }

    if (roles.length && !roles.includes(req.user.role)) {
      return next(new AppError('Unauthorized', 403));
    }

    next();
  };
};

module.exports = { authenticateToken, authorize };
