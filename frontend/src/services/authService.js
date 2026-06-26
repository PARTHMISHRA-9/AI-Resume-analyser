import api from './api';

const authService = {
  /**
   * Register a new user
   * @param {string} email - User email
   * @param {string} password - User password
   * @param {string} fullName - User full name
   * @returns {Promise}
   */
  register: async (email, password, fullName) => {
    const response = await api.post('/auth/register', {
      email,
      password,
      fullName,
    });
    return response.data;
  },

  /**
   * Login user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise}
   */
  login: async (email, password) => {
    const response = await api.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  },

  /**
   * Logout user
   * @returns {Promise}
   */
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  /**
   * Refresh authentication token
   * @returns {Promise}
   */
  refreshToken: async () => {
    const response = await api.post('/auth/refresh');
    return response.data;
  },

  /**
   * Request password reset
   * @param {string} email - User email
   * @returns {Promise}
   */
  forgotPassword: async (email) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  },

  /**
   * Reset password with token
   * @param {string} token - Reset token
   * @param {string} password - New password
   * @returns {Promise}
   */
  resetPassword: async (token, password) => {
    const response = await api.post('/auth/reset-password', {
      token,
      password,
    });
    return response.data;
  },

  /**
   * Verify email
   * @param {string} token - Verification token
   * @returns {Promise}
   */
  verifyEmail: async (token) => {
    const response = await api.post('/auth/verify-email', { token });
    return response.data;
  },
};

export default authService;
