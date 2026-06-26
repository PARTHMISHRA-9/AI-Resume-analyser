/**
 * Format file size to human-readable format
 * @param {number} bytes
 * @returns {string}
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

/**
 * Format date to readable format
 * @param {string|Date} date
 * @returns {string}
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Format date and time
 * @param {string|Date} date
 * @returns {string}
 */
export const formatDateTime = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Validate email
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password
 * @returns {object}
 */
export const validatePasswordStrength = (password) => {
  const result = {
    hasMinLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumbers: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  };

  result.strength = Object.values(result).filter(Boolean).length;
  result.isStrong = result.strength >= 4;

  return result;
};

/**
 * Truncate text
 * @param {string} text
 * @param {number} length
 * @returns {string}
 */
export const truncateText = (text, length = 50) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

/**
 * Capitalize first letter
 * @param {string} text
 * @returns {string}
 */
export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Convert to title case
 * @param {string} text
 * @returns {string}
 */
export const toTitleCase = (text) => {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Download file from URL
 * @param {string} url
 * @param {string} filename
 */
export const downloadFile = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Get initials from name
 * @param {string} name
 * @returns {string}
 */
export const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Delay execution
 * @param {number} ms
 * @returns {Promise}
 */
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Check if object is empty
 * @param {object} obj
 * @returns {boolean}
 */
export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

/**
 * Debounce function
 * @param {function} func
 * @param {number} wait
 * @returns {function}
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function
 * @param {function} func
 * @param {number} limit
 * @returns {function}
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
