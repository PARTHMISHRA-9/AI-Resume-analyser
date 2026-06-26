import apiClient from './apiClient';

const resumeService = {
  uploadResume: async (formData) => {
    const response = await apiClient.post('/resume/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getResumes: async (page = 1, limit = 10) => {
    const response = await apiClient.get(`/resume`, { params: { page, limit } });
    return response.data;
  },

  getResume: async (id) => {
    const response = await apiClient.get(`/resume/${id}`);
    return response.data;
  },

  deleteResume: async (id) => {
    const response = await apiClient.delete(`/resume/${id}`);
    return response.data;
  },

  downloadResume: async (id) => {
    const response = await apiClient.get(`/resume/${id}/download`, {
      responseType: 'blob',
    });
    return response.data;
  },

  analyzeResume: async (id) => {
    const response = await apiClient.post(`/resume/${id}/analyze`);
    return response.data;
  },
};

export default resumeService;
