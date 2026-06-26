import apiClient from './apiClient';

const authService = {
  login: async (email, password) => {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (email, password, fullName) => {
    const response = await apiClient.post('/auth/register', { email, password, fullName });
    return response.data;
  },

  logout: async () => {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  refreshToken: async () => {
    const response = await apiClient.post('/auth/refresh-token');
    return response.data;
  },

  forgotPassword: async (email) => {
    const response = await apiClient.post('/auth/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (token, password) => {
    const response = await apiClient.post('/auth/reset-password', { token, password });
    return response.data;
  },

  verifyEmail: async (token) => {
    const response = await apiClient.post('/auth/verify-email', { token });
    return response.data;
  },
};

export default authService;
