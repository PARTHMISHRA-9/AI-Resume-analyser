import apiClient from './apiClient';

const userService = {
  getProfile: async () => {
    const response = await apiClient.get('/user/profile');
    return response.data;
  },

  updateProfile: async (data) => {
    const response = await apiClient.put('/user/profile', data);
    return response.data;
  },

  changePassword: async (currentPassword, newPassword) => {
    const response = await apiClient.post('/user/change-password', {
      currentPassword,
      newPassword,
    });
    return response.data;
  },

  deleteAccount: async () => {
    const response = await apiClient.delete('/user/account');
    return response.data;
  },

  getStats: async () => {
    const response = await apiClient.get('/user/stats');
    return response.data;
  },
};

export default userService;
