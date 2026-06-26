import api from './api';

const profileService = {
  /**
   * Get user profile
   * @returns {Promise}
   */
  getProfile: async () => {
    const response = await api.get('/user/profile');
    return response.data;
  },

  /**
   * Update user profile
   * @param {object} data - Profile data to update
   * @returns {Promise}
   */
  updateProfile: async (data) => {
    const response = await api.put('/user/profile', data);
    return response.data;
  },

  /**
   * Upload profile picture
   * @param {FormData} formData - Form data containing the image
   * @returns {Promise}
   */
  uploadProfilePicture: async (formData) => {
    const response = await api.post('/user/profile-picture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  /**
   * Change password
   * @param {string} currentPassword - Current password
   * @param {string} newPassword - New password
   * @returns {Promise}
   */
  changePassword: async (currentPassword, newPassword) => {
    const response = await api.post('/user/change-password', {
      currentPassword,
      newPassword,
    });
    return response.data;
  },

  /**
   * Get user statistics
   * @returns {Promise}
   */
  getStatistics: async () => {
    const response = await api.get('/user/statistics');
    return response.data;
  },

  /**
   * Delete user account
   * @param {string} password - User password for confirmation
   * @returns {Promise}
   */
  deleteAccount: async (password) => {
    const response = await api.post('/user/delete-account', { password });
    return response.data;
  },
};

export default profileService;
