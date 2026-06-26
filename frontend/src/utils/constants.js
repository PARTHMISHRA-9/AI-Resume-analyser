// API Endpoints
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';
export const API_TIMEOUT = parseInt(process.env.REACT_APP_API_TIMEOUT || '30000');

// Routes
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  RESUME: {
    UPLOAD: '/resume/upload',
    HISTORY: '/resume/history',
    DETAIL: '/resume/:id',
  },
  ANALYSIS: {
    LIST: '/analysis',
    DETAIL: '/analysis/:id',
  },
  PROFILE: '/profile',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password/:token',
  },
};

// File Upload Constants
export const FILE_UPLOAD = {
  MAX_SIZE: 10, // MB
  ACCEPTED_FORMATS: ['.pdf', '.doc', '.docx'],
  MIME_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
};

// ATS Score Ranges
export const ATS_SCORE_RANGES = {
  EXCELLENT: { min: 80, max: 100, label: 'Excellent', color: 'success' },
  GOOD: { min: 60, max: 79, label: 'Good', color: 'warning' },
  POOR: { min: 0, max: 59, label: 'Needs Work', color: 'error' },
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  ITEMS_PER_PAGE: [10, 20, 50],
};

// Toast Notifications
export const TOAST_DURATION = 5000;

// Theme
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  USER: 'user',
  TOKEN: 'token',
  THEME: 'theme',
  LANGUAGE: 'language',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  INVALID_FILE: 'Invalid file format or size.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  RESUME_UPLOADED: 'Resume uploaded successfully!',
  ANALYSIS_COMPLETED: 'Analysis completed successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  PASSWORD_CHANGED: 'Password changed successfully!',
};
