import api from './api';

const resumeService = {
  /**
   * Upload a resume
   * @param {FormData} formData - Form data containing file and optional jobDescription
   * @returns {Promise}
   */
  uploadResume: async (formData) => {
    const response = await api.post('/resume/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  /**
   * Get resume history
   * @param {number} page - Page number (default: 1)
   * @param {number} limit - Items per page (default: 10)
   * @returns {Promise}
   */
  getHistory: async (page = 1, limit = 10) => {
    const response = await api.get('/resume/history', {
      params: { page, limit },
    });
    return response.data;
  },

  /**
   * Get a specific resume
   * @param {string} resumeId - Resume ID
   * @returns {Promise}
   */
  getResume: async (resumeId) => {
    const response = await api.get(`/resume/${resumeId}`);
    return response.data;
  },

  /**
   * Delete a resume
   * @param {string} resumeId - Resume ID
   * @returns {Promise}
   */
  deleteResume: async (resumeId) => {
    const response = await api.delete(`/resume/${resumeId}`);
    return response.data;
  },

  /**
   * Update resume metadata
   * @param {string} resumeId - Resume ID
   * @param {object} data - Update data
   * @returns {Promise}
   */
  updateResume: async (resumeId, data) => {
    const response = await api.put(`/resume/${resumeId}`, data);
    return response.data;
  },

  /**
   * Download resume
   * @param {string} resumeId - Resume ID
   * @returns {Promise}
   */
  downloadResume: async (resumeId) => {
    const response = await api.get(`/resume/${resumeId}/download`, {
      responseType: 'blob',
    });
    return response.data;
  },
};

export default resumeService;
